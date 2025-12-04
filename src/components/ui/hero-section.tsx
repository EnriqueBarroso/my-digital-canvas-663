import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.png";
import { Typewriter } from "@/components/ui/typewriter"; 
import HeroBackground from "@/components/ui/hero-background";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <HeroBackground />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-hero animate-float">
              <img 
                src={profileImage} 
                alt="Foto de perfil" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Enrique Barroso
            </span>
          </h1>
          
          {/* 👇 2. AQUÍ ESTÁ LA MAGIA: Reemplazamos el párrafo estático */}
          <div className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 h-8 flex items-center justify-center gap-2">
             <span>Soy</span>
             <Typewriter 
               titles={[
                 "Desarrollador Full Stack",
                 "Experto en Automatización",
                 "Entusiasta de la IA",
                 "Creador de Soluciones"
               ]}
               speed={100}
               pause={2000}
             />
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transformo ideas en experiencias digitales con código, creatividad y un toque de IA.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            <Button variant="outline" size="icon" className="rounded-full hover:shadow-card-hover transition-smooth">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:shadow-card-hover transition-smooth">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:shadow-card-hover transition-smooth">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToAbout}
            className="bg-gradient-primary hover:shadow-hero transition-smooth animate-bounce"
          >
            Ver mi trabajo
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;