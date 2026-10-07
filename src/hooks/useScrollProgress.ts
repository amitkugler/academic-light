import { RefObject, useEffect } from "react";

type ProgressFn = (rect: DOMRect, viewportHeight: number) => number;

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Writes scroll progress (0-1) to a `--p` CSS variable on the element.
 * Updating a variable instead of React state keeps scroll-linked motion on the compositor path.
 */
export function useScrollProgress<T extends HTMLElement>(ref: RefObject<T>, progress: ProgressFn) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      el.style.setProperty("--p", clamp(progress(el.getBoundingClientRect(), window.innerHeight)).toFixed(4));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [ref, progress]);
}
