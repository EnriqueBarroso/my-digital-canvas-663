import { motion } from "framer-motion";
import BiopageLayout from "@/components/BiopageLayout";
import QueEsBiopage from "@/components/biopage/QueEsBiopage";
import Ticker from "@/components/biopage/Ticker";
import StatsBar from "@/components/biopage/StatsBar";
import Portfolio from "@/components/biopage/Portfolio";
import FAQ from "@/components/biopage/FAQ";
import { toCup, CUP_RATE_LAST_UPDATED } from "@/lib/cupRate";

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

const TELEGRAM_BOT_URL = "https://t.me/biopagecuba_bot";

const hostingHighlight =
  "Dominio y hosting incluidos el primer año — sin coste extra";

const planes = [
  {
    number: "01",
    name: "Creator",
    description: "¿Dónde te encuentro?",
    forWhom: "Negocios que necesitan presencia profesional",
    priceUsd: 240,
    featured: false,
    features: [
      "Diseño a medida con tu identidad",
      "Listado de enlaces y servicios",
      "Botón directo de contacto (WhatsApp/Telegram)",
      "Carga rápida optimizada para datos móviles",
    ],
    highlightFeature: hostingHighlight,
    example:
      "Ejemplo: Tu peluquería con fotos, servicios, precios y WhatsApp en un solo lugar.",
    telegramStart: "creator",
  },
  {
    number: "02",
    name: "Business",
    description: "¿Qué vendes y cómo te compro?",
    forWhom: "Negocios con productos o catálogo para mostrar",
    priceUsd: 480,
    featured: true,
    features: [
      "Todo lo del Plan Creator",
      "Catálogo de productos con fotos y precios",
      "Captación de contactos/pedidos",
      "Botón de pedido directo por mensaje",
    ],
    highlightFeature: hostingHighlight,
    example:
      "Ejemplo: Tu tienda con catálogo de productos y pedidos por mensaje directo.",
    telegramStart: "business",
  },
  {
    number: "03",
    name: "Mantenimiento",
    description: "Actualizaciones, soporte y backups",
    forWhom: null,
    priceUsd: 23,
    priceSuffix: "/mes",
    featured: false,
    features: ["Actualizaciones continuas", "Soporte técnico", "Backups periódicos"],
    highlightFeature: null,
    example: null,
    telegramStart: null,
  },
];

const combo = {
  title: "Biopage Business + Automatización Básica",
  priceUsd: 800,
  note: "ahorro de 120 USD frente a contratarlo por separado",
};

const metodosPago = [
  {
    icon: "💵",
    title: "Transferencia USD/EUR",
    description: "Zelle, PayPal, Western Union.",
  },
  {
    icon: "🏦",
    title: "Transferencia CUP",
    description: "Enzona o Transfermóvil.",
  },
  {
    icon: "🤝",
    title: "Efectivo en Cuba",
    description: "Coordinado por persona de confianza.",
  },
];

const scrollToPlanes = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" });
};

const telegramHref = (start?: string | null) =>
  start ? `${TELEGRAM_BOT_URL}?start=${start}` : TELEGRAM_BOT_URL;

const Cuba = () => {
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
          Tu negocio, visible y serio desde el primer clic
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
          Una página propia. Para que te tomen en serio.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          Todo lo que ofreces, en un solo lugar — sin depender de tu perfil de
          Facebook. Lista en días, no en semanas.
        </p>
        <p className="mt-3 text-sm text-white/40">
          Precios adaptados para Cuba. Pago en USD, CUP o efectivo.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={telegramHref()}
            target="_blank"
            rel="noreferrer"
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

      <QueEsBiopage />
      <Ticker />
      <StatsBar />

      {/* Planes */}
      <section id="planes" className="container mx-auto px-6 py-16 md:py-24">
        <motion.div {...reveal} variants={fadeUp} className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Elige lo que necesitas. Sin techos.
          </h2>
          <p className="mt-3 text-white/60">
            Pago único. Sin suscripciones ni sorpresas.
          </p>
          <p className="mt-4 text-xs text-white/40">
            Equivalencia orientativa. Precio base en USD. La tasa CUP puede
            variar.
          </p>
          <p className="text-xs text-white/30">
            Tasa informal aproximada: actualizada el {CUP_RATE_LAST_UPDATED}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
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
              {plan.forWhom && (
                <p className="text-white/40 text-xs mt-2">
                  <strong className="text-white/60">Para quién:</strong>{" "}
                  {plan.forWhom}
                </p>
              )}
              <p className="text-3xl font-bold mt-4 text-biopage-orange">
                {plan.priceUsd} USD
              </p>
              <p className="text-white/40 text-xs mt-1">
                ~{toCup(plan.priceUsd)}
                {plan.priceSuffix ?? ""}
              </p>
              <hr className="border-white/10 my-4" />
              <ul className="space-y-2 text-sm text-white/70 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-white/30">—</span>
                    {feature}
                  </li>
                ))}
                {plan.highlightFeature && (
                  <li className="flex gap-2 text-biopage-orange">
                    <span>✓</span>
                    {plan.highlightFeature}
                  </li>
                )}
              </ul>
              {plan.example && (
                <p className="text-white/40 text-xs italic mt-3">
                  {plan.example}
                </p>
              )}
              <a
                href={telegramHref(plan.telegramStart)}
                target="_blank"
                rel="noreferrer"
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
            {combo.priceUsd} USD
          </p>
          <p className="text-white/60 text-sm mt-3">
            ~{toCup(combo.priceUsd)} — {combo.note}
          </p>
          <a
            href={telegramHref()}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-biopage-orange text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Quiero el paquete combinado
          </a>
        </motion.div>

        {/* Métodos de pago */}
        <motion.div {...reveal} variants={fadeUp} className="mt-16 text-center">
          <h3 className="text-xl font-semibold">¿Cómo se paga?</h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            {metodosPago.map((metodo, i) => (
              <div
                key={metodo.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left"
              >
                <span className="text-2xl">{metodo.icon}</span>
                <h4 className="font-semibold mt-3">
                  Opción {i + 1} — {metodo.title}
                </h4>
                <p className="text-white/60 text-sm mt-1">
                  {metodo.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-sm mt-8 max-w-xl mx-auto">
            Estructura de pago: 50% de anticipo al inicio del proyecto, 50% al
            entregar el trabajo aprobado.
          </p>
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
          href={telegramHref()}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 px-8 py-4 rounded-full bg-biopage-orange text-white font-medium hover:opacity-90 transition-opacity"
        >
          Escríbeme por Telegram
        </a>
      </motion.section>
    </BiopageLayout>
  );
};

export default Cuba;
