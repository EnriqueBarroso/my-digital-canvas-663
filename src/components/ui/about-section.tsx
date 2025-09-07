import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sobre mí
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desarrollador apasionado por crear soluciones digitales innovadoras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-4">Mi historia</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Soy un desarrollador full-stack con más de 3 años de experiencia 
                creando aplicaciones web modernas y escalables. Mi pasión por la 
                tecnología comenzó en la universidad, donde descubrí el poder del 
                código para resolver problemas reales.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Me especializo en tecnologías como React, Node.js, TypeScript y 
                bases de datos tanto SQL como NoSQL. Siempre estoy aprendiendo 
                nuevas tecnologías y mejores prácticas para mantenerme actualizado 
                en este campo tan dinámico.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cuando no estoy programando, disfruto leyendo sobre nuevas tendencias 
                tecnológicas, contribuyendo a proyectos open source y explorando la 
                naturaleza.
              </p>
            </div>

            <div className="animate-fade-in">
              <Card className="p-8 bg-gradient-card shadow-card hover:shadow-card-hover transition-smooth">
                <h4 className="text-xl font-semibold mb-6 text-center">
                  Lo que me motiva
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Crear interfaces de usuario intuitivas y atractivas
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Escribir código limpio, mantenible y escalable
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Colaborar en equipos multidisciplinarios
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Aprender constantemente nuevas tecnologías
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;