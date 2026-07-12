import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface CounterProps {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ to, decimals = 0, prefix = "", suffix = "" }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [isInView, to]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-biopage-orange">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </div>
  );
};

const stats = [
  { to: 120, prefix: "+", label: "Páginas entregadas" },
  { to: 3.4, decimals: 1, suffix: "×", label: "Más conversión vs Linktree" },
];

const StatsBar = () => {
  return (
    <section className="py-16 border-b border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
          >
            <Counter to={stat.to} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-white/50">{stat.label}</p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="text-4xl md:text-5xl font-bold text-biopage-orange">5 días</div>
          <p className="mt-2 text-sm text-white/50">Entrega media</p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
