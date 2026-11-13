"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  'a, button, input, textarea, select, [data-cursor], [role="button"]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    document.documentElement.classList.add("custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };
    const onLeave = () => setVisible(false);
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.(HOVER_SELECTOR) as HTMLElement | null;
      if (target) {
        setHovering(true);
        setLabel(target.dataset.cursorLabel ?? null);
      } else {
        setHovering(false);
        setLabel(null);
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      {/* precise dot */}
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* responsive ring */}
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-white transition-[width,height,opacity,background-color] duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } ${
          label
            ? "h-16 w-16 border-transparent bg-white"
            : `mix-blend-difference ${hovering ? "h-11 w-11 border-transparent bg-white/90" : "h-7 w-7 bg-transparent"}`
        }`}
      >
        {label ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black">
            {label}
          </span>
        ) : null}
      </div>
    </>
  );
}
