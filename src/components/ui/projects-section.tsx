import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico con panel admin, gestión de inventario y pasarela de pagos integrada.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop&auto=format",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Web Compañía Teatral Hubert de Blanck",
      description:
        "Sitio oficial para la compañía teatral Hubert de Blanck, con cartelera dinámica, repertorio histórico y gestión de actores. Incluye secciones interactivas y un diseño inmersivo pensado para el mundo escénico.",
      image:
        "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=1200&h=675&fit=crop&auto=format",
      tech: ["Next.js", "Tailwind CSS", "Express", "MySQL"],
      liveUrl: "https://hubert-stage-arts.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Landing Page para Startup Tech",
      description:
        "Landing page moderna para una startup tecnológica, optimizada para conversión y SEO. Incluye integración con formularios de contacto, analytics y despliegue en Vercel.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=675&fit=crop&auto=format",
      tech: ["Vite", "React", "Tailwind", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "GenAI Assets Studio",
      description:
        "Generación de imágenes/textos para campañas desde prompts, con pipeline y revisión.",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1200&h=675&fit=crop&auto=format",
      tech: ["DALL·E", "Claude/Gemini", "Moderation", "Workflows"],
      liveUrl:
        "https://ai-driven-digital-9wyb-rf8g9a9q0-enriquebarrosos-projects.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Vibras Path Forge",
      description:
        "Landing con estética fitness/tech, optimizada para conversión, SEO y despliegue en Vercel.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=675&fit=crop&auto=format",
      tech: ["Vite", "React", "Tailwind", "Vercel"],
      liveUrl:
        "https://vibras-path-forge-git-main-enriquebarrosos-projects.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Asistente conversacional con NLP e integración con APIs externas.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop&auto=format",
      tech: ["React", "FastAPI", "OpenAI API", "LangChain"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

<<<<<<< HEAD
  const getProjectImage = (project: typeof projects[0]) => {
    // Si tiene URL real, usar captura de pantalla
    if (project.liveUrl && project.liveUrl !== "#") {
      return `/api/screenshot?url=${encodeURIComponent(project.liveUrl)}`;
    }
    // Fallback a imagen genérica
    return project.image;
  };
=======
  const screenshotSrc = useCallback((liveUrl?: string) => {
    if (!liveUrl || liveUrl === "#") return null;
    return `/api/screenshot?url=${encodeURIComponent(liveUrl)}`;
  }, []);
>>>>>>> 445db77 (Actualización: mejoras del portafolio y función responsive screenshot)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y
            experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Media */}
                <div className="relative overflow-hidden">
                  <div className="w-full aspect-[16/9] bg-secondary/40">
<<<<<<< HEAD
                    <img
                      src={getProjectImage(project)}
                      alt={`Vista del proyecto ${project.title}`}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        if (e.currentTarget.src !== project.image) {
                          e.currentTarget.src = project.image;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
=======

                    {/* 🔥 NUEVO BLOQUE RESPONSIVE */}
                    <picture>
                      <source
                        srcSet={
                          screenshot
                            ? `${screenshot}&w=480&h=270`
                            : fallback
                        }
                        media="(max-width: 640px)"
                        type="image/png"
                      />

                      <source
                        srcSet={
                          screenshot
                            ? `${screenshot}&w=768&h=432`
                            : fallback
                        }
                        media="(max-width: 1024px)"
                        type="image/png"
                      />

                      <source
                        srcSet={
                          screenshot
                            ? `${screenshot}&w=1200&h=675`
                            : fallback
                        }
                        media="(min-width: 1025px)"
                        type="image/png"
                      />

                      {/* Fallback final */}
                      <img
                        src={
                          screenshot
                            ? `${screenshot}&w=960&h=540`
                            : fallback
                        }
                        alt={`Vista del proyecto ${project.title}`}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          if (
                            fallback &&
                            e.currentTarget.src !== fallback
                          ) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </picture>

>>>>>>> 445db77 (Actualización: mejoras del portafolio y función responsive screenshot)
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target={
                            project.liveUrl.startsWith("/")
                              ? "_self"
                              : "_blank"
                          }
                          rel="noreferrer"
                          aria-label={`Abrir proyecto en vivo: ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver proyecto
                        </a>
                      </Button>
                    )}

                    {project.githubUrl &&
                      project.githubUrl !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Abrir repositorio: ${project.title}`}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </a>
                        </Button>
                      )}
                  </div>
                </div>
              </Card>
            ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            asChild
          >
            <a
              href="https://github.com/EnriqueBarroso?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Ver todos los proyectos en GitHub
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
