import { useEffect, useState } from "react";
import type { SceneItem } from "@/data/site";

type Props = {
  items: SceneItem[];
};

export default function SceneRailIsland({ items }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "gc-hero");

  useEffect(() => {
    const ordered = [...items].sort((a, b) => a.order - b.order);

    const setCurrentSection = () => {
      const viewportProbe = window.innerHeight * 0.5;
      let currentId = ordered[0]?.id ?? "gc-hero";

      for (const item of ordered) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const containsProbe = rect.top <= viewportProbe && rect.bottom >= viewportProbe;

        if (containsProbe) {
          currentId = item.id;
          break;
        }

        if (rect.top <= viewportProbe) {
          currentId = item.id;
        }
      }

      setActiveId(currentId);
    };

    setCurrentSection();
    window.addEventListener("scroll", setCurrentSection, { passive: true });
    window.addEventListener("resize", setCurrentSection);

    return () => {
      window.removeEventListener("scroll", setCurrentSection);
      window.removeEventListener("resize", setCurrentSection);
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
