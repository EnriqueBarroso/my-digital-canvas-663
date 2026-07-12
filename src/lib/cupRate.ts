// Tasa orientativa USD -> CUP. Actualizar manualmente según referencia de El Toque.
// Última actualización manual: 2026-06-20 (valor tomado del código fuente real de Biopage).
export const CUP_PER_USD = 693;
export const CUP_RATE_LAST_UPDATED = "2026-06-20";

export const toCup = (usd: number) => {
  const cup = Math.round(usd * CUP_PER_USD);
  return `${cup.toLocaleString("es-CU")} CUP`;
};
