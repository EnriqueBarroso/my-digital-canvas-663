import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight, Code2, Brain, LayoutTemplate } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = [
    { id: "Todos", label: "Todos", icon: LayoutTemplate },
    { id: "Web", label: "Desarrollo Web", icon: Code2 },
    { id: "IA", label: "Inteligencia Artificial", icon: Brain },
  ];

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const VERCEL_API_DOMAIN = "https://enrique-barroso-dev.vercel.app";

  const getProjectImage = (project: typeof projects[0]) => {
    // A. Si es imagen manual local (ej: /imagen.png), úsala tal cual
    if (project.image.startsWith("/") && !project.image.startsWith("/api")) {
      return project.image;
    }

    // B. Si es una imagen externa de stock (Unsplash, etc), úsala
    if (project.image.startsWith("http")) {
      // Si quieres forzar captura aunque haya foto de stock, borra este if.
      // De momento lo dejamos para que cargue rápido si no es necesario screenshot.
    }

    // C. Lógica Maestra: Si tiene URL en vivo, pedimos la captura a TU VERCEL PRINCIPAL
    if (project.liveUrl && project.liveUrl !== "#") {
      // Usamos la URL absoluta de Vercel siempre.
      // Esto hace que funcione en Netlify y en Localhost.
      return `${VERCEL_API_DOMAIN}/api/screenshot?url=${encodeURIComponent(project.liveUrl)}&t=${project.slug}`;
    }

    // Fallback final
    return project.image;
  };

  return (
    <section id="proyectos" className="py-24 md:py-32 transition-colors">
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
              key={project.slug}
              className={cn(
                "group relative bg-projects-card rounded-xl overflow-hidden",
                "border border-projects-border",
                "shadow-elegant hover:shadow-elegant-hover",
                "transition-all duration-500 ease-out",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Clickable Card Link */}
              <Link
                to={`/proyecto/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`Ver case study de ${project.title}`}
              />

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

                {/* Hover CTA - Ver Case Study */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                  Ver Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Subtitle (Client) - Small first */}
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">
                  {project.subtitle}
                </p>

                {/* Title (Achievement) - Large and bold */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
                  {project.title}
                </h3>

                {/* Achievement description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.achievement}
                </p>

                {/* Tech Stack & Live Link */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-muted-foreground bg-white/5 border border-white/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* External Link Button */}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-20 flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
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
