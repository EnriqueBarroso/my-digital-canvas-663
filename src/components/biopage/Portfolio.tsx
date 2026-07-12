import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { getProjectBySlug } from "@/data/projects";

const projectSlugs = ["lachopin", "cine-cubano"];

const Portfolio = () => {
  const location = useLocation();
  const projects = projectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-xl mx-auto"
      >
        <span className="text-sm text-biopage-orange font-medium">
          Garantía de calidad
        </span>
        <h2 className="mt-3 text-2xl md:text-4xl font-semibold">
          Código real. Proyectos en producción.
        </h2>
        <p className="mt-4 text-white/60">
          No son maquetas ni plantillas. Son productos en producción, usados
          por clientes reales todos los días.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
          >
            <Link
              to={`/proyecto/${project.slug}`}
              state={{ from: location.pathname }}
              className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-biopage-orange/40 transition-colors h-full"
            >
              <span className="text-xs uppercase tracking-wide text-biopage-orange">
                En producción
              </span>
              <h3 className="mt-3 font-semibold text-lg">{project.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                {project.subtitle}
              </p>
              <span className="inline-block mt-4 text-sm text-white/80">
                Ver proyecto →
              </span>
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: projects.length * 0.1 }}
        >
          <Link
            to="/demo"
            className="block p-6 rounded-2xl bg-biopage-orange/10 border border-biopage-orange/30 hover:border-biopage-orange/60 transition-colors h-full"
          >
            <span className="text-xs uppercase tracking-wide text-biopage-orange">
              Ver demo →
            </span>
            <h3 className="mt-3 font-semibold text-lg">
              Paladar El Buen Sabor
            </h3>
            <p className="mt-2 text-sm text-white/60 leading-relaxed">
              Así se ve una Biopage real terminada. Navega la página completa
              como la vería tu cliente.
            </p>
            <span className="inline-block mt-4 text-sm text-white/80">
              Ver demo →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
