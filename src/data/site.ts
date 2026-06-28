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
      "Papas artesanales hechas a mano en cinco sabores, en lotes chiquitos, con el verdadero sabor de las de antes.",
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
    { href: "#gc-faq", label: "Preguntas" },
  ] satisfies NavItem[],
  scenes: [
    { id: "gc-hero", label: "Inicio", variant: "dark", order: 0 },
    { id: "gc-manifiesto", label: "Esencia", variant: "dark", order: 1 },
    { id: "gc-sabores", label: "Sabores", variant: "light", order: 2 },
    { id: "gc-como", label: "Proceso", variant: "dark", order: 3 },
    { id: "gc-donde", label: "D\u00f3nde", variant: "light", order: 4 },
    { id: "gc-faq", label: "Preguntas", variant: "dark", order: 5 },
    { id: "gc-final", label: "Pedir", variant: "accent", order: 6 },
  ] satisfies SceneItem[],
  hero: {
    eyebrow: "Botanas artesanales \u00b7 hechas a mano",
    title: {
      prefix: "El verdadero",
      accent: "sabor.",
    },
    body:
      "El sabor de las de antes, al alcance de todos. Papa cortada y fre\u00edda a mano, en cinco sabores; en lotes chiquitos, sin qu\u00edmica de m\u00e1s.",
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
  },
  flavors: {
    index: "01",
    eyebrow: "Nuestros sabores",
    activeIndex: 0,
    items: [
      {
        id: "natural",
        name: "Natural",
        body: "Solo papa, aceite limpio y sal de grano. El crunch puro, sin maquillaje.",
        kicker: "La original, la que nunca falla.",
        badges: ["Sin condimento", "Sal de grano", "Puro crunch"],
      },
      {
        id: "limon",
        name: "Lim\u00f3n",
        body: "Un toque \u00e1cido que despierta la papa. Lim\u00f3n de verdad, no polvo raro.",
        kicker: "Fresca y \u00e1cida, engancha.",
        badges: ["Toque c\u00edtrico", "Acidez justa", "Fresca"],
      },
      {
        id: "limon-pimienta",
        name: "Lim\u00f3n pimienta",
        body: "El lim\u00f3n con car\u00e1cter: pimienta negra que pica tantito al final.",
        kicker: "Para los que repiten.",
        badges: ["C\u00edtrico + pimienta", "Con punch", "Atrevida"],
      },
      {
        id: "mayonesa",
        name: "Mayonesa",
        body: "Cremosa y salada, esa combinaci\u00f3n que no sab\u00edas que necesitabas en una papa.",
        kicker: "Rara de explicar, f\u00e1cil de acabar.",
        badges: ["Cremosa", "Salada", "Antojo distinto"],
      },
      {
        id: "bbq-dulce",
        name: "BBQ dulce",
        body: "Dulce y ahumado, con ese final de barbacoa. La consentida de la casa.",
        kicker: "Dulcecito y ahumado, adictiva.",
        badges: ["Ahumado", "Dulcecito", "La consentida"],
      },
    ],
  },
  process: {
    index: "02",
    eyebrow: "C\u00f3mo las hacemos",
    title: {
      prefix: "Del corte al empaque,",
      accent: "el mismo d\u00eda",
    },
    items: [
      {
        title: "Selecci\u00f3n",
        body: "Escogemos la papa del d\u00eda. Si no est\u00e1 buena, no entra.",
      },
      {
        title: "Corte y fritura",
        body: "Cortamos fino y fre\u00edmos al punto en aceite limpio, tanda por tanda.",
      },
      {
        title: "Sabor y empaque",
        body: "Condimentamos, escurrimos y empacamos el mismo d\u00eda. No van a bodega.",
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
        subtitle: "Bello, Antioquia",
        body: "P\u00e1sate por la Cl 36a #58b-50, Bello. Reci\u00e9n hechas, directo de la freidora.",
      },
      {
        title: "A tu casa",
        subtitle: "Pedido por WhatsApp",
        body: "Escr\u00edbenos por WhatsApp, nos dices cu\u00e1ntas y de qu\u00e9 sabor, y te las llevamos crujientes.",
      },
      {
        title: "Por mayoreo",
        subtitle: "Mayoreo y distribuci\u00f3n",
        body: "\u00bfTienes un negocio? Ll\u00e9valas a tu mostrador. Pregunta por precios de mayoreo.",
      },
    ],
  },
  faq: {
    index: "04",
    eyebrow: "Antes de pedir",
    title: {
      prefix: "Lo que casi siempre",
      accent: "nos preguntan",
    },
    items: [
      {
        q: "¿Qué sabores tienen hoy?",
        a: "Natural, Limón, Limón pimienta, Mayonesa y BBQ dulce. Todo sobre papa cortada y freída a mano.",
      },
      {
        q: "¿Tienen conservantes o química de más?",
        a: "No. Solo papa, aceite limpio, sal y el condimento del sabor que elijas. Por eso las hacemos en lotes chiquitos: para que lleguen frescas, no de bodega.",
      },
      {
        q: "¿Hacen envíos a domicilio?",
        a: "Sí, en Bello y alrededores. La entrega la coordinamos por WhatsApp: escríbenos tu dirección y te confirmamos cobertura y costo.",
      },
      {
        q: "¿Cuánto duran frescas y cómo las guardo?",
        a: "Salen el mismo día. Para que no pierdan el crunch, ciérralas bien y guárdalas en un lugar seco, lejos del sol.",
      },
      {
        q: "¿Con cuánta anticipación debo pedir?",
        a: "Como freímos por tanda, para pedidos grandes lo ideal es avisar con un día de anticipación. Para poquitas, escríbenos y vemos qué hay listo.",
      },
      {
        q: "Tengo un negocio, ¿manejan mayoreo?",
        a: "Sí, con precio especial por volumen. Escríbenos por WhatsApp con cuántas necesitas y te pasamos los precios.",
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
    primary: {
      href: "https://wa.me/573125084418?text=Hola%2C%20quiero%20pedir%20Goldem%20Chip's",
      label: "P\u00eddelas por WhatsApp",
    },
    secondary: {
      href: "https://wa.me/573125084418?text=Hola%2C%20pregunto%20por%20precios%20de%20mayoreo",
      label: "Pregunta por mayoreo",
    },
  },
  footer: {
    note: "\u00a9 Goldem Chip's \u00b7 El verdadero sabor \u00b7 Hechas a mano, en lotes chiquitos.",
    links: [
      { label: "WhatsApp", href: "https://wa.me/573125084418" },
    ] satisfies SocialLink[],
  },
};

export type SiteCopy = typeof siteCopy;
