import puppeteer from "puppeteer";
import { mkdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_FILE = join(__dirname, "../src/data/projects.ts");
const OUTPUT_DIR = join(__dirname, "../public/projects");

/**
 * Lee src/data/projects.ts y extrae los pares { slug, liveUrl }
 * con regex. Evita tener que compilar TypeScript en el script.
 */
function loadProjectsFromTS() {
  const source = readFileSync(PROJECTS_FILE, "utf-8");

  // Captura cada bloque que contenga slug y liveUrl en cualquier orden
  const projects = [];
  const objectRegex = /\{[^{}]*?slug:\s*["']([^"']+)["'][^{}]*?\}/gs;

  let match;
  while ((match = objectRegex.exec(source)) !== null) {
    const block = match[0];
    const slug = match[1];
    const urlMatch = block.match(/liveUrl:\s*["']([^"']+)["']/);
    if (urlMatch) {
      projects.push({ slug, liveUrl: urlMatch[1] });
    }
  }

  return projects;
}

async function captureScreenshots() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const projects = loadProjectsFromTS();

  if (projects.length === 0) {
    console.error("❌ No se encontraron proyectos en projects.ts");
    process.exit(1);
  }

  console.log(`📋 ${projects.length} proyectos encontrados en projects.ts\n`);

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
      await page.goto(project.liveUrl, {
        waitUntil: "networkidle2",
        timeout: 45000,
      });
      // Pequeña pausa para que terminen animaciones de entrada
      await new Promise((r) => setTimeout(r, 1500));
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