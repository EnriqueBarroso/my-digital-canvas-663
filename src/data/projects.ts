export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Web" | "IA";
  achievement: string;
  image: string;
  tech: string[];
  liveUrl: string;
  year: string;
  problem: string;
  solution: string;
  results: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "lachopin",
    title: "LaChopin",
    subtitle: "Marketplace mobile-first peer-to-peer para Cuba",
    category: "Web",
    achievement:
      "Arquitectura fullstack de 3 capas en producción: Next.js + API RESTful propia con NestJS + PostgreSQL, con usuarios reales desde el primer día",
    image: "/projects/lachopin.webp",
    tech: [
      "Next.js 14",
      "NestJS 11",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Clerk",
      "Cloudinary",
      "Resend",
      "Railway",
      "Vercel",
    ],
    liveUrl: "https://lachopin.com",
    year: "2026",
    problem:
      "En Cuba, el comercio digital ocurre en grupos caóticos de Facebook y WhatsApp donde los anuncios se pierden, no hay búsqueda real, ni perfiles confiables, ni filtros por categoría o precio. Las alternativas existentes están desactualizadas y no son mobile-first. Los compradores no pueden encontrar lo que buscan y los vendedores no tienen cómo destacar.",
    solution:
      "Construí un marketplace moderno mobile-first con arquitectura de 3 capas completamente separadas: frontend en Next.js (Vercel), API RESTful propia en NestJS (Railway) y base de datos PostgreSQL en Supabase. El contacto entre comprador y vendedor sigue fluyendo por WhatsApp, pero el descubrimiento, búsqueda, perfiles y filtrado ocurren en una plataforma rápida e indexada por Google.",
    results: [
      "Arquitectura de 3 capas en producción: Next.js 14 (Vercel) → API RESTful NestJS 11 (Railway) → PostgreSQL (Supabase). Frontend sin acceso directo a base de datos.",
      "API RESTful construida desde cero con NestJS: módulos Products, Sellers, Orders y Users con controladores, DTOs validados con class-validator y ValidationPipe global.",
      "Migración sin downtime: el frontend pasó de conectar directo a Prisma a consumir la API propia manteniendo lachopin.com en producción durante todo el proceso.",
      "Seguridad por capas: DTOs con class-validator, JWT Guards de Clerk configurados en endpoints protegidos e integridad referencial garantizada por Prisma (8 modelos con relaciones).",
      "Deploy continuo en Railway: la API se despliega automáticamente desde GitHub en cada push a main, con variables de entorno gestionadas en la plataforma.",
      "SEO técnico completo: sitemap dinámico, JSON-LD structured data, Open Graph optimizado e indexado en Google Search Console desde el primer día.",
    ],
    gallery: ["/projects/lachopin.webp"],
  },
  {
    slug: "hola-camarada",
    title: "¡Hola, Camarada!",
    subtitle: "Directorio progresista y hub de medios independientes en español",
    category: "Web",
    achievement:
      "Hub de medios con directorio generado por IA, moderación automática de contenido y PWA instalable",
    image: "/projects/hola-camarada.webp",
    tech: [
      "React 19",
      "TypeScript",
      "Vite 6",
      "Supabase",
      "PostgreSQL",
      "Claude API",
      "YouTube Data API",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    liveUrl: "https://holacamarada.com",
    year: "2026",
    problem:
      "El ecosistema mediático hispanohablante de medios independientes está fragmentado en decenas de canales de YouTube, cuentas de Instagram y perfiles de Twitter sin ningún punto de referencia común. Los usuarios interesados en descubrir nuevos creadores afines no tienen forma de hacerlo, y los propios creadores carecen de visibilidad fuera de sus audiencias ya consolidadas.",
    solution:
      "Construí un directorio interactivo y hub de medios que centraliza perfiles de periodistas, creadores y medios independientes en un solo lugar. La plataforma combina un directorio curado con búsqueda asistida por IA, sincronización automática de YouTube, una comunidad con roles verificados y moderación automática de contenido. El admin panel propio permite gestionar todo sin dependencias externas.",
    results: [
      "Directorio con buscador IA integrado (Claude API) que genera perfiles automáticamente desde búsqueda web, reduciendo el tiempo de alta de un perfil de 10 minutos a 30 segundos",
      "Sincronización automática de YouTube con detección de Shorts — el Top 10 diario y las píldoras virales se actualizan desde un panel CMS propio sin intervención técnica",
      "Sistema de comunidad completo con registro email/Google OAuth, roles verificados y sistema de invitaciones por WhatsApp",
      "Moderación automática de contenido con Claude — cada post se evalúa contra los criterios editoriales de la plataforma antes de publicarse, filtrando automáticamente contenido fuera de línea",
      "PWA instalable en móvil con Service Worker, caché de Supabase y manifest.json — la plataforma se instala como app nativa en Android e iOS",
      "SEO técnico con URLs individuales por perfil, Schema.org JSON-LD tipo Person, sitemap.xml dinámico y verificación en Google Search Console desde el primer día",
    ],
    gallery: ["/projects/hola-camarada.webp"],
  },
  {
    slug: "cine-cubano",
    title: "CineCuba",
    subtitle: "Archivo digital interactivo del patrimonio cinematográfico cubano",
    category: "Web",
    achievement:
      "SPA de alto rendimiento con búsqueda instantánea, fichas relacionales y SEO técnico desde el primer día",
    image: "/projects/cine-cubano.webp",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "React Router",
      "Supabase",
      "TanStack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Vercel",
      "Cloudflare",
    ],
    liveUrl: "https://cine-cubano.com",
    year: "2026",
    problem:
      "El patrimonio cinematográfico cubano estaba disperso por la web, con enlaces rotos, fichas incompletas y sin un punto de referencia común. Las nuevas generaciones y la diáspora no tenían un lugar donde descubrir directores, películas y filmografías de forma estructurada, y los clásicos de la cultura corrían el riesgo de quedar en el olvido digital.",
    solution:
      "Construí una Single Page Application moderna, rápida y mobile-first que centraliza el catálogo del cine cubano. La plataforma combina un motor de búsqueda instantáneo, fichas relacionales entre obras y directores, persistencia local de favoritos sin necesidad de cuenta y un diseño accesible enfocado en lecturas largas y descubrimiento por exploración.",
    results: [
      "Motor de búsqueda en tiempo real con estado en URL — los resultados son instantáneos y cada búsqueda genera un enlace compartible",
      "Modelo de datos estrictamente tipado con TypeScript que gestiona colecciones relacionales (películas, directores, elenco, premios) sin penalizar el rendimiento en cliente",
      "Sistema de favoritos con LocalStorage — personalización completa sin login ni base de datos, respetando privacidad y reduciendo fricción",
      "Pipeline CI/CD en Vercel con DNS, SSL y protección contra ataques gestionados desde Cloudflare",
      "SEO técnico desde el primer día: sitemap.xml, robots.txt, Open Graph, integración con Google Analytics 4 y Google Search Console",
      "UI modular y accesible con Tailwind y shadcn/ui, integrando micro-monetización (Buy Me a Coffee) de forma no intrusiva",
    ],
    gallery: ["/projects/cine-cubano.webp"],
  },
  {
    slug: "teatro-hubert-de-blanck",
    title: "Teatro Hubert de Blanck",
    subtitle: "Plataforma oficial y CMS para la histórica compañía teatral cubana",
    category: "Web",
    achievement:
      "Plataforma institucional con sistema de diseño neo-brutalista propio, panel admin completo con flujo de propuestas y autorización en dos capas (RLS + JWT)",
    image: "/projects/hubert-de-blanck.webp",
    tech: [
      "React 19",
      "TypeScript",
      "Vite 6",
      "React Router 7",
      "Supabase (PostgreSQL + RLS)",
      "Tailwind CSS",
      "Framer Motion",
      "react-helmet-async",
      "PWA (vite-plugin-pwa)",
      "Vercel",
    ],
    liveUrl: "https://hubert-de-blanck.vercel.app/",
    year: "2026",
    problem:
      "La Compañía Teatral Hubert de Blanck carecía de presencia digital moderna y de herramientas para gestionar su historia de forma autónoma. El repertorio, las producciones históricas, el elenco y las galerías se gestionaban de forma fragmentada, sin distinción entre la obra como texto atemporal y sus distintos montajes a lo largo de los años.",
    solution:
      "Construí una plataforma institucional con identidad visual neo-brutalista propia y un panel de administración completo que permite al equipo gestionar todo el contenido sin dependencias externas. El modelo de datos separa obras (entidades atemporales) de producciones (montajes concretos con año, temporada y reparto), preservando la historia completa de la compañía sin duplicar información.",
    results: [
      "Sistema de diseño neo-brutalista propio sobre Tailwind CSS: paleta semántica (paper, ink, carmín), sombras brutalistas sin difuminado y tipografía teatral en tres niveles (Cormorant Garamond, Inter, JetBrains Mono).",
      "Modelo relacional obras → producciones → reparto → perfiles: permite registrar la misma obra reestrenada en distintos años con repartos diferentes sin duplicar información ni perder historial.",
      "Autorización en dos capas independientes: Row Level Security en PostgreSQL con función is_admin() + hook useAdmin() en frontend que valida JWT contra servidor y reacciona a expiración de sesión.",
      "Panel de administración con 4 módulos (Equipo, Obras, Galerías, Propuestas) y flujo de revisión: los miembros proponen su participación desde /mi-perfil y el admin aprueba o rechaza desde el panel.",
      "PWA instalable en móvil y escritorio, SEO dinámico por página con react-helmet-async, slugs en español con slugify() y cabeceras de seguridad en vercel.json (X-Frame-Options, Permissions-Policy).",
      "Refresh explícito de sesión antes de cada operación de Storage para evitar el error 'exp claim timestamp check failed' de JWT en tokens expirados.",
    ],
    gallery: ["/projects/hubert-de-blanck.webp"],
  },
];

export const getNextProject = (currentSlug: string): Project => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getPreviousProject = (currentSlug: string): Project => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
  return projects[previousIndex];
};