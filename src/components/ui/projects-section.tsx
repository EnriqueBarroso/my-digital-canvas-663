import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight, Code2, Brain, LayoutTemplate } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = [
    { id: "Todos", label: "Todos", icon: LayoutTemplate },
    { id: "Web", label: "Desarrollo Web", icon: Code2 },
    { id: "IA", label: "Inteligencia Artificial", icon: Brain },
  ];

  const projects = [
    {
      title: "Presencia Digital para Artes Escénicas",
      subtitle: "Hubert de Blanck",
      category: "Web",
      achievement: "Digitalización completa de la cartelera teatral con un sistema dinámico.",
      image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=1200&h=675&fit=crop&auto=format",
      tech: ["Next.js", "Tailwind CSS", "Express", "MySQL"],
      liveUrl: "https://hubertdeblanck.netlify.app/",
    },
    {
      title: "DevIA - Ecosistema de Soluciones Inteligentes",
      subtitle: "AI-Driven Digital",
      category: "IA",
      achievement: "Integración de flujos de trabajo con IA Generativa (Claude/Gemini) para automatización de tareas digitales.",
      image: "/devia-preview.png.png",
      tech: ["Python", "AI Workflows", "LLMs"],
      liveUrl: "https://ai-driven-digital-9wyb-rf8g9a9q0-enriquebarrosos-projects.vercel.app/",
    },
    {
      title: "ImageAI Studio - Optimización de Conversión",
      subtitle: "Landing de Alto Rendimiento",
      category: "IA",
      achievement: "Landing page de alto rendimiento optimizada para SEO y analíticas avanzadas de usuario.",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=675&fit=crop&auto=format",
      tech: ["React", "Vite", "Vercel"],
      liveUrl: "https://imageai-studio.netlify.app/",
    },
    {
      title: "Vibras Fitness AI - Tech-Driven Health",
      subtitle: "Fitness Tech Platform",
      category: "Web",
      achievement: "Interfaz de usuario de alta fidelidad diseñada para el sector fitness con despliegue ultrarrápido.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=675&fit=crop&auto=format",
      tech: ["React", "Tailwind", "Vercel"],
      liveUrl: "https://vibras-path-forge.vercel.app/",
    },
    {
      title: "AI Chat Assistant - Orquestación de LLMs",
      subtitle: "Conversational AI",
      category: "IA",
      achievement: "Implementación de asistentes conversacionales usando LangChain y FastAPI para procesamiento de lenguaje natural.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=675&fit=crop&auto=format",
      tech: ["LangChain", "OpenAI API", "FastAPI"],
      liveUrl: "https://lead-llama-bot.vercel.app/",
    },
    {
      title: "E-commerce Enterprise & Inventory Logic",
      subtitle: "Plataforma Comercial",
      category: "Web",
      achievement: "Sistema robusto de pagos con Stripe y arquitectura escalable para gestión de stock en tiempo real.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop&auto=format",
      tech: ["Node.js", "Stripe", "React"],
      liveUrl: "#",
    },
  ];

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const getProjectImage = (project: typeof projects[0]) => {
    if (project.image.startsWith("/") && !project.image.startsWith("/api")) {
      return project.image;
    }
    if (project.liveUrl && project.liveUrl !== "#") {
      return `/api/screenshot?url=${encodeURIComponent(project.liveUrl)}&t=${Date.now()}`;
    }
    return project.image;
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-projects transition-colors">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Proyectos Destacados
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estudios de caso en desarrollo web e inteligencia artificial
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 animate-fade-in">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                activeCategory === cat.id
                  ? "bg-white text-black"
                  : "bg-projects-card border border-projects-border text-muted-foreground hover:text-white hover:border-white/30"
              )}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className={cn(
                "group relative bg-projects-card rounded-xl overflow-hidden",
                "border border-projects-border",
                "shadow-elegant hover:shadow-elegant-hover",
                "transition-all duration-500 ease-out",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-black/20">
                <img
                  src={getProjectImage(project)}
                  alt={`Proyecto ${project.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    if (e.currentTarget.src !== window.location.origin + project.image) {
                      e.currentTarget.src = project.image;
                    }
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover CTA */}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Ver Proyecto
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Subtitle */}
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  {project.subtitle}
                </p>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-primary-foreground transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Achievement */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {project.achievement}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-white/5 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
