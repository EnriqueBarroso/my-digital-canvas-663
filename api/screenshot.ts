import type { VercelRequest, VercelResponse } from "@vercel/node";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

// ==============================
// TAKE SCREENSHOT
// ==============================
async function takeScreenshot(targetUrl: string, width: number, height: number): Promise<Buffer> {
  const executablePath = await chromium.executablePath();

  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath,
    headless: true,
    defaultViewport: {
      width,
      height,
      deviceScaleFactor: 2, // alta calidad
    },
  });

  const page = await browser.newPage();

  await page.goto(targetUrl, {
    waitUntil: "networkidle0", // asegura carga completa
    timeout: 30_000,
  });

  const screenshotUint8 = (await page.screenshot({
    type: "png",
    fullPage: false,
  })) as Uint8Array; // Puppeteer devuelve Uint8Array

  await browser.close();

  // 👇 CONVERSIÓN DEFINITIVA
  return Buffer.from(screenshotUint8);
}

// ==============================
// HANDLER PRINCIPAL
// ==============================
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { url, width = 1200, height = 800 } = req.query;

  if (!url || typeof url !== "string") {
    res.status(400).json({ error: "Missing 'url' parameter" });
    return;
  }

  try {
    const screenshotBuffer = await takeScreenshot(url, Number(width), Number(height));

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/png");

    // Cache: cliente 1h, CDN 7 días
    res.setHeader(
      "Cache-Control",
      "public, max-age=3600, s-maxage=604800, stale-while-revalidate=86400"
    );

    res.end(screenshotBuffer); // ✔️ Buffer, sin error
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        error: "Screenshot failed",
        details: error instanceof Error ? error.message : "Unknown error",
      })
    );
  }
}
