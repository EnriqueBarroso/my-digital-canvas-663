import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "IA y Automatización",
      description: "Asistentes inteligentes, automatizaciones y generación de contenido",
      skills: [
        "ChatGPT",
        "Gemini",
        "Claude",
        "OpenAI API",
        "LangChain",
        "LlamaIndex",
        "Hugging Face",
        "Zapier",
        "n8n",
        "Make",
      ],
    },
    {
      title: "Full Stack",
      description: "Desarrollo web completo, desde la interfaz hasta el servidor",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
        "Tailwind CSS",
      ],
    },
    {
      title: "Frontend",
      description: "Interfaces modernas y experiencias de usuario fluidas",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Angular",
        "Vue.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      description: "APIs robustas y arquitecturas escalables",
      skills: [
        "Node.js",
        "Express",
        "PHP",
        "Laravel",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      title: "DevOps & Tools",
      description: "Infraestructura, despliegue y herramientas de desarrollo",
      skills: [
        "Git",
        "Docker",
        "AWS",
        "Vercel",
        "Figma",
        "Jest",
        "Cypress",
        "CI/CD",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Habilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Tecnologías y herramientas que domino para crear soluciones efectivas
          </p>
        </div>

        {/* Skills Grid - Ultra Clean Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-8 md:p-10 rounded-2xl bg-transparent hover:bg-muted/50 dark:hover:bg-white/[0.03] transition-colors duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">
                {category.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground/70 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills as minimal text badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-muted-foreground/80 group-hover:text-foreground/70 transition-colors duration-300"
                  >
                    {skill}
                    <span className="text-muted-foreground/30 ml-2 last:hidden">·</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
