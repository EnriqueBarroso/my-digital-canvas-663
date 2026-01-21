import { Badge } from "@/components/ui/badge";
import { Brain, Layout, Server, Database, Terminal, Code2 } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "IA y Automatización",
      description: "Asistentes inteligentes, RAG y flujos de trabajo autónomos.",
      icon: Brain,
      color: "text-purple-400", // Color del icono
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]", // Brillo morado
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
      description: "Arquitectura completa y escalable de extremo a extremo.",
      icon: Code2,
      color: "text-blue-400",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
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
      title: "Frontend Moderno",
      description: "Experiencias visuales fluidas, reactivas y accesibles.",
      icon: Layout,
      color: "text-cyan-400",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
      skills: ["React", "TypeScript", "Next.js", "Angular", "Vue.js", "Framer Motion", "Shadcn/ui", "HTML5/CSS3"],
    },
    {
      title: "Backend",
      description: "Lógica de negocio robusta y alto rendimiento.",
      icon: Server,
      color: "text-green-400",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.3)]",
      skills: ["Node.js", "Express", "Python", "FastAPI", "PHP/Laravel", "Redis", "Supabase"],
    },
    {
      title: "Data & Tools",
      description: "Gestión de datos y herramientas de desarrollo.",
      icon: Database,
      color: "text-yellow-400",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)]",
      skills: ["PostgreSQL", "MongoDB", "Git", "Docker", "AWS", "Vercel", "Jest", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Luces de fondo - Solo visibles en dark mode */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none hidden dark:block">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[128px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">
            Arsenal Tecnológico
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground">
            Mis Habilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Stack tecnológico enfocado en rendimiento, escalabilidad y experiencia de usuario.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
            className={`
                group relative p-8 rounded-2xl 
                bg-card/80 backdrop-blur-xl border border-border 
                hover:border-primary/30 hover:bg-card 
                transition-all duration-500 ease-out 
                ${category.glow} 
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icono y Título */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`p-3 rounded-xl bg-white/5 ${category.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{category.title}</h3>
              </div>

              {/* Descripción */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed h-10">{category.description}</p>

              {/* Skills (Badges) */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="
                      bg-muted text-muted-foreground border-transparent
                      group-hover:bg-primary/10 group-hover:text-foreground group-hover:border-primary/20
                      transition-all duration-300
                    "
                  >
                    {skill}
                  </Badge>
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
