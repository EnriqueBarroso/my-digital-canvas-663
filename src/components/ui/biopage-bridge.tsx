import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BiopageBridge = () => {
  return (
    <section className="py-16 bg-muted/30 dark:bg-background transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center p-8 md:p-10 rounded-2xl bg-gradient-card dark:bg-card dark:bg-none border border-border/50 shadow-card">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            ¿Buscas una web para tu negocio?
          </h3>
          <p className="mt-3 text-muted-foreground">
            Es uno de mis servicios — se llama Biopage: presencias digitales
            tipo link-in-bio y automatizaciones para negocios.
          </p>
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-primary text-white text-sm font-medium hover:shadow-hero transition-smooth"
          >
            Ver el servicio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BiopageBridge;
