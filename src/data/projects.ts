export interface Project {
  id: string;
  title: string;
  subtitle: string;
  achievement: string;
  tech: string[];
  image: string;
  category: "web" | "ai" | "all";
  caseStudy: {
    hero: {
      tagline: string;
      year: string;
      role: string;
      duration: string;
    };
    overview: string;
    problem: {
      title: string;
      description: string;
      challenges: string[];
    };
    solution: {
      title: string;
      description: string;
      features: {
        title: string;
        description: string;
      }[];
    };
    results: {
      title: string;
      description: string;
      metrics: {
        value: string;
        label: string;
      }[];
    };
    gallery?: string[];
  };
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
    caseStudy: {
      hero: {
        tagline: "Transformando la experiencia cultural digital",
        year: "2024",
        role: "Full-Stack Developer & UX Designer",
        duration: "4 meses"
      },
      overview: "Hubert de Blanck es uno de los teatros más emblemáticos, con décadas de historia en las artes escénicas. El proyecto consistió en crear una plataforma digital moderna que honrara su legado mientras modernizaba completamente su presencia online.",
      problem: {
        title: "El Desafío",
        description: "El teatro enfrentaba una desconexión significativa entre su prestigio cultural y su presencia digital. Los visitantes potenciales tenían dificultades para encontrar información actualizada sobre la programación.",
        challenges: [
          "Sistema de cartelera desactualizado y difícil de mantener",
          "Falta de una experiencia móvil optimizada",
          "Proceso manual para actualizar eventos y funciones",
          "Baja visibilidad en motores de búsqueda"
        ]
      },
      solution: {
        title: "La Solución",
        description: "Diseñé e implementé una plataforma web completa con un CMS personalizado que permite al equipo del teatro gestionar su contenido de forma autónoma.",
        features: [
          {
            title: "Sistema de Cartelera Dinámico",
            description: "Panel de administración intuitivo para gestionar eventos, horarios y disponibilidad en tiempo real."
          },
          {
            title: "Diseño Responsive Premium",
            description: "Experiencia visual inmersiva que captura la elegancia del teatro en cualquier dispositivo."
          },
          {
            title: "SEO Optimizado",
            description: "Estructura técnica optimizada para posicionamiento orgánico y descubrimiento local."
          },
          {
            title: "API RESTful",
            description: "Backend escalable con Express y MySQL para manejo eficiente de datos."
          }
        ]
      },
      results: {
        title: "Los Resultados",
        description: "El lanzamiento de la nueva plataforma transformó la forma en que el teatro conecta con su audiencia.",
        metrics: [
          { value: "300%", label: "Aumento en tráfico web" },
          { value: "85%", label: "Reducción en tiempo de actualización" },
          { value: "4.9★", label: "Satisfacción del cliente" },
          { value: "60%", label: "Más reservas online" }
        ]
      }
    }
  },
  {
    id: "devia-ecosistema",
    title: "DevIA",
    subtitle: "Ecosistema de Soluciones Inteligentes",
    achievement: "Integración de flujos de trabajo con IA Generativa para automatización de tareas digitales",
    tech: ["Python", "AI Workflows", "LLMs", "Claude", "Gemini"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    category: "ai",
    caseStudy: {
      hero: {
        tagline: "Automatización inteligente para el futuro",
        year: "2024",
        role: "AI Solutions Architect",
        duration: "Ongoing"
      },
      overview: "DevIA es un ecosistema de herramientas y workflows diseñados para integrar IA generativa en procesos empresariales cotidianos, maximizando la productividad y reduciendo tareas repetitivas.",
      problem: {
        title: "El Desafío",
        description: "Las empresas enfrentan cuellos de botella significativos en procesos que requieren análisis, generación de contenido y toma de decisiones repetitivas.",
        challenges: [
          "Procesos manuales que consumen horas de trabajo",
          "Falta de integración entre herramientas existentes",
          "Dificultad para escalar operaciones",
          "Inconsistencia en outputs de contenido"
        ]
      },
      solution: {
        title: "La Solución",
        description: "Desarrollé un ecosistema modular que orquesta múltiples modelos de IA para automatizar flujos de trabajo complejos.",
        features: [
          {
            title: "Orquestación Multi-LLM",
            description: "Sistema que selecciona dinámicamente el modelo óptimo (Claude, Gemini, GPT) según la tarea."
          },
          {
            title: "Workflows Automatizados",
            description: "Pipelines configurables para procesamiento de documentos, generación de contenido y análisis."
          },
          {
            title: "API Unificada",
            description: "Interfaz consistente para interactuar con diferentes proveedores de IA."
          },
          {
            title: "Monitoreo Inteligente",
            description: "Dashboard para tracking de uso, costos y rendimiento de los modelos."
          }
        ]
      },
      results: {
        title: "Los Resultados",
        description: "El ecosistema ha transformado la eficiencia operativa de múltiples equipos.",
        metrics: [
          { value: "70%", label: "Reducción en tiempo de tareas" },
          { value: "10x", label: "Aumento en output de contenido" },
          { value: "45%", label: "Ahorro en costos operativos" },
          { value: "24/7", label: "Disponibilidad del sistema" }
        ]
      }
    }
  },
  {
    id: "imageai-studio",
    title: "ImageAI Studio",
    subtitle: "Optimización de Conversión",
    achievement: "Landing page de alto rendimiento optimizada para SEO y analíticas avanzadas",
    tech: ["React", "Vite", "Vercel", "Analytics"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    category: "web",
    caseStudy: {
      hero: {
        tagline: "Conversiones que impulsan el crecimiento",
        year: "2024",
        role: "Frontend Developer & CRO Specialist",
        duration: "6 semanas"
      },
      overview: "ImageAI Studio necesitaba una landing page que no solo presentara su producto de IA para imágenes, sino que convirtiera visitantes en usuarios de manera efectiva.",
      problem: {
        title: "El Desafío",
        description: "El producto tenía excelente tecnología pero su presencia web no comunicaba su valor ni convertía tráfico en usuarios.",
        challenges: [
          "Tasa de conversión por debajo del 1%",
          "Tiempo de carga superior a 5 segundos",
          "Falta de tracking de comportamiento de usuarios",
          "Mensaje de valor poco claro"
        ]
      },
      solution: {
        title: "La Solución",
        description: "Rediseñé completamente la landing con enfoque en performance, claridad de mensaje y optimización continua.",
        features: [
          {
            title: "Performance First",
            description: "Arquitectura optimizada con Vite y lazy loading para tiempos de carga sub-segundo."
          },
          {
            title: "Copy Orientado a Conversión",
            description: "Messaging claro con CTAs estratégicamente posicionados basados en heatmaps."
          },
          {
            title: "Analytics Avanzadas",
            description: "Implementación de tracking granular para optimización basada en datos."
          },
          {
            title: "A/B Testing Framework",
            description: "Sistema para experimentación continua de elementos de conversión."
          }
        ]
      },
      results: {
        title: "Los Resultados",
        description: "La nueva landing transformó métricas clave del negocio.",
        metrics: [
          { value: "340%", label: "Mejora en conversión" },
          { value: "0.8s", label: "Tiempo de carga" },
          { value: "98", label: "Lighthouse Score" },
          { value: "2.5x", label: "Más signups mensuales" }
        ]
      }
    }
  },
  {
    id: "vibras-fitness",
    title: "Vibras Fitness AI",
    subtitle: "Tech-Driven Health",
    achievement: "Interfaz de alta fidelidad para el sector fitness con despliegue ultrarrápido",
    tech: ["React", "Tailwind", "Vercel", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop",
    category: "web",
    caseStudy: {
      hero: {
        tagline: "Fitness meets technology",
        year: "2024",
        role: "UI/UX Designer & Frontend Developer",
        duration: "3 semanas"
      },
      overview: "Vibras Fitness buscaba diferenciarse en el saturado mercado del fitness digital con una experiencia de usuario premium que reflejara su enfoque innovador.",
      problem: {
        title: "El Desafío",
        description: "El mercado de apps fitness está saturado de interfaces genéricas. Vibras necesitaba destacar visualmente mientras mantenía usabilidad excepcional.",
        challenges: [
          "Diferenciación en mercado competitivo",
          "Necesidad de lanzamiento rápido al mercado",
          "Balance entre estética y funcionalidad",
          "Múltiples tipos de usuarios (principiantes a avanzados)"
        ]
      },
      solution: {
        title: "La Solución",
        description: "Creé un sistema de diseño distintivo con animaciones fluidas que transmite energía y modernidad.",
        features: [
          {
            title: "Motion Design System",
            description: "Micro-interacciones con Framer Motion que dan vida a cada elemento."
          },
          {
            title: "Paleta Energética",
            description: "Colores vibrantes estratégicamente aplicados para motivar y guiar."
          },
          {
            title: "Componentes Adaptivos",
            description: "UI que se adapta al nivel y preferencias de cada usuario."
          },
          {
            title: "Deploy Continuo",
            description: "Pipeline de Vercel para iteraciones rápidas basadas en feedback."
          }
        ]
      },
      results: {
        title: "Los Resultados",
        description: "El lanzamiento superó expectativas en engagement y retención.",
        metrics: [
          { value: "89%", label: "Retención día 7" },
          { value: "4.8★", label: "Rating App Store" },
          { value: "3 sem", label: "Time to market" },
          { value: "50K+", label: "Usuarios primer mes" }
        ]
      }
    }
  },
  {
    id: "ai-chat-assistant",
    title: "AI Chat Assistant",
    subtitle: "Orquestación de LLMs",
    achievement: "Asistentes conversacionales usando LangChain y FastAPI para NLP",
    tech: ["LangChain", "OpenAI API", "FastAPI", "Python"],
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=450&fit=crop",
    category: "ai",
    caseStudy: {
      hero: {
        tagline: "Conversaciones que resuelven",
        year: "2024",
        role: "AI Engineer & Backend Developer",
        duration: "2 meses"
      },
      overview: "Desarrollo de un sistema de asistentes conversacionales inteligentes capaces de entender contexto, mantener memoria de conversación y ejecutar acciones.",
      problem: {
        title: "El Desafío",
        description: "Los chatbots tradicionales fallan en conversaciones complejas y carecen de la capacidad de ejecutar acciones basadas en el contexto.",
        challenges: [
          "Pérdida de contexto en conversaciones largas",
          "Incapacidad de ejecutar acciones reales",
          "Respuestas genéricas sin personalización",
          "Alta latencia en respuestas"
        ]
      },
      solution: {
        title: "La Solución",
        description: "Arquitectura basada en LangChain con memoria conversacional y sistema de herramientas para acciones.",
        features: [
          {
            title: "Memoria Contextual",
            description: "Sistema de memoria que mantiene contexto relevante sin sobrecargar el modelo."
          },
          {
            title: "Tool Calling",
            description: "Integración de herramientas para ejecutar acciones (APIs, bases de datos, emails)."
          },
          {
            title: "FastAPI Backend",
            description: "API async de alto rendimiento para streaming de respuestas."
          },
          {
            title: "Prompt Engineering",
            description: "Templates optimizados para diferentes casos de uso y personalidades."
          }
        ]
      },
      results: {
        title: "Los Resultados",
        description: "El sistema maneja miles de conversaciones diarias con alta satisfacción.",
        metrics: [
          { value: "92%", label: "Resolución sin escalado" },
          { value: "<1s", label: "Latencia promedio" },
          { value: "85%", label: "Satisfacción usuarios" },
          { value: "5K+", label: "Conversaciones/día" }
        ]
      }
    }
  },
  {
    id: "ecommerce-enterprise",
    title: "E-commerce Enterprise",
    subtitle: "Inventory & Payments Logic",
    achievement: "Sistema robusto de pagos con Stripe y arquitectura escalable para gestión de stock",
    tech: ["Node.js", "Stripe", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    category: "web",
    caseStudy: {
      hero: {
        tagline: "Comercio electrónico a escala",
        year: "2023",
        role: "Full-Stack Developer",
        duration: "5 meses"
      },
      overview: "Plataforma e-commerce enterprise con gestión de inventario en tiempo real, procesamiento de pagos seguro y arquitectura preparada para alto tráfico.",
      problem: {
        title: "El Desafío",
        description: "El cliente operaba con sistemas fragmentados que causaban errores de inventario, pagos fallidos y pérdida de ventas.",
        challenges: [
          "Sincronización de inventario entre canales",
          "Altas tasas de abandono de carrito",
          "Sistema de pagos poco confiable",
          "Escalabilidad limitada en picos de demanda"
        ]
      },
      solution: {
        title: "La Solución",
        description: "Arquitectura unificada con gestión de inventario en tiempo real y procesamiento de pagos optimizado.",
        features: [
          {
            title: "Inventario Real-Time",
            description: "Sistema de stock con actualizaciones instantáneas y alertas automáticas."
          },
          {
            title: "Stripe Integration",
            description: "Checkout optimizado con múltiples métodos de pago y manejo de errores robusto."
          },
          {
            title: "API Escalable",
            description: "Backend Node.js con arquitectura de microservicios y caching inteligente."
          },
          {
            title: "Analytics Dashboard",
            description: "Panel de control con métricas de ventas, inventario y comportamiento de usuarios."
          }
        ]
      },
      results: {
        title: "Los Resultados",
        description: "La nueva plataforma transformó las operaciones y las ventas del negocio.",
        metrics: [
          { value: "99.9%", label: "Uptime del sistema" },
          { value: "35%", label: "Reducción abandono carrito" },
          { value: "0", label: "Errores de inventario" },
          { value: "200%", label: "Crecimiento en ventas" }
        ]
      }
    }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
