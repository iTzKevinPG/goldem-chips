import { useEffect } from "react";

const STEP_THRESHOLDS = [0.08, 0.36, 0.64];

export default function ProcessTimelineIsland() {
  useEffect(() => {
    const wrap = document.getElementById("gcComoWrap");
    if (!wrap) return;

    const beats = Array.from(wrap.querySelectorAll<HTMLElement>("[data-process-beat]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      wrap.style.setProperty("--process-progress", "1");
      wrap.dataset.activeStep = "2";
      beats.forEach((beat, index) => {
        beat.classList.add("is-visible");
        beat.dataset.state = index === beats.length - 1 ? "active" : "done";
      });
      return;
    }

    const updateProgress = () => {
      const rect = wrap.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const traveled = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = traveled / scrollable;

      wrap.style.setProperty("--process-progress", progress.toFixed(4));

      let activeStep = 0;

      beats.forEach((beat, index) => {
        const threshold = STEP_THRESHOLDS[index] ?? 1;
        const isVisible = progress >= threshold;
        const isActive =
          progress >= threshold &&
          (index === beats.length - 1 || progress < (STEP_THRESHOLDS[index + 1] ?? 1.01));

        if (isVisible) beat.classList.add("is-visible");
        beat.dataset.state = isActive ? "active" : isVisible ? "done" : "idle";
        if (isVisible) activeStep = index;
      });

      wrap.dataset.activeStep = String(activeStep);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return null;
}
