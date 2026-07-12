import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BiopageLayout from "@/components/BiopageLayout";

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

const mercados = [
  {
    to: "/servicios/espana",
    flag: "🇪🇸",
    name: "España",
    description: "Precios en euros, pago único o mensual.",
  },
  {
    to: "/servicios/cuba",
    flag: "🇨🇺",
    name: "Cuba",
    description: "Precios en USD con equivalencia en CUP, pago por Telegram.",
  },
];

const Servicios = () => {
  return (
    <BiopageLayout>
      <motion.section
        {...reveal}
        variants={fadeUp}
        className="container mx-auto px-6 py-24 md:py-36 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          ¿Desde dónde nos visitas?
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Elige tu mercado para ver precios y formas de pago adaptadas.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {mercados.map((mercado, i) => (
            <motion.div
              key={mercado.to}
              {...reveal}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            >
              <Link
                to={mercado.to}
                className="block p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-biopage-orange/50 hover:bg-white/[0.07] transition-colors h-full"
              >
                <span className="text-5xl">{mercado.flag}</span>
                <h2 className="mt-5 text-xl font-semibold">{mercado.name}</h2>
                <p className="mt-2 text-sm text-white/60">
                  {mercado.description}
                </p>
                <span className="inline-block mt-6 text-sm text-biopage-orange">
                  Continuar →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </BiopageLayout>
  );
};

export default Servicios;
