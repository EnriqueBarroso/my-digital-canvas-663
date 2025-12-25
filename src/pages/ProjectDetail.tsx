import { useParams, useNavigate } from "react-router-dom";
import { getProjectById } from "@/data/projects";
import { ArrowLeft, Calendar, Clock, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-projects flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Proyecto no encontrado</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen bg-projects">
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-50">
        <Button
          onClick={() => navigate("/#proyectos")}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Category Badge */}
          <Badge 
            variant="outline" 
            className="mb-6 border-primary/30 text-primary bg-primary/5"
          >
            {project.category === "ai" ? "Inteligencia Artificial" : "Desarrollo Web"}
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            {project.title}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl">
            {caseStudy.hero.tagline}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{caseStudy.hero.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span>{caseStudy.hero.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{caseStudy.hero.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 max-w-6xl mb-20 md:mb-32">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elegant">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-projects/60 via-transparent to-transparent" />
        </div>
      </section>

      {/* Overview */}
      <section className="container mx-auto px-6 max-w-4xl mb-20 md:mb-32">
        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
          {caseStudy.overview}
        </p>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-6 max-w-4xl mb-20 md:mb-32">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
          Stack Tecnológico
        </h3>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-muted/50 text-foreground border-border/50 px-4 py-2 text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-muted/30 py-20 md:py-32 mb-20 md:mb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-destructive/70 rounded-full" />
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {caseStudy.problem.title}
            </h2>
          </div>

          <p className="text-2xl md:text-3xl font-medium text-foreground mb-12 leading-relaxed">
            {caseStudy.problem.description}
          </p>

          <div className="space-y-4">
            {caseStudy.problem.challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/30"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <p className="text-foreground/80 pt-1">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-6 max-w-5xl mb-20 md:mb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {caseStudy.solution.title}
          </h2>
        </div>

        <p className="text-2xl md:text-3xl font-medium text-foreground mb-16 leading-relaxed max-w-3xl">
          {caseStudy.solution.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudy.solution.features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-project-card border border-project-card-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-primary/5 py-20 md:py-32 mb-20 md:mb-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {caseStudy.results.title}
            </h2>
          </div>

          <p className="text-2xl md:text-3xl font-medium text-foreground mb-16 leading-relaxed max-w-3xl">
            {caseStudy.results.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.results.metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-background/50 border border-border/30"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 max-w-4xl pb-20 md:pb-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Tienes un proyecto similar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Me encantaría escuchar sobre tu próximo proyecto y explorar cómo puedo ayudarte a hacerlo realidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/#contacto")}
              className="group"
            >
              Hablemos
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/#proyectos")}
            >
              Ver más proyectos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
