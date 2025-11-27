import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-background dark:via-background dark:to-secondary/10"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sobre mí
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desarrollador apasionado por crear soluciones digitales
              innovadoras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda */}
            <div className="animate-slide-in-left space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Mi historia</h3>

              <p className="text-muted-foreground leading-relaxed">
                Soy un <strong className="text-foreground">desarrollador full-stack</strong> y un
                entusiasta de la <strong className="text-foreground">inteligencia artificial generativa</strong>,
                con formación como <strong className="text-foreground">Técnico Superior en Desarrollo de Aplicaciones Web por Ilerna España</strong>.
                Desde mis primeros proyectos entendí que el código no solo
                resuelve problemas: también abre oportunidades para crear
                experiencias digitales únicas.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                En mi camino he descubierto que la tecnología va más allá de la
                programación de aplicaciones web. Hoy combino el desarrollo{" "}
                <strong className="text-foreground">full-stack</strong> con <strong className="text-foreground">soluciones basadas en IA</strong>,
                ofreciendo servicios que incluyen <strong className="text-foreground">automatizaciones inteligentes</strong>,
                <strong className="text-foreground"> asistentes virtuales personalizados</strong> con herramientas como
                Zapier y n8n, y proyectos creativos que aprovechan todo el
                potencial de la <strong className="text-foreground">IA generativa</strong>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Fuera del mundo del código me inspiro en mis pasiones: el{" "}
                <strong className="text-foreground">fitness</strong>, que me recuerda la disciplina del esfuerzo
                diario, y el <strong className="text-foreground">teatro</strong>, que me conecta con la creatividad y
                la capacidad de contar historias. Esa mezcla de constancia y
                arte es la que intento reflejar en cada proyecto.
              </p>
            </div>

            {/* Columna derecha */}
            <div className="animate-fade-in">
              {/* HE AÑADIDO 'dark:bg-card' y 'dark:bg-none' para quitar el degradado blanco en modo oscuro */}
              <Card className="p-8 bg-gradient-card dark:bg-none dark:bg-card shadow-card hover:shadow-card-hover transition-smooth h-full flex flex-col justify-center border border-border/50">
                <h4 className="text-xl font-semibold mb-6 text-center text-foreground">
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