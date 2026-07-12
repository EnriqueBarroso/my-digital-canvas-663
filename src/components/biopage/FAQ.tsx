import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda la entrega?",
    answer:
      "La entrega media es de 5 días hábiles desde que confirmamos el contenido y los enlaces que quieres incluir.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No. Tú nos pasas el contenido y nosotros nos encargamos de todo el desarrollo, diseño y publicación.",
  },
  {
    question: "¿Puedo actualizar el contenido después?",
    answer:
      "Sí, puedes pedirnos cambios cuando quieras o, si lo prefieres, te dejamos acceso para que los hagas tú mismo.",
  },
  {
    question: "¿Es realmente más rápido que Linktree?",
    answer:
      "Sí. Al ser código real optimizado, sin scripts de terceros ni plantillas pesadas, la carga es notablemente más rápida.",
  },
  {
    question: "¿Qué pasa si no me gusta el resultado?",
    answer:
      "Incluimos rondas de ajustes para asegurarnos de que la página refleje tu marca antes de la entrega final.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm text-biopage-orange font-medium">FAQ</span>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold">
            Todo lo que necesitas saber
          </h2>
          <p className="mt-4 text-white/60">
            Resolvemos las dudas más comunes antes de que te decidas.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                className="border-b border-white/10 pb-3"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left py-3 font-medium"
                >
                  {faq.question}
                  <Plus
                    className={cn(
                      "w-4 h-4 text-biopage-orange transition-transform shrink-0 ml-4",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                {isOpen && (
                  <p className="text-white/60 text-sm leading-relaxed pb-2">
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
