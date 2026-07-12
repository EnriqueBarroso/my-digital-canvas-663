import { motion } from "framer-motion";
import BiopageLayout from "@/components/BiopageLayout";
import Problema from "@/components/biopage/Problema";
import Ticker from "@/components/biopage/Ticker";
import StatsBar from "@/components/biopage/StatsBar";
import Portfolio from "@/components/biopage/Portfolio";
import FAQ from "@/components/biopage/FAQ";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const reveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const CONTACT_HREF = "/#contacto";

const planes = [
  {
    number: "01",
    name: "Creator",
    description: "Biopage personalizada + hosting 1 año",
    price: "297€",
    priceNote: "Pago único",
    featured: false,
    features: [
      "Página de enlaces a medida",
      "Diseño responsive",
      "Hasta 8 enlaces",
      "Entrega en 5 días",
    ],
  },
  {
    number: "02",
    name: "Business",
    description: "Biopage + integraciones básicas + SEO",
    price: "597€",
    priceNote: "Pago único",
    featured: true,
    features: [
      "Todo lo del plan Creator",
      "Enlaces y bloques ilimitados",
      "Integración con analytics",
      "Optimización para conversión",
      "Soporte prioritario 30 días",
    ],
  },
  {
    number: "03",
    name: "Portfolio",
    description: "Biopage avanzada + analíticas + soporte",
    price: "897€",
    priceNote: "Pago único",
    featured: false,
    features: [
      "Todo lo del plan Business",
      "Galería de proyectos",
      "Formulario de contacto",
      "Dominio personalizado",
    ],
  },
  {
    number: "04",
    name: "Mantenimiento",
    description: "Actualizaciones, soporte y backups",
    price: "29€",
    priceNote: "Por mes",
    featured: false,
    features: [
      "Actualizaciones continuas",
      "Soporte técnico",
      "Backups periódicos",
    ],
  },
];

const combo = {
  title: "Biopage Business + Automatización Básica",
  price: "997€",
  note: "Ahorras 100€ frente a contratarlo por separado",
};

const scrollToPlanes = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" });
};

const Espana = () => {
  return (
    <BiopageLayout>
      {/* Hero */}
      <motion.section
        {...reveal}
        variants={fadeUp}
        className="container mx-auto px-6 py-20 md:py-32 text-center"
      >
        <span className="inline-flex items-center gap-2 text-sm text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-biopage-orange" />
          La alternativa premium a Linktree
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
          Tu enlace en bio, convertido.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          Páginas de enlaces a medida, rápidas y sin plantillas genéricas.
          Diseñadas para convertir seguidores en clientes.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CONTACT_HREF}
            className="inline-block px-8 py-4 rounded-full bg-biopage-orange text-white font-medium hover:opacity-90 transition-opacity"
          >
            Quiero mi página →
          </a>
          <a
            href="#planes"
            onClick={scrollToPlanes}
            className="inline-block px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
          >
            Ver planes
          </a>
        </div>
      </motion.section>

      <Problema />
      <Ticker />
      <StatsBar />

      {/* Planes */}
      <section id="planes" className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          {...reveal}
          variants={fadeUp}
          className="text-center mb-4"
        >
          <h2 className="text-2xl md:text-4xl font-semibold">
            Elige lo que necesitas. Sin techos.
          </h2>
          <p className="mt-3 text-white/60">
            Pago único. Sin suscripciones ni sorpresas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
          {planes.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...reveal}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className={`relative p-6 rounded-2xl border flex flex-col ${
                plan.featured
                  ? "bg-biopage-orange/10 border-biopage-orange/40"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-biopage-orange text-white text-xs font-medium">
                  Más popular
                </span>
              )}
              <span className="text-xs text-white/30">{plan.number}</span>
              <h3 className="text-lg font-semibold mt-1">{plan.name}</h3>
              <p className="text-white/60 text-sm mt-2">{plan.description}</p>
              <p className="text-3xl font-bold mt-4 text-biopage-orange">
                {plan.price}
              </p>
              <p className="text-white/40 text-xs mt-1">{plan.priceNote}</p>
              <hr className="border-white/10 my-4" />
              <ul className="space-y-2 text-sm text-white/70 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-white/30">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={CONTACT_HREF}
                className="mt-6 text-center px-4 py-3 rounded-full border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Quiero el plan {plan.name}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...reveal}
          variants={fadeUp}
          className="max-w-2xl mx-auto mt-6 p-8 rounded-2xl bg-biopage-orange/10 border border-biopage-orange/30 text-center"
        >
          <span className="text-xs uppercase tracking-wide text-biopage-orange">
            Paquete combinado destacado
          </span>
          <h3 className="text-lg font-semibold mt-2">{combo.title}</h3>
          <p className="text-3xl font-bold mt-2 text-biopage-orange">
            {combo.price}
          </p>
          <p className="text-white/60 text-sm mt-3">{combo.note}</p>
          <a
            href={CONTACT_HREF}
            className="inline-block mt-6 px-6 py-3 rounded-full bg-biopage-orange text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Quiero el paquete combinado
          </a>
        </motion.div>
      </section>

      <Portfolio />
      <FAQ />

      {/* CTA final */}
      <motion.section
        {...reveal}
        variants={fadeUp}
        className="container mx-auto px-6 py-20 md:py-28 text-center border-t border-white/10"
      >
        <span className="text-sm text-biopage-orange font-medium">
          ¿Listo para empezar?
        </span>
        <h2 className="mt-3 text-2xl md:text-4xl font-semibold">
          ¿Listo para dejar de ser uno más?
        </h2>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Cuéntanos tu idea y te respondemos en menos de 24 horas con los
          siguientes pasos para tener tu página lista.
        </p>
        <a
          href={CONTACT_HREF}
          className="inline-block mt-8 px-8 py-4 rounded-full bg-biopage-orange text-white font-medium hover:opacity-90 transition-opacity"
        >
          Hablar con nosotros →
        </a>
      </motion.section>
    </BiopageLayout>
  );
};

export default Espana;
