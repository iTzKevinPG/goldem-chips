import { useEffect } from "react";

export default function RevealControllerIsland() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const delay = target.dataset.delay ?? "0";
          target.style.setProperty("--reveal-delay", `${delay}ms`);
          target.classList.add("is-visible");
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return null;
}
