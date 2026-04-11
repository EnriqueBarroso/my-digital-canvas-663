import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home",      label: "Inicio" },
  { id: "about",     label: "Sobre mí", route: "/sobre-mi" },
  { id: "skills",    label: "Habilidades" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto",  label: "Contacto" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll spy — only active on "/"
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const ids = navItems.filter(i => !i.route).map(i => i.id);
      const current = ids.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Execute pending scroll after navigating back to "/"
  useEffect(() => {
    if (pendingScroll && location.pathname === "/") {
      const timer = setTimeout(() => {
        const el = document.getElementById(pendingScroll);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setPendingScroll(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, pendingScroll]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  const handleNavClick = (item: typeof navItems[0]) => {
    // "Sobre mí" → route-based navigation
    if (item.route) {
      navigate(item.route);
      setIsMenuOpen(false);
      return;
    }

    // Scroll-based items
    if (location.pathname === "/") {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      setPendingScroll(item.id);
      navigate("/");
      setIsMenuOpen(false);
    }
  };

  const isActive = (item: typeof navItems[0]) => {
    if (item.route) return location.pathname === item.route;
    return location.pathname === "/" && activeSection === item.id;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Título */}
          <div
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleNavClick(navItems[0])}
          >
            Mi Portafolio
          </div>

          {/* Menú de Escritorio */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex space-x-8 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "text-sm font-medium transition-smooth hover:text-primary",
                    isActive(item) ? "text-primary" : "text-muted-foreground"
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
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[73px] bottom-0 z-40 md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "text-left text-2xl font-medium py-4 px-4 rounded-xl transition-colors duration-200",
                    "hover:bg-muted hover:pl-6",
                    isActive(item) ? "text-primary bg-muted" : "text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
