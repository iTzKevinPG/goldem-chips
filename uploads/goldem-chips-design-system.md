# Sistema de diseño — Goldem Chip's

> **Para Claude Design / cualquier IA que lea esta carpeta:** este es el documento maestro.
> Cuando generes una web, página o pieza para Goldem Chip's, sigue estas reglas al pie de la letra
> y usa los estilos de `goldem-tokens.css` (cárgalo o copia sus variables). No inventes colores
> ni fuentes fuera de los aquí definidos.

---

## 0. En una frase

Goldem Chip's hace **botanas artesanales** (papas, plátano y yuca) hechas a mano, en pequeños lotes,
con ingredientes naturales. Su promesa es **"El verdadero sabor"**. La marca es **artesanal accesible**:
no gourmet caro, no industrial sin alma. Cálida, honesta, antojable y popular.

- **Nombre oficial:** Goldem Chip's (se escribe con **M**, no "Golden").
- **Eslogan:** El verdadero sabor.
- **Público:** general / popular — familias y antojados que buscan calidad sin pagar de más.
- **Canales:** tiendas y abarrotes · venta online y a domicilio · distribución a otros negocios.

## 1. La idea que guía todo (north star)

> "El sabor de las de antes, al alcance de todos."

Cada decisión de diseño debe sentirse **hecha a mano y cálida**, no fría ni corporativa.
Personalidad: **auténtica, cálida, cercana, antojable, honesta.**

## 2. Reglas de oro (no negociables)

1. Respeta el nombre **Goldem Chip's** (con M) y el eslogan **El verdadero sabor**.
2. El **lettering del logo es solo para el logo**. Nunca lo recrees con otra fuente.
3. Usa **solo** la paleta de la sección 3. El dorado se usa **poco** (regla 60/30/10).
4. Fondo base = crema/papel cálido. **Nunca** fondos azules, grises fríos o blanco puro frío.
5. Esquinas **suaves** (border-radius), nunca filosas. Nada de sombras duras ni neón.
6. Tono de voz **cálido y de barrio** (sección 6). Cero lenguaje corporativo.
7. Siempre que se pueda, **muestra el producto** (el antojo entra por los ojos).

## 3. Color

Paleta extraída del logo. Variables en `goldem-tokens.css`.

| Rol | Nombre | HEX | Uso |
|-----|--------|-----|-----|
| Protagonista | Marrón cacao | `#693127` | Textos, titulares, logo |
| Acento | Oro | `#F6C221` | Botones, precios, resaltes (¡poco!) |
| Acento 2 | Bronce | `#AE7C2E` | Detalles, líneas, eyebrows |
| Contraste | Carbón | `#201C1D` | Empaque, fondos dramáticos |
| Apoyo | Terracota | `#A25242` | Sombra/secundario del lettering |
| Suave | Oro claro | `#FCD058` | Resaltes suaves, hover |
| Cálido | Crema | `#F8E292` | Fondos cálidos, sellos |
| Base (derivado) | Papel | `#FBF6E6` | **Fondo principal** de la web |
| Casi blanco (derivado) | Papel claro | `#FFFDF7` | Tarjetas, superficies |
| Texto (derivado) | Tinta cálida | `#2A1A12` | Texto de cuerpo |

**Proporción 60 / 30 / 10:** 60% base crema/papel · 30% cacao · 10% oro.
El dorado solo brilla si se usa poco.

**Combinaciones seguras (fondo → texto):**
- Papel `#FBF6E6` → cacao `#693127`
- Cacao `#693127` → oro claro `#FCD058` / crema `#F8E292`
- Carbón `#201C1D` → oro `#F6C221` / oro claro `#FCD058`
- Oro `#F6C221` → carbón `#201C1D` (texto oscuro sobre dorado, nunca blanco)

## 4. Tipografía

Tres fuentes gratuitas (Google Fonts). Cárgalas siempre.

| Rol | Fuente | Peso | Para qué |
|-----|--------|------|----------|
| Display / titulares | **Fraunces** | 600 | Títulos, nombres de producto, frases con alma |
| Etiqueta / eslogan | **Oswald** | 600, MAYÚSCULAS | Sellos, categorías, precios, botones, eyebrows |
| Cuerpo / UI | **Inter** | 400–500 | Párrafos, menús, fichas, todo lo funcional |

- Display en cacao `#693127`. Permite *cursiva* de Fraunces para palabras clave (ej. *sabor*).
- Oswald siempre en MAYÚSCULAS con `letter-spacing` amplio (0.08–0.18em).
- Escala sugerida (px): display 44–62 · h2 30 · h3 22 · cuerpo 16–17 · detalle 13.
- Interlineado: titulares 1.0–1.1 · cuerpo 1.6.

## 5. Componentes y layout

- **Contenedor:** máx. ~1080px, centrado, padding lateral 28px.
- **Secciones:** ritmo amplio (≈88px arriba/abajo en desktop), separadas por línea fina cacao al 16%.
- **Eyebrow:** etiqueta Oswald en bronce + número en Fraunces cursiva (ej. *01* ESENCIA). Úsalo como índice, no como decoración.
- **Botón primario:** fondo oro `#F6C221`, texto carbón, Oswald mayúsculas, esquinas tipo píldora (radius 40px).
- **Botón secundario:** contorno cacao, fondo transparente.
- **Tarjetas:** fondo papel claro `#FFFDF7`, borde fino cacao 16%, radius 18px, padding generoso.
- **Píldoras / tags:** fondo crema `#F8E292`, texto cacao, Oswald.
- **Motivo recurrente (firma):** el **doble óvalo** dorado/carbón del logo y los **sellos circulares**. Úsalos como marco o detalle, con mesura.
- **Hero web:** fondo carbón con un resplandor radial bronce/cacao, titular grande en Fraunces (una palabra clave en cursiva dorada), eslogan, botón oro. O alternativa cálida: fondo papel con foto de producto a la derecha.
- **Header:** sticky, fondo papel translúcido con línea fina inferior, logo a la izquierda y navegación Oswald mayúsculas a la derecha (`.gc-header`, `.gc-nav`).
- **Footer / secciones oscuras:** fondo carbón con texto crema; títulos en papel y el oro/oro claro como acento (`.gc-footer`, `.gc-dark`). **Regla clave de contraste:** el oro como *texto* solo sobre fondo oscuro; sobre fondo claro el énfasis va en **bronce o cacao**, nunca oro.
- **Formularios:** inputs sobre superficie papel claro, borde fino cacao, radius suave; foco con anillo bronce. Etiquetas en Oswald mayúsculas (`.gc-field`, `.gc-label`, `.gc-input`, `.gc-textarea`).
- **Sellos circulares:** el motivo de firma como "sello" (crema, oro o carbón) para destacar promesas o promos, con mesura (`.gc-seal`).
- **Enlaces:** cacao con subrayado sutil; hover en bronce. En secciones oscuras, oro claro.

> Todas estas clases ya están listas en `goldem-tokens.css`. Úsalas en vez de inventar estilos nuevos.

## 6. Tono de voz

Cálido, directo, de barrio. Tutea. Presume el sabor sin inventar. Frases cortas y sabrosas.

**Sí suena así:**
- "Hechas hoy, a mano, en lotes chiquitos. Por eso saben como las de antes."
- "El verdadero sabor. Sin química de más, sin secretos."
- "Pide tus Goldem y recíbelas crujientes en tu casa."

**Nunca así:** "Optimizamos la experiencia del consumidor." (frío, vacío, no es la marca).

Botones y llamados: verbo primero, corto. "Pídelas ya", "Conoce los sabores", "Encuéntranos".

## 7. Estructura recomendada para la web

1. **Hero** — eslogan + botón "Pídelas ya".
2. **Nuestros sabores** — papa, plátano, yuca (tarjetas con foto).
3. **Cómo las hacemos** — a mano, pequeños lotes, ingredientes naturales (la historia = el diferenciador).
4. **Dónde encontrarnos** — tiendas, online, mayoreo/distribución.
5. **Pedido / contacto** — pide a domicilio o pregunta por mayoreo.
6. **Pie** — eslogan + redes.

## 8. Qué evitar

Azules y grises fríos · blanco puro frío · degradados llamativos o neón · sombras duras ·
tipografías genéricas tipo Arial/Times · stock frío · exceso de dorado · tono corporativo ·
reescribir el lettering del logo · esquinas filosas.
