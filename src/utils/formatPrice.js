export function formatPrice(value) {
  if (!value && value !== 0) return "R$ 0,00";

  return (value / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
