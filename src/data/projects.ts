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
  // 👇 NUEVO PROYECTO: CINE CUBANO (Añadido al inicio)
  {
    slug: "cine-cubano",
    title: "Cine Cubano - Patrimonio Digital",
    subtitle: "Catálogo Interactivo",
    category: "Web",
    achievement: "Plataforma digital dedicada a la preservación y difusión del patrimonio cinematográfico cubano con búsqueda avanzada.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=675&fit=crop&auto=format",
    tech: ["React", "Vite", "Tailwind CSS", "JSON Data"],
    liveUrl: "https://cine-cuba.vercel.app/", // 👈 Recuerda poner la URL real si la tienes
    year: "2026",
    problem: "El patrimonio cinematográfico cubano cuenta con una rica historia, pero la información sobre filmes, carteles y fichas técnicas se encuentra dispersa o en formatos físicos de difícil acceso. Esto dificulta la labor de investigadores, estudiantes y cinéfilos que buscan consultar esta información de manera ágil y centralizada.",
    solution: "Desarrollé una plataforma web interactiva (SPA) utilizando React y Vite para garantizar una navegación instantánea. Implementé un sistema de búsqueda avanzada y filtrado en tiempo real manejando una base de datos estructurada en JSON. La interfaz, diseñada con Tailwind CSS, pone el foco en la riqueza visual de los carteles cinematográficos.",
    results: [
      "Digitalización de fichas técnicas y carteles históricos",
      "Búsqueda instantánea sin recargas de página",
      "Interfaz adaptable a móviles para consulta rápida",
      "Preservación digital de la identidad visual del cine cubano"
    ],
    gallery: []
  },
  // 👇 RESTO DE PROYECTOS EXISTENTES
  {
    slug: "hubert-de-blanck",
    title: "Presencia Digital para Artes Escénicas",
    subtitle: "Hubert de Blanck",
    category: "Web",
    achievement: "Digitalización completa de la cartelera teatral con un sistema dinámico.",
    image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=1200&h=675&fit=crop&auto=format",
    tech: ["Next.js", "Tailwind CSS", "Express", "MySQL"],
    liveUrl: "https://hubertdeblanck.netlify.app/",
    year: "2024",
    problem: "El Teatro Hubert de Blanck, una institución cultural emblemática, operaba con un sistema de cartelera completamente análogo. La información de funciones, horarios y reservas se gestionaba manualmente, lo que generaba inconsistencias, errores de comunicación y una barrera significativa para atraer a audiencias más jóvenes acostumbradas a la inmediatez digital.",
    solution: "Diseñé e implementé una plataforma web full-stack con un CMS headless personalizado. El frontend en Next.js consume una API REST desarrollada en Express/Node.js que se conecta a una base de datos MySQL. Esto permite al equipo del teatro actualizar la cartelera en tiempo real sin conocimientos técnicos, mientras los usuarios disfrutan de una experiencia de navegación fluida y moderna.",
    results: [
      "Reducción del 80% en el tiempo de actualización de la cartelera",
      "Aumento del 45% en consultas online sobre funciones",
      "Sistema de gestión intuitivo adoptado por personal no técnico",
      "Arquitectura escalable preparada para integración de ticketing"
    ],
    gallery: []
  },
  {
    slug: "devia-ecosistema",
    title: "DevIA - Ecosistema de Soluciones Inteligentes",
    subtitle: "AI-Driven Digital",
    category: "IA",
    achievement: "Integración de flujos de trabajo con IA Generativa (Claude/Gemini) para automatización de tareas digitales.",
    image: "/devia-preview.png", // Asegúrate de que el nombre coincida con tu archivo en public
    tech: ["Python", "AI Workflows", "LLMs"],
    liveUrl: "https://ai-driven-digital-9wyb-rf8g9a9q0-enriquebarrosos-projects.vercel.app/",
    year: "2024",
    problem: "Las agencias digitales y freelancers enfrentan un cuello de botella crítico: tareas repetitivas como la generación de contenido, el análisis de datos o la creación de propuestas consumen horas valiosas que podrían dedicarse a trabajo estratégico. La fragmentación de herramientas de IA agrava el problema, requiriendo cambiar constantemente entre plataformas.",
    solution: "Desarrollé un ecosistema unificado que orquesta múltiples modelos de lenguaje (Claude, Gemini, GPT-4) a través de flujos de trabajo automatizados en Python. La arquitectura modular permite encadenar tareas complejas: desde análisis de briefings hasta generación de contenido multilingüe, pasando por optimización SEO automática. Todo accesible desde una interfaz centralizada.",
    results: [
      "Automatización del 60% de tareas rutinarias de contenido",
      "Reducción del 70% en tiempo de generación de propuestas",
      "Integración seamless con APIs de Claude y Gemini",
      "Flujos de trabajo personalizables sin código"
    ],
    gallery: []
  },
  {
    slug: "imageai-studio",
    title: "ImageAI Studio - Optimización de Conversión",
    subtitle: "Landing de Alto Rendimiento",
    category: "IA",
    achievement: "Landing page de alto rendimiento optimizada para SEO y analíticas avanzadas de usuario.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=675&fit=crop&auto=format",
    tech: ["React", "Vite", "Vercel"],
    liveUrl: "https://imageai-studio.netlify.app/",
    year: "2024",
    problem: "El cliente necesitaba una landing page para su herramienta de procesamiento de imágenes con IA, pero las soluciones existentes tenían tiempos de carga superiores a 4 segundos y tasas de conversión por debajo del 2%. Además, carecían de insights sobre el comportamiento del usuario que permitieran optimización continua.",
    solution: "Construí una landing page ultra-optimizada con React y Vite, implementando lazy loading agresivo, optimización de imágenes en tiempo de build y code-splitting estratégico. Integré un sistema de analíticas personalizado que trackea heatmaps, scroll depth y micro-conversiones, permitiendo A/B testing continuo basado en datos reales.",
    results: [
      "Core Web Vitals: LCP < 1.2s, FID < 50ms, CLS < 0.05",
      "Aumento de conversión del 2.1% al 4.8%",
      "Dashboard de analíticas en tiempo real",
      "Puntuación Lighthouse: 98/100 en Performance"
    ],
    gallery: []
  },
  {
    slug: "vibras-fitness",
    title: "Vibras Fitness AI - Tech-Driven Health",
    subtitle: "Fitness Tech Platform",
    category: "Web",
    achievement: "Interfaz de usuario de alta fidelidad diseñada para el sector fitness con despliegue ultrarrápido.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=675&fit=crop&auto=format",
    tech: ["React", "Tailwind", "Vercel"],
    liveUrl: "https://vibras-path-forge.vercel.app/",
    year: "2024",
    problem: "Las aplicaciones fitness tradicionales ofrecen interfaces genéricas que no conectan emocionalmente con los usuarios. El cliente buscaba una plataforma que combinara la funcionalidad de seguimiento de entrenamientos con una experiencia visual premium que motivara a los usuarios a mantener sus rutinas.",
    solution: "Diseñé e implementé una interfaz de usuario de alta fidelidad utilizando React y Tailwind CSS, con un sistema de diseño personalizado que incluye micro-animaciones motivacionales, gradientes dinámicos que responden al progreso del usuario, y una arquitectura de componentes optimizada para renderizado rápido en dispositivos móviles.",
    results: [
      "Tiempo de desarrollo reducido en 40% gracias al sistema de diseño",
      "Tasa de retención de usuarios aumentada en un 35%",
      "Despliegue continuo con previews automáticas en Vercel",
      "Diseño responsive perfecto en todos los dispositivos"
    ],
    gallery: []
  },
  {
    slug: "ai-chat-assistant",
    title: "AI Chat Assistant - Orquestación de LLMs",
    subtitle: "Conversational AI",
    category: "IA",
    achievement: "Implementación de asistentes conversacionales usando LangChain y FastAPI para procesamiento de lenguaje natural.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=675&fit=crop&auto=format",
    tech: ["LangChain", "OpenAI API", "FastAPI"],
    liveUrl: "https://lead-llama-bot.vercel.app/",
    year: "2024",
    problem: "El cliente necesitaba un asistente virtual capaz de manejar consultas complejas de clientes, pero las soluciones de chatbot tradicionales fallaban en mantener contexto en conversaciones largas, no podían acceder a bases de conocimiento propietarias y ofrecían respuestas genéricas que frustraban a los usuarios.",
    solution: "Arquitecté un sistema conversacional avanzado utilizando LangChain para la orquestación de prompts y gestión de memoria conversacional. El backend en FastAPI expone endpoints RESTful que conectan con OpenAI API, implementando RAG (Retrieval-Augmented Generation) para consultar documentación interna y proporcionar respuestas contextualizadas y precisas.",
    results: [
      "Resolución automática del 75% de consultas frecuentes",
      "Memoria conversacional que mantiene contexto por sesión",
      "Latencia promedio de respuesta < 2 segundos",
      "Integración con base de conocimiento de +500 documentos"
    ],
    gallery: []
  },
  {
    slug: "ecommerce-enterprise",
    title: "E-commerce Enterprise & Inventory Logic",
    subtitle: "Plataforma Comercial",
    category: "Web",
    achievement: "Sistema robusto de pagos con Stripe y arquitectura escalable para gestión de stock en tiempo real.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop&auto=format",
    tech: ["Node.js", "Stripe", "React"],
    liveUrl: "#",
    year: "2023",
    problem: "Una empresa de retail en crecimiento operaba con sistemas de inventario desconectados de su tienda online, causando overselling, errores de stock y una experiencia de checkout frustrante con altas tasas de abandono de carrito. Además, la reconciliación manual de pagos consumía horas de trabajo administrativo.",
    solution: "Desarrollé una plataforma e-commerce integral con Node.js en el backend, React en el frontend, y Stripe como procesador de pagos. Implementé webhooks de Stripe para sincronización automática de transacciones, un sistema de inventario en tiempo real con actualizaciones optimistas, y un dashboard administrativo para gestión unificada de órdenes y stock.",
    results: [
      "Reducción del 95% en errores de overselling",
      "Tasa de abandono de carrito reducida del 78% al 42%",
      "Reconciliación de pagos 100% automatizada",
      "Arquitectura preparada para 10,000+ SKUs"
    ],
    gallery: []
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getNextProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex + 1) % projects.length];
};

export const getPreviousProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex - 1 + projects.length) % projects.length];
};