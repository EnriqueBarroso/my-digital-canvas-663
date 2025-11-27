import type { VercelRequest, VercelResponse } from "@vercel/node";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "Falta el parámetro 'url'" });
  }

  let browser = null;

  try {
    // 1. Detección de entorno
    const localExePath = process.env.CHROME_EXECUTABLE_PATH; 

    // Definimos el viewport fijo para evitar el error de tipo
    const viewportConfig = { 
      width: 1200, 
      height: 630, 
      deviceScaleFactor: 1 
    };

    if (localExePath) {
      // 🟢 MODO LOCAL
      console.log("📸 Modo Local detectado.");
      browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        executablePath: localExePath,
        headless: true, // Ponemos true directamente
        defaultViewport: viewportConfig
      });
    } else {
      // ☁️ MODO VERCEL
      chromium.setGraphicsMode = false;
      
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: viewportConfig, // Soluciona error 'defaultViewport'
        executablePath: await chromium.executablePath(),
        headless: true, // Soluciona error 'headless' y 'any'
      });
    }

    const page = await browser.newPage();

    // Aseguramos el viewport en la página también
    await page.setViewport(viewportConfig);

    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 8000, 
    });

    const file = await page.screenshot({ type: "png" });

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Cache-Control",
      "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400"
    );

    res.end(file);

  } catch (error) {
    console.error("❌ Error generando screenshot:", error);
    res.statusCode = 500;
    res.json({ 
        error: "Error interno al generar imagen", 
        details: error instanceof Error ? error.message : "Error desconocido" 
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}