import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.png";
import { Typewriter } from "@/components/ui/typewriter"; 
import HeroBackground from "@/components/ui/hero-background";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
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
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Enrique Barroso
            </span>
          </h1>
          
          {/* Dynamic subtitle */}
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
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Transformo ideas en experiencias digitales con código, creatividad y un toque de IA.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-14">
            <a href="https://github.com/EnriqueBarroso" target="_blank" rel="noreferrer">
              <Button variant="outline" size="icon" className="rounded-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/enrique-barroso-lain%C3%A9/" target="_blank" rel="noreferrer">
              <Button variant="outline" size="icon" className="rounded-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:enrique.designer2022@gmail.es">
              <Button variant="outline" size="icon" className="rounded-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* CTA Button - Elegant opacity transition */}
          <Button 
            onClick={scrollToProjects}
            className="bg-gradient-primary opacity-90 hover:opacity-100 transition-opacity duration-500"
          >
            Ver mi trabajo
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator - subtle opacity */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-40 hover:opacity-80 transition-opacity duration-500">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;