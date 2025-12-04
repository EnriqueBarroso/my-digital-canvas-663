const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated mesh gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
    </div>
  );
};

export default HeroBackground;
