import { useEffect, useState } from "react";
import type { NavItem } from "@/data/site";

type Props = {
  brand: {
    name: string;
    logo: string;
  };
  navItems: NavItem[];
  cta: {
    href: string;
    label: string;
  };
};

export default function StickyNavIsland({ brand, navItems, cta }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#gc-sabores");

  useEffect(() => {
    const sections = ["#gc-hero", ...navItems.map((item) => item.href)]
      .map((selector) => document.querySelector<HTMLElement>(selector))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const id = visible[0].target.id;
        if (id === "gc-hero") {
          setActiveHref("#gc-sabores");
          return;
        }

        setActiveHref(`#${id}`);
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>("[data-smooth-link]");

    const onClick = (event: Event) => {
      const current = event.currentTarget as HTMLAnchorElement;
      const target = current.getAttribute("href");
      if (!target?.startsWith("#")) return;

      const element = document.querySelector<HTMLElement>(target);
      if (!element) return;

      event.preventDefault();
      setIsOpen(false);
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      history.replaceState(null, "", target);
    };

    links.forEach((link) => link.addEventListener("click", onClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", onClick));
    };
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__pill">
        <a className="site-header__brand" href="#gc-hero" data-smooth-link aria-label={brand.name}>
          <img src={brand.logo} alt={brand.name} width={28} height={28} />
        </a>

        <nav className="site-header__nav" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-smooth-link
              data-active={activeHref === item.href ? "true" : "false"}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="site-header__cta" href={cta.href} data-smooth-link>
          {cta.label}
        </a>

        <button
          type="button"
          className="site-header__menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Abrir menú"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="site-header__mobile" id="mobile-nav" data-open={isOpen ? "true" : "false"}>
        <div className="site-header__mobile-inner">
          <a href="#gc-hero" data-smooth-link>
            Inicio
          </a>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} data-smooth-link>
              {item.label}
            </a>
          ))}
          <a className="gc-btn gc-btn--primary" href={cta.href} data-smooth-link>
            {cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
