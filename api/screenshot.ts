import type { VercelRequest, VercelResponse } from '@vercel/node'
import chromium from '@sparticuz/chromium'
import puppeteer, { type Browser } from 'puppeteer-core'

export const config = {
  runtime: 'nodejs20.x',
  memory: 1024,
  maxDuration: 30
} as const

const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

async function ignoreErrors<T>(p: Promise<T>): Promise<T | null> {
  try {
    return await p
  } catch {
    return null
  }
}

async function fetchOgImage(url: string): Promise<Buffer | null> {
  try {
    const htmlRes = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!htmlRes.ok) return null
    const html = await htmlRes.text()
    const ogMatch =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ??
      html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i)
    const ogUrl = ogMatch?.[1]
    if (!ogUrl) return null
    const absolute = new URL(ogUrl, url).toString()
    const imgRes = await fetch(absolute, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!imgRes.ok) return null
    const arrBuf = await imgRes.arrayBuffer()
    return Buffer.from(arrBuf)
  } catch {
    return null
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const q = req.query?.url
  const url = Array.isArray(q) ? q[0] : q
  const debug = 'debug' in (req.query ?? {})

  if (!url || !/^https?:\/\//i.test(url)) {
    res.status(400).send('Missing or invalid ?url=')
    return
  }

  let browser: Browser | undefined
  try {
    const executablePath = await chromium.executablePath()
    browser = await puppeteer.launch({
      args: [...chromium.args, '--disable-dev-shm-usage'],
      executablePath,
      headless: true,
      defaultViewport: { width: 1200, height: 630, deviceScaleFactor: 1 }
    })

    const page = await browser.newPage()
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    )

    await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'], timeout: 30_000 })
    await ignoreErrors(page.waitForFunction('document.readyState === "complete"', { timeout: 10_000 }))
    await ignoreErrors(page.waitForSelector('body', { timeout: 5_000 }))

    // Espera a fuentes si el runtime lo soporta (sin bloques vacíos)
    await ignoreErrors(page.evaluate(() => {
      const d = document as unknown as { fonts?: { ready?: Promise<unknown> } }
      return d.fonts?.ready ?? Promise.resolve()
    }))

    await sleep(900)

    const buffer = await page.screenshot({ type: 'png' })
    await browser.close()
    browser = undefined

    if (!buffer || buffer.length < 5000) {
      const og = await fetchOgImage(url)
      if (og) {
        res.setHeader('Content-Type', 'image/png')
        res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800')
        res.status(200).send(og)
        return
      }
    }

    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800')
    res.status(200).send(buffer)
  } catch (e) {
    try { if (browser) await browser.close() } catch { /* cerramos silenciosamente */ }
    const og = await fetchOgImage(url)
    if (og) {
      res.setHeader('Content-Type', 'image/png')
      res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800')
      res.status(200).send(og)
      return
    }
    res.status(500).send(debug ? `Screenshot error: ${(e as Error).message}` : 'Screenshot error')
  }
}
