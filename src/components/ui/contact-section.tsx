import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner"; // Usamos Sonner que ya tienes configurado en App.tsx

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// 1. Esquema de validación CORREGIDO (z.string() antes de .min())
const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor, introduce un email válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Configuración del formulario con React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // 3. Tus datos reales de contacto
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "enrique.designer2022@gmail.com",
      href: "mailto:enrique.designer2022@gmail.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+34 666 95 31 74", // Formato internacional profesional
      href: "tel:+34666953174"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Barcelona, España",
      href: "https://maps.google.com/?q=Barcelona,España"
    }
  ];

  // 4. Función de envío a Formspree
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // 👇👇 ¡PEGA AQUÍ TU URL DE FORMSPREE! 👇👇
      const FORMSPREE_URL = "https://formspree.io/f/mwpdoynv"; 
      
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado!", {
          description: "Gracias por contactarme. Te responderé pronto.",
        });
        reset(); // Limpiar formulario
      } else {
        toast.error("Hubo un error", {
          description: "No se pudo enviar el mensaje. Inténtalo más tarde.",
        });
      }
    } catch (error) {
      toast.error("Error de conexión", {
        description: "Verifica tu internet e inténtalo de nuevo.",
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30 dark:bg-background transition-colors">
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
          <Card className="p-8 bg-gradient-card dark:bg-card dark:bg-none shadow-card hover:shadow-card-hover transition-smooth animate-slide-in-left border-border/50">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Campo Nombre */}
              <div className="space-y-2">
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  {...register("name")}
                  className={`bg-background/50 border-border focus:border-primary transition-smooth ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                />
                {errors.name && (
                  <p className="text-xs text-destructive ml-1">{errors.name.message}</p>
                )}
              </div>

              {/* Campo Email */}
              <div className="space-y-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Tu email"
                  {...register("email")}
                  className={`bg-background/50 border-border focus:border-primary transition-smooth ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                />
                {errors.email && (
                  <p className="text-xs text-destructive ml-1">{errors.email.message}</p>
                )}
              </div>

              {/* Campo Mensaje */}
              <div className="space-y-2">
                <Textarea
                  id="message"
                  placeholder="Tu mensaje"
                  rows={5}
                  {...register("message")}
                  className={`bg-background/50 border-border focus:border-primary transition-smooth resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                />
                {errors.message && (
                  <p className="text-xs text-destructive ml-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-hero transition-smooth text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="animate-fade-in flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Información de contacto</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estoy siempre abierto a discutir nuevas oportunidades, 
                proyectos interesantes o simplemente charlar sobre tecnología y cómo la IA puede mejorar tus procesos.
              </p>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <a 
                        href={item.href}
                        target={item.label === "Ubicación" ? "_blank" : "_self"}
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth block"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gradient-card dark:bg-card dark:bg-none shadow-card border-border/50 mt-auto">
              <h4 className="font-semibold mb-3 text-foreground">¿Prefieres reunirte?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Agenda una videollamada de 30 minutos para discutir tu proyecto y ver cómo podemos colaborar.
              </p>
              <a href="https://calendly.com/enrique-designer2022/30min" target="_blank" rel="noreferrer" className="w-full">
                <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-smooth border-primary/20 hover:border-primary">
                  Agendar reunión
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;