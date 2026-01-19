import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Building2, Ruler } from "lucide-react"; // Nuevos iconos importados

const AboutSection = () => {
  const milestones = [
    {
      year: "2024 - Presente",
      title: "Desarrollador Full Stack & IA Specialist",
      company: "Proyectos Tech & Freelance",
      description:
        "Aplico la lógica ingenieril al desarrollo de software. Creación de SaaS como DevIA, integración de modelos LLM y arquitectura de sistemas escalables.",
      icon: Brain,
      skills: ["React", "Python", "Arquitectura de Software", "Automatización"],
      type: "work"
    },
    {
      year: "2019 - 2023",
      title: "Llegada a España & Transición Tecnológica",
      company: "Adaptación y Formación Especializada",
      description:
        "Tras mi llegada a España, identifiqué en la programación el siguiente paso lógico a mi carrera. Traduje mi experiencia diseñando planos a diseñar código limpio y estructurado.",
      icon: Code2,
      skills: ["TypeScript", "Next.js", "Algoritmia", "Bases de Datos"],
      type: "education"
    },
    {
      year: "2010 - 2019",
      title: "Ingeniero Civil & Proyectista CAD",
      company: "Sector Ingeniería y Construcción",
      description:
        "Durante casi una década ejercí como proyectista y delineante. Gestioné proyectos complejos, cálculos estructurales y diseño de precisión. Esta etapa forjó mi capacidad para resolver problemas bajo presión.",
      icon: Building2,
      skills: ["AutoCAD", "Gestión de Proyectos", "Cálculo Estructural", "Lógica Matemática"],
      type: "work"
    },
    {
      year: "2010",
      title: "Graduación en Ingeniería Civil",
      company: "Formación Universitaria",
      description:
        "Bases sólidas en física, cálculo y lógica. El inicio de una mentalidad orientada a construir soluciones duraderas y eficientes.",
      icon: Ruler,
      skills: ["Ingeniería", "Matemáticas", "Planificación"],
      type: "education"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 dark:bg-muted/10 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mi Trayectoria
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De diseñar infraestructuras a arquitecturas de software. Una evolución basada en la lógica, la precisión y la resolución de problemas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Línea vertical central */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20"></div>

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
                
                {/* Punto del timeline */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary/30 z-10 flex items-center justify-center shadow-[0_0_0_4px_rgba(0,0,0,0.1)] group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>

                {/* Espaciador para escritorio */}
                <div className="hidden md:block w-5/12"></div>

                {/* Tarjeta de contenido */}
                <div className="w-[calc(100%-3rem)] md:w-5/12 ml-12 md:ml-0">
                  <Card className="p-6 bg-gradient-card dark:bg-card hover:shadow-card-hover transition-all duration-300 border-border/50 relative overflow-hidden group-hover:-translate-y-1">
                    
                    {/* Icono de fondo decorativo */}
                    <item.icon className="absolute -right-4 -bottom-4 w-24 h-24 text-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-12" />

                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        {item.year}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        {item.type === "work" ? "Experiencia" : "Hito Académico"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 text-foreground">{item.title}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{item.company}</p>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-muted/50 hover:bg-muted dark:bg-secondary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;