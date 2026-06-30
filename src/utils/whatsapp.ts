import type { SiteCopy } from "@/data/site";

export type OrderContact = {
  name: string;
  phone: string;
  address: string;
  neighborhood: string;
};

export type OrderLine = {
  name: string;
  quantity: number;
};

/**
 * Construye una URL de WhatsApp (wa.me) con el texto pre-llenado.
 * encodeURIComponent convierte los saltos de línea (\n) en %0A, que
 * WhatsApp interpreta como salto de línea real.
 */
export function buildWhatsappUrl(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Arma el mensaje del pedido a partir de los datos del formulario.
 */
export function buildOrderMessage(
  copy: SiteCopy["orderForm"],
  contact: OrderContact,
  lines: OrderLine[],
): string {
  const total = lines.reduce((sum, line) => sum + line.quantity, 0);
  const packagesWord =
    total === 1 ? copy.packagesWord.one : copy.packagesWord.many;

  const orderLines = lines
    .map((line) => `- ${line.name} x${line.quantity}`)
    .join("\n");

  return [
    copy.messageHeader,
    "",
    `${copy.fields.name.label}: ${contact.name}`,
    `${copy.fields.phone.label}: ${contact.phone}`,
    `${copy.fields.address.label}: ${contact.address}`,
    `${copy.fields.neighborhood.label}: ${contact.neighborhood}`,
    "",
    "Pedido:",
    orderLines,
    "",
    `${copy.totalLabel}: ${total} ${packagesWord}`,
  ].join("\n");
}
