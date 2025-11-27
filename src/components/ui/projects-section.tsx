import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2, Brain, LayoutTemplate } from "lucide-react";
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
      title: "E-commerce Platform",
      category: "Web",
      description:
        "Plataforma de comercio electrónico con panel admin, gestión de inventario y pasarela de pagos integrada.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop&auto=format",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Web Compañía Teatral",
      category: "Web",
      description:
        "Sitio oficial con cartelera dinámica y gestión de actores. Diseño inmersivo pensado para el mundo escénico.",
      image:
        "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=1200&h=675&fit=crop&auto=format",
      tech: ["Next.js", "Tailwind CSS", "Express", "MySQL"],
      liveUrl: "https://hubertdeblanck.netlify.app/",
      githubUrl: "#",
    },
    {
      title: "ImageAI Studio", // 👈 Actualizado el nombre
      category: "IA",          // 👈 CAMBIADO DE "Web" A "IA"
      description:
        "Landing page moderna optimizada para conversión y SEO, con analíticas integradas.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=675&fit=crop&auto=format",
      tech: ["Vite", "React", "Tailwind", "Vercel"],
      liveUrl: "https://imageai-studio.netlify.app/",
      githubUrl: "#",
    },
    {
      title: "GenAI Assets Studio",
      category: "IA",
      description:
        "Generación de imágenes/textos para campañas desde prompts, con pipeline y revisión automática.",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1200&h=675&fit=crop&auto=format",
      tech: ["DALL·E", "Claude/Gemini", "Python", "Workflows"],
      liveUrl: "https://ai-driven-digital-9wyb-rf8g9a9q0-enriquebarrosos-projects.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Vibras Fitness AI",
      category: "Web",
      description:
        "Landing con estética fitness/tech, optimizada para conversión y despliegue rápido.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=675&fit=crop&auto=format",
      tech: ["Vite", "React", "Tailwind", "Vercel"],
      liveUrl: "https://vibras-path-forge.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "AI Chat Assistant",
      category: "IA",
      description:
        "Asistente conversacional con NLP e integración con APIs externas para atención al cliente.",
      image:
        "https://lead-llama-bot.vercel.app/screenshot.png", 
      tech: ["React", "FastAPI", "OpenAI API", "LangChain"],
      liveUrl: "https://lead-llama-bot.vercel.app/",
      githubUrl: "#",
    },
  ];

  // Lógica de filtrado
  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Helper para imágenes
  const getProjectImage = (project: typeof projects[0]) => {
    if (project.liveUrl && project.liveUrl !== "#") {
      return `/api/screenshot?url=${encodeURIComponent(project.liveUrl)}`;
    }
    return project.image;
  };

  return (
    <section id="projects" className="py-20 bg-background transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Una selección de mis trabajos en desarrollo web e inteligencia artificial.
          </p>

          {/* BOTONES DE FILTRO */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className={cn(
                  "rounded-full transition-all duration-300",
                  activeCategory === cat.id 
                    ? "bg-primary hover:bg-primary/90 shadow-md scale-105" 
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <cat.icon className="w-4 h-4 mr-2" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-gradient-card dark:bg-card dark:bg-none shadow-card hover:shadow-card-hover transition-all duration-500 group animate-fade-in border-border/50 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagen */}
              <div className="relative overflow-hidden aspect-video bg-muted group">
                <img
                  src={getProjectImage(project)}
                  alt={`Proyecto ${project.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                      if (e.currentTarget.src !== project.image) {
                        e.currentTarget.src = project.image;
                      }
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   {project.liveUrl && project.liveUrl !== "#" && (
                     <Button size="sm" variant="secondary" asChild className="rounded-full">
                       <a href={project.liveUrl} target="_blank" rel="noreferrer">
                         <ExternalLink className="w-4 h-4 mr-2" /> Demo
                       </a>
                     </Button>
                   )}
                   {project.githubUrl && project.githubUrl !== "#" && (
                     <Button size="sm" variant="secondary" asChild className="rounded-full">
                       <a href={project.githubUrl} target="_blank" rel="noreferrer">
                         <Github className="w-4 h-4 mr-2" /> Código
                       </a>
                     </Button>
                   )}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground line-clamp-1">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs shrink-0 ml-2">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs bg-background/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-muted-foreground animate-fade-in">
            <p>No se encontraron proyectos en esta categoría.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-smooth group"
            asChild
          >
            <a
              href="https://github.com/EnriqueBarroso?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Ver más en GitHub
              <Github className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;