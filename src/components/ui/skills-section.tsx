import { Sparkles, Database, Boxes, Rocket } from "lucide-react";

interface SkillCategory {
  icon: typeof Sparkles;
  title: string;
  description: string;
  skills: string[];
  gradient: string;
}

const categories: SkillCategory[] = [
  {
    icon: Sparkles,
    title: "Frontend",
    description: "Interfaces modernas, accesibles y con identidad propia.",
    skills: [
      "React 18/19",
      "Next.js 16",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Framer Motion",
      "React Router",
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Database,
    title: "Backend & Datos",
    description: "APIs robustas, validación tipada y modelos relacionales.",
    skills: [
      "Next.js API Routes",
      "Server Actions",
      "Supabase (PostgreSQL)",
      "Prisma ORM",
      "Zod",
      "REST APIs",
      "React Hook Form",
    ],
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    icon: Boxes,
    title: "Servicios & Integraciones",
    description: "Conecto herramientas modernas en lugar de reinventar la rueda.",
    skills: [
      "Clerk (auth)",
      "Cloudinary",
      "Resend + React Email",
      "Upstash Redis",
      "Anthropic SDK (Claude)",
      "TanStack Query",
      "Zustand",
    ],
    gradient: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    icon: Rocket,
    title: "Tooling, SEO & Deploy",
    description: "Del commit a producción con calidad y visibilidad.",
    skills: [
      "Git & GitHub",
      "Vercel",
      "ESLint",
      "react-helmet-async",
      "Google Analytics 4",
      "PWA (vite-plugin-pwa)",
    ],
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              técnicas
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologías que uso a diario en proyectos reales en producción.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 md:p-8 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {category.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-5">
                    {category.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary/60 border border-border/50 text-foreground/80 hover:border-violet-500/50 hover:text-foreground transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto">
          Cada tecnología listada aparece en al menos uno de los proyectos del portfolio.
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;