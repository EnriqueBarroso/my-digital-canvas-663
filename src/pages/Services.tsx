import { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const WHATSAPP_NUMBER = "34666953174";

const buildPlanLink = (planName: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, me interesa el ${planName}. ¿Podemos hablar?`
  )}`;

const painPoints = [
  {
    number: "01",
    title: "Carga lenta y penalización",
    description: "Las plataformas gratuitas priorizan sus servidores.",
  },
  {
    number: "02",
    title: "Tu marca, diluida",
    description: "El logo de Linktree comparte protagonismo con el tuyo.",
  },
  {
    number: "03",
    title: "Sin métricas reales",
    description: "Los datos de analítica precisos están en los planes de pago.",
  },
];

const plans = [
  {
    name: "Plan Creator",
    price: "297€",
    featured: false,
    features: [
      "Diseño a medida",
      "Enlaces dinámicos",
      "Carga ultrarrápida",
      "Responsive",
    ],
  },
  {
    name: "Plan Business",
    price: "597€",
    featured: true,
    features: [
      "Todo lo de Creator",
      "Emails",
      "Catálogo / pasarela de pago",
      "Analítica",
    ],
  },
  {
    name: "Plan Portfolio",
    price: "897€",
    featured: false,
    features: [
      "Todo lo de Business",
      "Bio profesional",
      "Galería de proyectos",
      "Formulario de contacto",
    ],
  },
];

const maintenanceFeatures = [
  "Cambios de enlaces ilimitados",
  "Actualizaciones de contenido",
  "Soporte técnico en menos de 24h",
  "Sin permanencia, cancela cuando quieras",
];

const portfolioItems = [
  {
    name: "LaChopin",
    tag: "Marketplace · E-commerce",
    description:
      "Marketplace mobile-first peer-to-peer para Cuba, con arquitectura fullstack de 3 capas en producción.",
    href: "/proyecto/lachopin",
  },
  {
    name: "¡Hola, Camarada!",
    tag: "Hub de contenido · IA",
    description:
      "Directorio progresista y hub de medios independientes con búsqueda asistida por IA y moderación automática.",
    href: "/proyecto/hola-camarada",
  },
];

const faqItems = [
  {
    question: "¿Cuánto tiempo tardan en entregarla?",
    answer: "Entre 3 y 7 días, dependiendo del plan elegido.",
  },
  {
    question: "¿Puedo cambiar mis enlaces después?",
    answer:
      "Sí. Puedes hacerlo tú mismo siguiendo nuestras instrucciones, o contratar el mantenimiento y lo hacemos por ti en menos de 24h.",
  },
  {
    question: "¿Funciona perfectamente en móvil?",
    answer: "Sí, la página es 100% responsive y está optimizada para móvil.",
  },
  {
    question: "¿Qué pasa si no me gusta el resultado?",
    answer:
      "Las revisiones están incluidas: aprobamos el diseño contigo antes de darlo por terminado.",
  },
  {
    question: "¿Necesito saber de programación?",
    answer: "No. Te entregamos todo funcionando, listo para usar.",
  },
  {
    question: "¿En qué se diferencia de Linktree de pago?",
    answer:
      "Tienes una página propia, sin marcas de terceros y con tu propio dominio.",
  },
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <nav className="services-nav">
        <Link to="/" className="nav-logo">
          Enrique Barroso
        </Link>
        <a
          className="btn btn-solid nav-cta"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quiero mi página →
        </a>
      </nav>

      <main>
      <section className="hero">
        <div className="hero-left">
          <span className="hero-tag">Páginas de enlaces premium</span>
          <h1 className="hero-title">
            Tu enlace en bio, convertido en una <em>herramienta de ventas</em>.
          </h1>
          <p className="hero-subtitle">
            Páginas de enlaces premium, rápidas y personalizadas. Diseñadas
            para que tu audiencia haga clic donde tú quieres.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-solid"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero mi página →
            </a>
            <a className="btn btn-ghost" href="#planes">
              Ver planes y precios
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="phone-mockup">
            <div className="phone-avatar">EB</div>
            <p className="phone-name">Enrique Barroso</p>
            <p className="phone-handle">@enriquebarroso</p>

            <ul className="phone-links">
              <li>Mi tienda online</li>
              <li>Últimos vídeos</li>
              <li>Contáctame</li>
              <li>Newsletter gratuita</li>
            </ul>

            <span className="phone-badge">Hecho a medida · No es Linktree</span>
          </div>
        </div>
      </section>

      <section className="problem">
        <div className="problem-left">
          <span className="section-tag">El problema</span>
          <h2 className="problem-title">Linktree te hace igual que todos.</h2>
          <p className="problem-text">
            Una página de enlaces genérica no transmite quién eres ni qué
            ofreces. Tu audiencia llega, ve lo mismo que en cualquier otro
            perfil y se va sin recordar nada. Una página a medida convierte esa
            visita en una acción concreta.
          </p>
        </div>

        <div className="problem-right">
          {painPoints.map((point) => (
            <div className="pain-point" key={point.number}>
              <span className="pain-number">{point.number}</span>
              <div>
                <h3 className="pain-title">{point.title}</h3>
                <p className="pain-description">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="planes" className="plans">
        <h2 className="plans-title">Elige lo que necesitas. Sin techos.</h2>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              className={`plan-card${plan.featured ? " plan-card-featured" : ""}`}
              key={plan.name}
            >
              {plan.featured && <span className="plan-badge">Más popular</span>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                className={`btn ${plan.featured ? "btn-accent" : "btn-solid"}`}
                href={buildPlanLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero este plan →
              </a>
            </div>
          ))}
        </div>

        <p className="plans-note">
          Todos los planes incluyen despliegue en producción y una ronda de
          revisiones.
        </p>
      </section>

      <section className="maintenance">
        <div className="maintenance-left">
          <span className="pill">Opcional</span>
          <h2 className="maintenance-title">¿Quieres que nos ocupemos de todo?</h2>
          <p className="maintenance-text">
            Si prefieres no preocuparte por nada, nos encargamos del
            mantenimiento de tu página: cambios, actualizaciones y soporte
            directo, para que tú solo te dediques a tu negocio.
          </p>
        </div>

        <div className="maintenance-right">
          <div className="maintenance-card">
            <p className="maintenance-price">29€/mes</p>
            <ul className="maintenance-features">
              {maintenanceFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <span className="section-tag">Garantía de calidad</span>
        <h2 className="portfolio-title">Código real. Proyectos en producción.</h2>
        <p className="portfolio-subtitle">
          No somos una agencia genérica que monta plantillas. Cada página que
          entregamos sale del mismo trabajo que estos proyectos reales, en
          producción y con usuarios de verdad.
        </p>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <a className="portfolio-card" href={item.href} key={item.name}>
              <span className="portfolio-tag">{item.tag}</span>
              <h3 className="portfolio-name">{item.name}</h3>
              <p className="portfolio-description">{item.description}</p>
              <span className="portfolio-link">Ver proyecto →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="faq">
        <div className="faq-left">
          <h2 className="faq-title">Preguntas frecuentes</h2>
          <p className="faq-subtitle">
            Todo lo que necesitas saber antes de dar el paso. Si tienes
            cualquier otra duda, escríbenos directamente.
          </p>
        </div>

        <div className="faq-right">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div className="faq-item" key={item.question}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="final-cta">
        <span className="section-tag final-cta-tag">¿Listo para empezar?</span>
        <h2 className="final-cta-title">¿Listo para dejar de ser uno más?</h2>
        <p className="final-cta-subtitle">
          Cuéntanos tu proyecto por WhatsApp y te respondemos hoy. Sin
          formularios largos, sin esperas.
        </p>
        <a
          className="btn btn-accent final-cta-button"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablar por WhatsApp →
        </a>
      </section>
      </main>

      <footer className="services-footer">
        <p>© 2025 Enrique Barroso · Desarrollo web premium</p>
        <p>Hecho con código real, no con plantillas.</p>
      </footer>
    </>
  );
};

export default Services;
