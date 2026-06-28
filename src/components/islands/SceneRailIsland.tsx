import { useEffect, useState } from "react";
import type { SceneItem } from "@/data/site";

type Props = {
  items: SceneItem[];
};

export default function SceneRailIsland({ items }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "gc-hero");

  useEffect(() => {
    const setCurrentSection = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.38;
      const ordered = [...items].sort((a, b) => a.order - b.order);

      let currentId = ordered[0]?.id ?? "gc-hero";

      for (const item of ordered) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        if (scrollY >= section.offsetTop) currentId = item.id;
      }

      setActiveId(currentId);
    };

    setCurrentSection();

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) {
          setCurrentSection();
          return;
        }
        setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", setCurrentSection, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", setCurrentSection);
    };
  }, [items]);

  return (
    <aside className="scene-rail" aria-hidden="true">
      <div className="scene-rail__dots">
        {items.map((item) => (
          <a
            key={item.id}
            className="scene-rail__item"
            href={`#${item.id}`}
            data-smooth-link
            data-active={activeId === item.id ? "true" : "false"}
            data-variant={item.variant}
            tabIndex={-1}
          >
            <span className="scene-rail__label">{item.label}</span>
            <span className="scene-rail__dot"></span>
          </a>
        ))}
      </div>
    </aside>
  );
}
