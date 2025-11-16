import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

// Tipos compatibles con Vercel Node.js runtime
interface NodeRequestLike {
  url?: string;
  headers: Record<string, string | string[] | undefined>;
}

interface NodeResponseLike {
  statusCode: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: string | Buffer) => void;
}

function parseRequestUrl(req: NodeRequestLike): URL {
  const hostHeader = req.headers.host ?? "localhost";
  const host =
    typeof hostHeader === "string" ? hostHeader : hostHeader[0] ?? "localhost";

  const requestUrl = req.url ?? "/";
  return new URL(requestUrl, `http://${host}`);
}

async function takeScreenshot(targetUrl: string, width: number, height: number) {
  const executablePath = await chromium.executablePath;

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width,
      height,
      deviceScaleFactor: 2, // extra nitidez
    },
    executablePath,
    headless: chromium.headless,
  });

  try {
    const page = await browser.newPage();

    await page.goto(targetUrl, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    const buffer = await page.screenshot({
      type: "png",
      fullPage: false,
    });

    return buffer;
  } finally {
    await browser.close();
  }
}

export const config = {
  runtime: "nodejs20" as const,
};

export default async function handler(
  req: NodeRequestLike,
  res: NodeResponseLike
) {
  const urlObj = parseRequestUrl(req);

  // ----- Parámetros -----
  const targetUrl = urlObj.searchParams.get("url");
  const debug = urlObj.searchParams.get("debug") === "1";

  const width = Number(urlObj.searchParams.get("w")) || 960;
  const height = Number(urlObj.searchParams.get("h")) || 540;

  // --- PERMITIR DEBUG SIN URL ---
  if (debug) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      ok: true,
      url: targetUrl || null,
      width,
      height,
      message: "Debug mode. No screenshot generated."
    }));
    return;
  }

  // --- VALIDACIÓN NORMAL ---
  if (!targetUrl) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Missing or invalid ?url=" }));
    return;
  }


  try {
    const screenshotBuffer = await takeScreenshot(targetUrl, width, height);

    // CACHE: cliente 1h, CDN 7 días
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Cache-Control",
      "public, max-age=3600, s-maxage=604800, stale-while-revalidate=86400"
    );

    res.end(screenshotBuffer);
  } catch (error) {
    // fallback controlado para evitar error en <img>
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end({
      error: "Screenshot failed",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
