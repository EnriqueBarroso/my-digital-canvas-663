import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
  { icon: "📋", label: "Ver nuestro menú completo" },
  { icon: "📍", label: "Cómo llegar (Google Maps)" },
  { icon: "📱", label: "Reservar mesa por WhatsApp" },
  { icon: "⭐", label: "Déjanos tu reseña" },
  { icon: "📸", label: "Síguenos en Instagram" },
  { icon: "🎉", label: "Promociones de la semana" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const Demo = () => {
  return (
    <div className="min-h-screen bg-biopage-dark text-white font-biopage">
      <div className="container mx-auto px-6 py-6">
        <Link
          to="/servicios/cuba"
          className="inline-block text-sm text-white/60 hover:text-white transition-colors"
        >
          ← Volver a Biopage
        </Link>
      </div>

      <div className="max-w-md mx-auto px-6 pb-16 text-center">
        <div className="h-32 rounded-2xl bg-gradient-to-br from-biopage-orange/40 to-biopage-dark" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="w-20 h-20 -mt-10 mx-auto rounded-full bg-biopage-orange flex items-center justify-center text-xl font-bold border-4 border-biopage-dark">
            EB
          </div>
          <h1 className="mt-4 text-2xl font-bold">Paladar El Buen Sabor</h1>
          <p className="mt-1 text-sm text-white/60">
            Comida criolla casera · La Habana, Cuba
          </p>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Sabores de siempre, hechos con cariño. Abierto de martes a
            domingo, 12pm-10pm.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-col gap-3">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href="#"
              onClick={(e) => e.preventDefault()}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + index * 0.08 }}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-biopage-orange/40 transition-colors text-left"
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-sm font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + links.length * 0.08 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <span className="inline-flex items-center gap-2 text-xs text-white/40">
            <span className="font-semibold text-white/70">Biopage</span>
            Hecho con Biopage
          </span>
          <Link
            to="/servicios/cuba#planes"
            className="inline-block px-6 py-3 rounded-full bg-biopage-orange text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            ¿Quieres una página como esta para tu negocio? → Quiero la mía
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Demo;
