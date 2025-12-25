import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "skills", label: "Habilidades" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
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

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Título */}
          <div 
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Mi Portafolio
          </div>

          {/* Menú de Escritorio */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex space-x-8 items-center">
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
            <div className="pl-4 border-l border-border">
              <ModeToggle />
            </div>
          </div>

          {/* Botones Móvil */}
          <div className="flex md:hidden items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  className={cn(
                    "absolute inset-0 w-5 h-5 transition-all duration-300",
                    isMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  )} 
                />
                <X 
                  className={cn(
                    "absolute inset-0 w-5 h-5 transition-all duration-300",
                    isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                  )} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Overlay */}
      <div 
        className={cn(
          "fixed inset-0 top-[73px] bg-background/95 backdrop-blur-lg md:hidden transition-all duration-300 ease-out",
          isMenuOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-left text-2xl font-medium py-4 px-4 rounded-xl transition-all duration-300",
                  "hover:bg-muted/50 hover:pl-6",
                  activeSection === item.id 
                    ? "text-primary bg-muted/30" 
                    : "text-foreground",
                  isMenuOpen 
                    ? "translate-x-0 opacity-100" 
                    : "-translate-x-8 opacity-0"
                )}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;