import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tu.email@ejemplo.com",
      href: "mailto:tu.email@ejemplo.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Ciudad, País",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría saber de ti
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card shadow-card hover:shadow-card-hover transition-smooth animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-smooth"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-smooth"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary transition-smooth resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-hero transition-smooth"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar mensaje
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Estoy siempre abierto a discutir nuevas oportunidades, 
              proyectos interesantes o simplemente charlar sobre tecnología.
            </p>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-gradient-card shadow-card">
              <h4 className="font-semibold mb-3">¿Prefieres reunirte?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Agenda una videollamada de 30 minutos para discutir tu proyecto
              </p>
              <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-smooth">
                Agendar reunión
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;