export interface Project {
  id: string;
  title: string;
  subtitle: string;
  achievement: string;
  tech: string[];
  image: string;
  category: "web" | "ai" | "all";
  link?: string;
}

export const projects: Project[] = [
  {
    id: "hubert-de-blanck",
    title: "Hubert de Blanck",
    subtitle: "Presencia Digital para Artes Escénicas",
    achievement: "Digitalización completa de la cartelera teatral con un sistema dinámico",
    tech: ["Next.js", "Tailwind CSS", "Express", "MySQL"],
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=450&fit=crop",
    category: "web",
    link: "#"
  },
  {
    id: "devia-ecosistema",
    title: "DevIA",
    subtitle: "Ecosistema de Soluciones Inteligentes",
    achievement: "Integración de flujos de trabajo con IA Generativa para automatización de tareas digitales",
    tech: ["Python", "AI Workflows", "LLMs", "Claude", "Gemini"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    category: "ai",
    link: "#"
  },
  {
    id: "imageai-studio",
    title: "ImageAI Studio",
    subtitle: "Optimización de Conversión",
    achievement: "Landing page de alto rendimiento optimizada para SEO y analíticas avanzadas",
    tech: ["React", "Vite", "Vercel", "Analytics"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    category: "web",
    link: "#"
  },
  {
    id: "vibras-fitness",
    title: "Vibras Fitness AI",
    subtitle: "Tech-Driven Health",
    achievement: "Interfaz de alta fidelidad para el sector fitness con despliegue ultrarrápido",
    tech: ["React", "Tailwind", "Vercel", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop",
    category: "web",
    link: "#"
  },
  {
    id: "ai-chat-assistant",
    title: "AI Chat Assistant",
    subtitle: "Orquestación de LLMs",
    achievement: "Asistentes conversacionales usando LangChain y FastAPI para NLP",
    tech: ["LangChain", "OpenAI API", "FastAPI", "Python"],
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=450&fit=crop",
    category: "ai",
    link: "#"
  },
  {
    id: "ecommerce-enterprise",
    title: "E-commerce Enterprise",
    subtitle: "Inventory & Payments Logic",
    achievement: "Sistema robusto de pagos con Stripe y arquitectura escalable para gestión de stock",
    tech: ["Node.js", "Stripe", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    category: "web",
    link: "#"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
