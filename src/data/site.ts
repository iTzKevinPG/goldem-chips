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
      "Botanas artesanales hechas a mano: papa, platano y yuca en lotes chiquitos, con el verdadero sabor de las de antes.",
  },
  brand: {
    name: "Goldem Chip's",
    slogan: "El verdadero sabor.",
    logo: "/logo-goldem-chips.png",
  },
  nav: [
    { href: "#gc-sabores", label: "Sabores" },
    { href: "#gc-como", label: "Proceso" },
    { href: "#gc-donde", label: "Donde" },
  ] satisfies NavItem[],
  scenes: [
    { id: "gc-hero", label: "Inicio", variant: "dark", order: 0 },
    { id: "gc-manifiesto", label: "Esencia", variant: "dark", order: 1 },
    { id: "gc-sabores", label: "Sabores", variant: "light", order: 2 },
    { id: "gc-como", label: "Proceso", variant: "dark", order: 3 },
    { id: "gc-donde", label: "Donde", variant: "light", order: 4 },
    { id: "gc-final", label: "Pedir", variant: "accent", order: 5 },
  ] satisfies SceneItem[],
  hero: {
    eyebrow: "Botanas artesanales · hechas a mano",
    title: {
      prefix: "El verdadero",
      accent: "sabor.",
    },
    body:
      "El sabor de las de antes, al alcance de todos. Papa, platano y yuca; en lotes chiquitos, sin quimica de mas.",
    headerCta: { href: "#gc-final", label: "Pidelas" },
    primaryCta: { href: "#gc-final", label: "Pidelas ya" },
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
        body: "Nada de maquina sin alma. Cada lote pasa por manos que saben.",
      },
      {
        title: "Pequenos lotes",
        body: "Chiquitos y seguido. Frescas hoy, no apiladas en bodega.",
      },
      {
        title: "Ingredientes naturales",
        body: "Producto, aceite limpio y sal. Sin quimica de mas, sin secretos.",
      },
    ],
  },
  flavors: {
    index: "01",
    eyebrow: "Nuestros sabores",
    activeIndex: 0,
    items: [
      {
        name: "Papa clasica",
        body: "La de toda la vida. Rodaja fina, freida al punto, sal justa. Cruje y no para.",
        kicker: "El antojo de siempre, recien hecho.",
        badges: ["Papa fresca", "Sal de grano", "Aceite limpio"],
      },
      {
        name: "Platano maduro",
        body: "Dulcecito por fuera, crujiente por dentro. Platano de verdad, cortado a mano.",
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
    eyebrow: "Como las hacemos",
    title: {
      prefix: "El diferenciador esta en",
      accent: "como",
    },
    items: [
      {
        title: "A mano",
        body: "Nada de maquina sin alma. Cada lote pasa por manos que saben.",
      },
      {
        title: "Pequenos lotes",
        body: "Chiquitos y seguido. Frescas hoy, no apiladas en bodega.",
      },
      {
        title: "Ingredientes naturales",
        body: "Producto, aceite limpio y sal. Sin quimica de mas, sin secretos.",
      },
    ],
  },
  locations: {
    index: "03",
    eyebrow: "Donde encontrarnos",
    title: {
      prefix: "Cerquita de ti,",
      accent: "siempre",
    },
    items: [
      {
        title: "En tienda",
        subtitle: "Tiendas y abarrotes",
        body: "Buscanos en la tiendita de la esquina y en abarrotes de tu colonia.",
      },
      {
        title: "A tu casa",
        subtitle: "Online y a domicilio",
        body: "Pide por WhatsApp y recibelas crujientes, hasta la puerta de tu casa.",
      },
      {
        title: "Por mayoreo",
        subtitle: "Mayoreo y distribucion",
        body: "Tienes un negocio? Llevalas a tu mostrador. Pregunta por precios de mayoreo.",
      },
    ],
  },
  finalCta: {
    eyebrow: "El verdadero sabor",
    title: {
      prefix: "El verdadero sabor,",
      accent: "a un clic.",
    },
    body: "Pide tus Goldem y recibelas crujientes en tu casa. Hechas hoy, a mano, como las de antes.",
    primary: { href: "#", label: "Pidelas ya" },
    secondary: { href: "#gc-donde", label: "Pregunta por mayoreo" },
  },
  footer: {
    note: "© Goldem Chip's · El verdadero sabor · Hechas a mano, en lotes chiquitos.",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "WhatsApp", href: "#" },
      { label: "TikTok", href: "#" },
    ] satisfies SocialLink[],
  },
};

export type SiteCopy = typeof siteCopy;
