import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getProjectBySlug, getNextProject, getPreviousProject } from "@/data/projects";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Tag, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const nextProject = slug ? getNextProject(slug) : undefined;
  const prevProject = slug ? getPreviousProject(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-projects flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Proyecto no encontrado</h1>
          <Link to="/#proyectos" className="text-primary hover:underline">
            Volver a proyectos
          </Link>
        </div>
      </div>
    );
  }

  const getProjectImage = () => {
    if (project.image.startsWith("/") && !project.image.startsWith("/api")) {
      return project.image;
    }
    if (project.liveUrl && project.liveUrl !== "#") {
      return `/api/screenshot?url=${encodeURIComponent(project.liveUrl)}&t=${Date.now()}`;
    }
    return project.image;
  };

  return (
    <div className="min-h-screen bg-projects">
      {/* Back Navigation */}
      <div className="fixed top-24 left-6 z-50">
        <Link
          to="/#proyectos"
          className="flex items-center gap-2 px-4 py-2 bg-projects-card/80 backdrop-blur-sm border border-projects-border rounded-full text-sm text-muted-foreground hover:text-white hover:border-white/30 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Subtitle */}
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 animate-fade-in">
            {project.subtitle}
          </p>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1] animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {project.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Tag className="w-4 h-4" />
              <span className="text-sm">{project.category}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Layers className="w-4 h-4" />
              <span className="text-sm">{project.tech.join(" · ")}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-projects-card border border-projects-border shadow-elegant animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <img
              src={getProjectImage()}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                if (e.currentTarget.src !== window.location.origin + project.image) {
                  e.currentTarget.src = project.image;
                }
              }}
            />
          </div>

          {/* Live URL Button */}
          {project.liveUrl && project.liveUrl !== "#" && (
            <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
              >
                Ver Proyecto Live
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid gap-16 md:gap-24">
            {/* Problem Section */}
            <div className="animate-fade-in">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
                01 — El Problema
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Desafío inicial
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution Section */}
            <div className="animate-fade-in">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
                02 — La Solución
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Enfoque técnico
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Results Section */}
            <div className="animate-fade-in">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
                03 — Resultados
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Impacto medible
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="p-6 bg-projects-card border border-projects-border rounded-xl"
                  >
                    <p className="text-white leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Detail */}
            <div className="animate-fade-in">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
                04 — Stack Tecnológico
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Herramientas utilizadas
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section (if images exist) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 md:py-24 border-t border-projects-border">
          <div className="container mx-auto px-6 max-w-6xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium text-center">
              Galería
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
              Capturas del proyecto
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((img, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-xl overflow-hidden bg-projects-card border border-projects-border"
                >
                  <img
                    src={img}
                    alt={`${project.title} - Captura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="py-16 md:py-24 border-t border-projects-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Previous Project */}
            {prevProject && (
              <Link
                to={`/proyecto/${prevProject.slug}`}
                className="group p-6 md:p-8 bg-projects-card border border-projects-border rounded-xl hover:border-white/30 transition-all duration-300"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Proyecto anterior
                </p>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-foreground transition-colors">
                  {prevProject.title}
                </h3>
              </Link>
            )}

            {/* Next Project */}
            {nextProject && (
              <Link
                to={`/proyecto/${nextProject.slug}`}
                className={cn(
                  "group p-6 md:p-8 bg-projects-card border border-projects-border rounded-xl hover:border-white/30 transition-all duration-300 text-right",
                  !prevProject && "md:col-start-2"
                )}
              >
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 flex items-center gap-2 justify-end">
                  Siguiente proyecto
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </p>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-foreground transition-colors">
                  {nextProject.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-projects-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Tienes un proyecto similar en mente?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Me encantaría escuchar sobre tu próximo desafío y cómo puedo ayudarte a hacerlo realidad.
          </p>
          <Link
            to="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            Hablemos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
