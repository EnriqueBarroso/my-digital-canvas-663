import { useEffect, useRef } from "react";

const technologies = [
  { name: "React", angle: 0,   color: "#61DAFB" },
  { name: "Next.js", angle: 45,  color: "#FFFFFF" },
  { name: "NestJS", angle: 90,  color: "#E0234E" },
  { name: "TypeScript", angle: 135, color: "#3178C6" },
  { name: "Supabase", angle: 180, color: "#3ECF8E" },
  { name: "Prisma", angle: 225, color: "#5A67D8" },
  { name: "Vercel", angle: 270, color: "#FFFFFF" },
  { name: "Tailwind", angle: 315, color: "#38BDF8" },
];

const RADIUS = 160;

function polarToCartesian(angle: number, radius: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: 200 + radius * Math.cos(rad),
    y: 200 + radius * Math.sin(rad),
  };
}

const StackHubSection = () => {
  return (
    <section id="stack" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Stack{" "}
            <span className="text-[#4F6EF7]">tecnológico</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologías que conviven en mis proyectos en producción.
          </p>
        </div>

        {/* Hub visual */}
        <div className="flex items-center justify-center">
          <div className="relative w-[400px] h-[400px]">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
            >
              {/* Líneas de grid cruzadas */}
              <line x1="200" y1="0" x2="200" y2="400"
                stroke="rgba(79,110,247,0.15)" strokeWidth="1" />
              <line x1="0" y1="200" x2="400" y2="200"
                stroke="rgba(79,110,247,0.15)" strokeWidth="1" />

              {/* Círculos concéntricos */}
              {[40, 80, 120, 160].map((r) => (
                <circle key={r} cx="200" cy="200" r={r}
                  fill="none" stroke="rgba(79,110,247,0.1)" strokeWidth="1" />
              ))}

              {/* Líneas hacia cada tecnología */}
              {technologies.map((tech) => {
                const pos = polarToCartesian(tech.angle, RADIUS);
                return (
                  <line key={tech.name}
                    x1="200" y1="200"
                    x2={pos.x} y2={pos.y}
                    stroke="rgba(79,110,247,0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                );
              })}
            </svg>

            {/* Círculo central con glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10"
              style={{
                background: "radial-gradient(circle, #4F6EF7 0%, #3730A3 60%, #1e1b4b 100%)",
                boxShadow: "0 0 40px rgba(79,110,247,0.6), 0 0 80px rgba(79,110,247,0.3), 0 0 120px rgba(79,110,247,0.15)",
              }}
            >
              <span className="text-white font-bold text-xs tracking-wider">EB</span>
            </div>

            {/* Nodos de tecnología */}
            {technologies.map((tech) => {
              const pos = polarToCartesian(tech.angle, RADIUS);
              return (
                <div
                  key={tech.name}
                  className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2 group cursor-default"
                  style={{ left: `${(pos.x / 400) * 100}%`, top: `${(pos.y / 400) * 100}%` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                    style={{
                      background: "rgba(13,18,37,0.9)",
                      border: `1px solid ${tech.color}40`,
                      boxShadow: `0 0 12px ${tech.color}20`,
                    }}
                  >
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: tech.color }}
                    >
                      {tech.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-medium">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leyenda debajo */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200"
              style={{
                background: "rgba(13,18,37,0.8)",
                border: `1px solid ${tech.color}30`,
                color: tech.color,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackHubSection;
