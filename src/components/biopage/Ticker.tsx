const items = [
  "Diseño a medida",
  "Sin plantillas genéricas",
  "Entrega en 5 días",
  "100% responsive",
  "Optimizado para conversión",
  "Código real, no Linktree",
];

const Ticker = () => {
  const allItems = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/5 py-4">
      <div className="flex w-max animate-marquee gap-12">
        {allItems.map((item, index) => (
          <span
            key={index}
            className="whitespace-nowrap text-sm text-white/50"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
