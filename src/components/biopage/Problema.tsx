import { motion } from "framer-motion";

const painPoints = [
  { number: "01", title: "Carga lenta y penalización" },
  { number: "02", title: "Tu marca, diluida" },
  { number: "03", title: "Sin métricas reales" },
];

const Problema = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm text-biopage-orange font-medium">El problema</span>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold">
            Linktree te hace igual que todos.
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Plantillas genéricas, branding ajeno y límites artificiales. Tu
            página de enlaces debería ser una extensión de tu marca, no un
            anuncio de otra empresa.
          </p>
        </motion.div>
        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <span className="text-2xl font-bold text-white/20">
                {point.number}
              </span>
              <span className="font-medium">{point.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problema;
