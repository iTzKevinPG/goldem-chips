export type NavItem = {
  href: string;
  label: string;
};

export type SceneItem = {
  id: string;
  label: string;
  variant: "dark" | "light" | "accent";
  order: number;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const siteCopy = {
  meta: {
    title: "Goldem Chip's | El verdadero sabor",
    description:
      "Botanas artesanales hechas a mano: papa, pl\u00e1tano y yuca en lotes chiquitos, con el verdadero sabor de las de antes.",
  },
  brand: {
    name: "Goldem Chip's",
    slogan: "El verdadero sabor.",
    logo: "/logo-goldem-chips.png",
  },
  nav: [
    { href: "#gc-sabores", label: "Sabores" },
    { href: "#gc-como", label: "Proceso" },
    { href: "#gc-donde", label: "D\u00f3nde" },
  ] satisfies NavItem[],
  scenes: [
    { id: "gc-hero", label: "Inicio", variant: "dark", order: 0 },
    { id: "gc-manifiesto", label: "Esencia", variant: "dark", order: 1 },
    { id: "gc-sabores", label: "Sabores", variant: "light", order: 2 },
    { id: "gc-como", label: "Proceso", variant: "dark", order: 3 },
    { id: "gc-donde", label: "D\u00f3nde", variant: "light", order: 4 },
    { id: "gc-final", label: "Pedir", variant: "accent", order: 5 },
  ] satisfies SceneItem[],
  hero: {
    eyebrow: "Botanas artesanales \u00b7 hechas a mano",
    title: {
      prefix: "El verdadero",
      accent: "sabor.",
    },
    body:
      "El sabor de las de antes, al alcance de todos. Papa, pl\u00e1tano y yuca; en lotes chiquitos, sin qu\u00edmica de m\u00e1s.",
    headerCta: { href: "#gc-final", label: "P\u00eddelas" },
    primaryCta: { href: "#gc-final", label: "P\u00eddelas ya" },
    secondaryCta: { href: "#gc-sabores", label: "Conoce los sabores" },
    scrollHint: "Desliza",
  },
  manifesto: {
    index: "01",
    eyebrow: "Manifiesto",
    lines: [
      { text: "Hechas a mano.", accent: false },
      { text: "En lotes chiquitos.", accent: true },
      { text: "Como las de antes.", accent: false },
    ],
    items: [
      {
        title: "A mano",
        body: "Nada de m\u00e1quina sin alma. Cada lote pasa por manos que saben.",
      },
      {
        title: "Peque\u00f1os lotes",
        body: "Chiquitos y seguido. Frescas hoy, no apiladas en bodega.",
      },
      {
        title: "Ingredientes naturales",
        body: "Producto, aceite limpio y sal. Sin qu\u00edmica de m\u00e1s, sin secretos.",
      },
    ],
  },
  flavors: {
    index: "01",
    eyebrow: "Nuestros sabores",
    activeIndex: 0,
    items: [
      {
        name: "Papa cl\u00e1sica",
        body: "La de toda la vida. Rodaja fina, fre\u00edda al punto, sal justa. Cruje y no para.",
        kicker: "El antojo de siempre, reci\u00e9n hecho.",
        badges: ["Papa fresca", "Sal de grano", "Aceite limpio"],
      },
      {
        name: "Pl\u00e1tano maduro",
        body: "Dulcecito por fuera, crujiente por dentro. Pl\u00e1tano de verdad, cortado a mano.",
        kicker: "Ese toque dulce que se queda contigo.",
        badges: ["Corte manual", "Dulzor natural", "Crunch suave"],
      },
      {
        name: "Yuca crujiente",
        body: "Para los que buscan algo distinto. Cruje fuerte, sabe a casa, engancha.",
        kicker: "El crujido que no esperabas.",
        badges: ["Textura firme", "Sabor casero", "Hecha hoy"],
      },
    ],
  },
  process: {
    index: "02",
    eyebrow: "C\u00f3mo las hacemos",
    title: {
      prefix: "El diferenciador est\u00e1 en",
      accent: "c\u00f3mo",
    },
    items: [
      {
        title: "A mano",
        body: "Nada de m\u00e1quina sin alma. Cada lote pasa por manos que saben.",
      },
      {
        title: "Peque\u00f1os lotes",
        body: "Chiquitos y seguido. Frescas hoy, no apiladas en bodega.",
      },
      {
        title: "Ingredientes naturales",
        body: "Producto, aceite limpio y sal. Sin qu\u00edmica de m\u00e1s, sin secretos.",
      },
    ],
  },
  locations: {
    index: "03",
    eyebrow: "D\u00f3nde encontrarnos",
    title: {
      prefix: "Cerquita de ti,",
      accent: "siempre",
    },
    items: [
      {
        title: "En tienda",
        subtitle: "Tiendas y minimercados",
        body: "B\u00fascanos en la tiendita de la esquina y en minimercados de tu barrio.",
      },
      {
        title: "A tu casa",
        subtitle: "Online y a domicilio",
        body: "Pide por WhatsApp y rec\u00edbelas crujientes, hasta la puerta de tu casa.",
      },
      {
        title: "Por mayoreo",
        subtitle: "Mayoreo y distribuci\u00f3n",
        body: "\u00bfTienes un negocio? Ll\u00e9valas a tu mostrador. Pregunta por precios de mayoreo.",
      },
    ],
  },
  finalCta: {
    eyebrow: "El verdadero sabor",
    title: {
      prefix: "El verdadero sabor,",
      accent: "a un clic.",
    },
    body: "Pide tus Goldem y rec\u00edbelas crujientes en tu casa. Hechas hoy, a mano, como las de antes.",
    primary: { href: "#", label: "P\u00eddelas ya" },
    secondary: { href: "#gc-donde", label: "Pregunta por mayoreo" },
  },
  footer: {
    note: "\u00a9 Goldem Chip's \u00b7 El verdadero sabor \u00b7 Hechas a mano, en lotes chiquitos.",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "WhatsApp", href: "#" },
      { label: "TikTok", href: "#" },
    ] satisfies SocialLink[],
  },
};

export type SiteCopy = typeof siteCopy;
