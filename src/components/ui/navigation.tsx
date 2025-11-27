import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
// 1. 👇 Importamos el botón del tema
import { ModeToggle } from "@/components/ui/mode-toggle"; 

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Título */}
          <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
            Mi Portafolio
          </div>

          {/* Menú de Escritorio + Botón Tema */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium transition-smooth hover:text-primary",
                    activeSection === item.id 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* 2. 👇 AQUÍ colocamos el botón.
               Lo pongo fuera del 'hidden md:flex' para que se vea también en móviles 
               (aunque tu menú móvil actual no se ve en el código, el botón sí se verá) 
            */}
            <div className="pl-4 border-l border-border">
                <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;