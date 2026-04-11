import puppeteer from "puppeteer";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Proyectos importados manualmente para evitar transpilación de TS
const projects = [
  { slug: "cine-cubano",        liveUrl: "https://cine-cuba.vercel.app/" },
  { slug: "hubert-de-blanck",   liveUrl: "https://hubertdeblanck.netlify.app/" },
  { slug: "devia-ecosistema",   liveUrl: "https://ai-driven-digital-9wyb-rf8g9a9q0-enriquebarrosos-projects.vercel.app/" },
  { slug: "imageai-studio",     liveUrl: "https://imageai-studio.netlify.app/" },
  { slug: "vibras-fitness",     liveUrl: "https://vibras-path-forge.vercel.app/" },
  { slug: "clinica-salut",      liveUrl: "https://barcelona-health-hub.vercel.app/" },
  { slug: "ecommerce-enterprise", liveUrl: "#" },
];

const OUTPUT_DIR = join(__dirname, "../public/projects");

async function captureScreenshots() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 1200, height: 675, deviceScaleFactor: 1 },
  });

  for (const project of projects) {
    if (!project.liveUrl || project.liveUrl === "#") {
      console.log(`⏭  Skipping ${project.slug} (no liveUrl)`);
      continue;
    }

    const outputPath = join(OUTPUT_DIR, `${project.slug}.webp`);
    console.log(`📸 Capturing ${project.slug} → ${project.liveUrl}`);

    try {
      const page = await browser.newPage();
      await page.goto(project.liveUrl, { waitUntil: "networkidle2", timeout: 30000 });
      await page.screenshot({ path: outputPath, type: "webp", quality: 85 });
      await page.close();
      console.log(`   ✅ Saved to ${outputPath}`);
    } catch (err) {
      console.error(`   ❌ Failed for ${project.slug}:`, err.message);
    }
  }

  await browser.close();
  console.log("\nDone.");
}

captureScreenshots();
