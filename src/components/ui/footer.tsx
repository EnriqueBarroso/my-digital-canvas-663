import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/EnriqueBarroso", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/enrique-barroso-lain%C3%A9/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contacto@enrique-dev.com", label: "Email" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Mi Portafolio
            </h3>
            <p className="text-muted-foreground text-sm">
              Desarrollador Full Stack creando experiencias digitales excepcionales
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                Sobre mí
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-smooth">
                Habilidades
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth">
                Proyectos
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                Contacto
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h4 className="font-semibold mb-4">Sígueme</h4>
            <div className="flex md:justify-end justify-center space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:shadow-card-hover transition-smooth"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            © {currentYear} Mi Portafolio. Hecho con 
            <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />
            y mucho café
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;