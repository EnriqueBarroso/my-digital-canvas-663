import { motion } from "framer-motion";

const QueEsBiopage = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm text-biopage-orange font-medium">
            ¿Qué es esto exactamente?
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold">
            Una página con todo tu negocio, en un solo enlace.
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Imagina una tarjeta de presentación digital: tu nombre, tus fotos,
            lo que ofreces, tus precios y un botón para que te escriban
            directo. Todo en una sola página que funciona en cualquier
            celular, rápida incluso con datos lentos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <span className="inline-flex items-center gap-2 text-xs text-white/50 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-biopage-orange" />
            Ejemplo
          </span>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <h3 className="font-semibold text-lg">Paladar El Buen Sabor</h3>
            <p className="text-sm text-white/50 mt-1">
              Comida criolla en La Habana
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <span className="py-3 rounded-full bg-biopage-orange text-white text-sm font-medium">
                Ver menú
              </span>
              <span className="py-3 rounded-full border border-white/20 text-white text-sm">
                Reservar mesa
              </span>
              <span className="py-3 rounded-full border border-white/20 text-white text-sm">
                WhatsApp
              </span>
            </div>
          </div>
          <p className="text-center text-xs text-white/30 mt-3">
            Así se vería tu página
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QueEsBiopage;
