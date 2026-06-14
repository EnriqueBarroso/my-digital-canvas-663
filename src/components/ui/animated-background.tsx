const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050A14]">
      {/* Grid de líneas estilo LanX */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 110, 247, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 110, 247, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Spotlight superior centro */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(79,110,247,0.18) 0%, rgba(79,110,247,0.06) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Spotlight esquina superior izquierda */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Spotlight esquina superior derecha */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(79,110,247,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Viñeta oscura en los bordes */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(5,10,20,0.8) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
