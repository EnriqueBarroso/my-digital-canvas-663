import { useState, useEffect } from "react";

interface TypewriterProps {
  titles: string[];
  speed?: number;
  pause?: number;
}

export function Typewriter({ 
  titles, 
  speed = 100, 
  pause = 2000 
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0); // Índice de la frase actual
  const [subIndex, setSubIndex] = useState(0); // Índice del carácter actual
  const [reverse, setReverse] = useState(false); // ¿Está borrando?

  useEffect(() => {
    // Si llegamos al final de la última frase y estamos borrando, volvemos a empezar
    if (index === titles.length) {
        setIndex(0);
        return;
    }

    // Lógica principal
    if (subIndex === titles[index].length + 1 && !reverse) {
      // 1. Frase completada: Esperar pausa y luego borrar
      const timeout = setTimeout(() => {
          setReverse(true);
      }, pause);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      // 2. Borrado completado: Pasar a la siguiente frase y empezar a escribir
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    // 3. Escribiendo o Borrando carácter por carácter
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed); // Borrar es el doble de rápido

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, titles, speed, pause]);

  // Efecto secundario para actualizar el texto real en pantalla
  useEffect(() => {
      if (index < titles.length) {
          setDisplayedText(titles[index].substring(0, subIndex));
      }
  }, [subIndex, index, titles]);

  return (
    <span className="inline-block min-w-[10px] text-left">
      {displayedText}
      <span className="animate-pulse ml-1 text-primary font-bold">|</span>
    </span>
  );
}