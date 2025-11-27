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
      title: "Web Compañía Teatral",
      category: "Web",
      description:
        "Sitio oficial para la compañía teatral Hubert de Blanck, con cartelera dinámica y diseño inmersivo.",
      image:
        "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=1200&h=675&fit=crop&auto=format",
      tech: ["Next.js", "Tailwind CSS", "Express", "MySQL"],
      liveUrl: "https://hubertdeblanck.netlify.app/",
      githubUrl: "#",
    },
    {
      title: "DevIA",
      category: "IA",
      description:
        "Transformo ideas en soluciones digitales inteligentes. Desarrollo web a medida y soluciones con IA generativa.",
      // 👇 1. AQUÍ PONEMOS LA RUTA A TU IMAGEN MANUAL (asegúrate de que esté en /public)
      image: "/public/devia-preview.png.png", 
      tech: ["DALL·E", "Claude/Gemini", "Workflows", "Python"],
      liveUrl: "https://ai-driven-digital-9wyb-rf8g9a9q0-enriquebarrosos-projects.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "ImageAI Studio",
      category: "IA",
      description:
        "Landing page moderna optimizada para conversión y SEO, con analíticas integradas.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=675&fit=crop&auto=format",
      tech: ["Vite", "React", "Tailwind", "Vercel"],
      liveUrl: "https://imageai-studio.netlify.app/",
      githubUrl: "#",
    },
    {
      title: "Vibras Fitness AI",
      category: "Web",
      description:
        "Landing page con estética fitness/tech, optimizada para conversión y despliegue rápido.",
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
        "Asistente conversacional con NLP e integración con APIs externas.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=675&fit=crop&auto=format",
      tech: ["React", "FastAPI", "OpenAI API", "LangChain"],
      liveUrl: "https://lead-llama-bot.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "E-commerce Platform",
      category: "Web",
      description:
        "Plataforma de comercio electrónico con panel admin y gestión de inventario.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop&auto=format",
      tech: ["React", "Node.js", "Stripe"],
      liveUrl: "#", 
      githubUrl: "#",
    },
  ];

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // 👇 2. MODIFICAMOS ESTA FUNCIÓN
  const getProjectImage = (project: typeof projects[0]) => {
    // Si la imagen es local (empieza por / y no es API), úsala directamente
    if (project.image.startsWith("/") && !project.image.startsWith("/api")) {
        return project.image;
    }

    // Si no, intenta usar la API de screenshots
    if (project.liveUrl && project.liveUrl !== "#") {
      return `/api/screenshot?url=${encodeURIComponent(project.liveUrl)}&t=${Date.now()}`;
    }
    
    // Fallback final
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-gradient-card dark:bg-card dark:bg-none shadow-card hover:shadow-card-hover transition-all duration-500 group animate-fade-in border-border/50 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video bg-muted group">
                <img
                  src={getProjectImage(project)}
                  alt={`Proyecto ${project.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                      // Si falla la carga, usa la imagen definida en el objeto (fallback)
                      if (e.currentTarget.src !== window.location.origin + project.image) {
                        e.currentTarget.src = project.image;
                      }
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   {project.liveUrl && project.liveUrl !== "#" && (
                     <Button size="sm" variant="secondary" asChild className="rounded-full">
                       <a href={project.liveUrl} target="_blank" rel="noreferrer">
                         <ExternalLink className="w-4 h-4 mr-2" /> Visitar
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
      </div>
    </section>
  );
};

export default ProjectsSection;