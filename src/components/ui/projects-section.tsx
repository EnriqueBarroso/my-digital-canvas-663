import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Code2, Brain, LayoutTemplate } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "ai">("all");

  const categories = [
    { id: "all" as const, label: "Todos", icon: LayoutTemplate },
    { id: "web" as const, label: "Desarrollo Web", icon: Code2 },
    { id: "ai" as const, label: "Inteligencia Artificial", icon: Brain },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 md:py-32 bg-projects transition-colors">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
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
                  ? "bg-primary text-primary-foreground"
                  : "bg-project-card border border-project-card-border text-muted-foreground hover:text-foreground hover:border-border"
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
            <a
              key={project.id}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative bg-project-card rounded-xl overflow-hidden",
                "border border-project-card-border",
                "shadow-elegant hover:shadow-elegant-hover",
                "transition-all duration-500 ease-out",
                "animate-fade-in block"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-muted/20">
                <img
                  src={project.image}
                  alt={`Proyecto ${project.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover CTA */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Ver Proyecto
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Subtitle */}
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  {project.subtitle}
                </p>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Achievement */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {project.achievement}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted/10 border-border/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
