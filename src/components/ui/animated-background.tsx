const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Base subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Animated mesh gradient blobs - only visible in dark mode */}
      <div className="hidden dark:block">
        {/* Purple blob - top left */}
        <div 
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px]
                     bg-[hsl(var(--blob-purple))] rounded-full 
                     blur-[120px] opacity-60 animate-blob"
        />
        
        {/* Indigo blob - bottom right */}
        <div 
          className="absolute bottom-[-30%] right-[-15%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px]
                     bg-[hsl(var(--blob-indigo))] rounded-full 
                     blur-[100px] opacity-50 animate-blob animation-delay-2000"
        />
        
        {/* Blue blob - center right */}
        <div 
          className="absolute top-[30%] right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px]
                     bg-[hsl(var(--blob-blue))] rounded-full 
                     blur-[80px] opacity-40 animate-blob animation-delay-4000"
        />
        
        {/* Secondary purple blob - bottom left */}
        <div 
          className="absolute bottom-[10%] left-[5%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px]
                     bg-[hsl(var(--blob-purple))] rounded-full 
                     blur-[90px] opacity-35 animate-blob animation-delay-2000"
        />
      </div>
      
      {/* Light mode subtle background */}
      <div className="block dark:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      </div>
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` 
           }} 
      />
    </div>
  );
};

export default AnimatedBackground;
