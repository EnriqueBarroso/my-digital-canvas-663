import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "Vue.js",
        "HTML5",
        "CSS3",
      ],
      icon: "🎨",
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "PHP",
        "Laravel",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "GraphQL",
      ],
      icon: "⚙️",
    },
    {
      title: "IA y Automatización",
      description:
        "Asistentes, automatizaciones con Zapier/n8n y generación de contenido con IA",
      skills: [
        "ChatGPT",
        "Gemini",
        "Claude",
        "DALL·E",
        "OpenAI API",
        "Google AI Studio",
        "LangChain",
        "LlamaIndex",
        "Hugging Face",
        "Zapier",
        "n8n",
        "Make",
      ],
      icon: "🤖",
    },
    {
      title: "Herramientas",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest", "Cypress"],
      icon: "🛠️",
    },
    {
      title: "Metodologías",
      skills: [
        "Agile",
        "Scrum",
        "Kanban",
        "Lean",
        "Design Thinking",
        "OKR",
        "TDD",
        "CI/CD",
        "Code Review",
        "Pair Programming",
        "Prompt Design",
      ],
      icon: "📋",
    },
  ];

  const progress = [
    { skill: "React / TypeScript", level: 90 },
    { skill: "Node.js / Express", level: 85 },
    { skill: "PostgreSQL / MongoDB", level: 80 },
    { skill: "IA generativa / Automatización", level: 80 },
    { skill: "AWS / Docker", level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones efectivas
          </p>
        </div>

        {/* Grid con 5 columnas en xl */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                {category.description && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {category.description}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Barras de progreso */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Nivel de experiencia
          </h3>
          <div className="space-y-6">
            {progress.map((item, index) => (
              <div
                key={item.skill}
                className="animate-slide-in-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-gradient-primary h-2 rounded-full transition-smooth"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
