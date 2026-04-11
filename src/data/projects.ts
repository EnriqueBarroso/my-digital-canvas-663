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
      "Marketplace + delivery en producción con SEO técnico completo, rate limiting serverless y compresión de imágenes del 97%",
    image: "/projects/lachopin.webp",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Clerk",
      "Cloudinary",
      "Resend",
      "Upstash Redis",
      "Tailwind CSS",
      "Vercel",
    ],
    liveUrl: "https://lachopin.com",
    year: "2026",
    problem:
      "En Cuba, el comercio digital ocurre en grupos caóticos de Facebook y WhatsApp donde los anuncios se pierden, no hay búsqueda real, ni perfiles confiables, ni filtros por categoría o precio. Las alternativas existentes como Revolico están desactualizadas y no son mobile-first. Los compradores no pueden encontrar lo que buscan y los vendedores no tienen cómo destacar.",
    solution:
      "Construí un marketplace moderno mobile-first que centraliza la oferta sin romper el hábito de los usuarios: el contacto entre comprador y vendedor sigue fluyendo por WhatsApp, pero todo lo demás (descubrimiento, búsqueda, perfiles, filtrado, vertical de delivery con LaChopin Eats) ocurre en una plataforma rápida, indexada por Google y diseñada para conexiones lentas. Una sola base de datos sirve marketplace y delivery mediante Prisma enums y filtros aislados.",
    results: [
      "Marketplace funcional en producción con SEO técnico completo: sitemap dinámico, JSON-LD structured data, Open Graph optimizado e indexado en Google Search Console",
      "Arquitectura dual marketplace + delivery (LaChopin Eats) compartiendo base de datos sin acoplar lógicas, mediante enums y filtros aislados en Prisma",
      "Búsqueda full-text en PostgreSQL con autocompletado debounced en tiempo real y algoritmo anti-monopolio en el feed (máx. 2 productos por vendedor en portada)",
      "Rate limiting real con Upstash Redis en middleware de Next.js, funcional en arquitectura serverless de Vercel donde un contador en memoria sería inútil",
      "Compresión de imágenes del 97% combinando Cloudinary (WebP + resize contextual) con preprocesado local de banners (de 23 MB a 570 KB)",
      "Migración crítica de Clerk dev → producción con OAuth propio en Google Cloud, 5 registros DNS y graceful degradation en middleware: si Clerk cae, las rutas públicas siguen accesibles",
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
      "Digitalización completa del repertorio y equipo artístico con CMS a medida y arquitectura de imágenes en Cloudflare R2",
    image: "/projects/hubert-de-blanck.webp",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "React Router",
      "Supabase",
      "TanStack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Cloudflare R2",
      "Vercel",
    ],
    liveUrl: "https://hubertdeblanck.com",
    year: "2026",
    problem:
      "La compañía Hubert de Blanck, con décadas de historia y un legado cultural profundo, carecía de presencia digital moderna. La gestión de su repertorio, el elenco histórico y las funciones activas se hacía de forma fragmentada, lo que dificultaba conectar con nuevas audiencias, promocionar la cartelera actual y preservar la memoria de sus fundadores y producciones clásicas.",
    solution:
      "Construí una Single Page Application elegante con un CMS propio que permite al equipo gestionar la cartelera en tiempo real, clasificar al elenco por roles y etapas históricas, y administrar galerías multimedia de forma autónoma. Todo envuelto en un diseño minimalista que respeta la identidad clásica del teatro y funciona perfectamente en móvil.",
    results: [
      "Panel de administración a medida con Supabase para gestionar producciones (CRUD), perfiles del equipo, talleres y blog integrado, sin dependencias de CMS externos",
      "Cartelera con renderizado inteligente: la interfaz alterna dinámicamente entre funciones activas y un diseño de expectativa ('Próximamente') según el estado de la base de datos",
      "Arquitectura de imágenes de alto rendimiento y bajo coste con Cloudflare R2, referenciadas desde Supabase mediante URLs directas",
      "Clasificación del elenco por roles (dirección, actuación) y etapas históricas (fundadores, maestros, actualidad), respetando la estructura real de una compañía teatral con décadas de trayectoria",
      "Modelo de datos tipado con TypeScript y Supabase Types para garantizar la integridad en relaciones complejas (obras-actores-roles)",
      "UI sofisticada y mobile-first con Tailwind y shadcn/ui, usando tipografías clásicas (Playfair Display) para evocar la estética teatral sin caer en lo anticuado",
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