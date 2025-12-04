const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated mesh gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      
      {/* Circuit lines pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0 50 L 30 50 L 40 30 L 60 30 L 70 50 L 100 50" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
            <path d="M 50 0 L 50 30 L 70 50 L 50 70 L 50 100" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
            <circle cx="40" cy="30" r="3" className="fill-primary" />
            <circle cx="70" cy="50" r="3" className="fill-primary" />
            <circle cx="50" cy="70" r="2" className="fill-accent" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Floating code/data particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Binary/code floating elements */}
        <div className="absolute top-[10%] left-[15%] text-primary/20 font-mono text-xs animate-float">{"<code/>"}</div>
        <div className="absolute top-[20%] right-[20%] text-primary/15 font-mono text-sm animate-float animation-delay-2000">01</div>
        <div className="absolute top-[40%] left-[10%] text-accent/20 font-mono text-xs animate-float animation-delay-4000">{"{ }"}</div>
        <div className="absolute top-[60%] right-[15%] text-primary/15 font-mono text-sm animate-float">10</div>
        <div className="absolute top-[75%] left-[25%] text-primary/20 font-mono text-xs animate-float animation-delay-2000">{"</>"}</div>
        <div className="absolute top-[30%] left-[80%] text-accent/15 font-mono text-xs animate-float animation-delay-4000">{"=>"}</div>
        <div className="absolute top-[85%] right-[30%] text-primary/10 font-mono text-sm animate-float">{"[ ]"}</div>
      </div>

      {/* Neural network dots */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[30%] w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-[25%] right-[35%] w-1.5 h-1.5 bg-accent/40 rounded-full animate-pulse animation-delay-2000" />
        <div className="absolute top-[45%] left-[20%] w-1 h-1 bg-primary/25 rounded-full animate-pulse animation-delay-4000" />
        <div className="absolute top-[55%] right-[25%] w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-[70%] left-[40%] w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse animation-delay-2000" />
        <div className="absolute top-[35%] left-[60%] w-1 h-1 bg-primary/35 rounded-full animate-pulse animation-delay-4000" />
      </div>
      
      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
    </div>
  );
};

export default HeroBackground;
