"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { sections } from "./content";

// Tracks which section is in view.
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      // A section counts as active while it crosses the middle band of the viewport.
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => observer.observe(el));

    // Above the first section (the hero) nothing is active.
    const onScroll = () => {
      const first = els[0];
      if (first && first.getBoundingClientRect().top > window.innerHeight * 0.5) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return active;
}

/**
 * Floating dock pinned to the bottom of the screen. A single highlight slides
 * between links using transform only (GPU, interruptible CSS transition).
 */
/** Hides while scrolling down so content isn't covered; returns on any scroll up or near the ends. */
function useDockVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const nearEnd = y < 120 || window.innerHeight + y > document.documentElement.scrollHeight - 160;
      if (nearEnd || y < last - 6) setVisible(true);
      else if (y > last + 6) setVisible(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible;
}

export function Dock() {
  const active = useActiveSection();
  const visible = useDockVisible();
  const listRef = useRef<HTMLUListElement>(null);
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    // Measure the link's <li>: its offsetParent is the list, so offsetLeft is list-relative.
    const item = active ? list?.querySelector<HTMLElement>(`a[href="#${active}"]`)?.closest("li") : null;
    setPill(item ? { x: item.offsetLeft, w: item.offsetWidth } : null);
  }, [active]);

  return (
    <nav
      aria-label="Sections"
      className={`fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex justify-center px-3 transition-[translate,opacity] ease-out-strong ${
        visible ? "translate-y-0 opacity-100 duration-300" : "pointer-events-none translate-y-[calc(100%+1.5rem)] opacity-0 duration-200"
      }`}
    >
      <ul
        ref={listRef}
        className="relative flex items-center gap-0.5 rounded-full border border-white/20 bg-[#0b1a4a]/80 p-1 backdrop-blur-md shadow-[0_18px_40px_-16px_rgba(5,10,30,0.7)]"
      >
        <li
          aria-hidden
          className="absolute top-1 bottom-1 left-0 rounded-full bg-white transition-[transform,width,opacity] duration-300 ease-out-strong"
          style={{
            width: pill?.w ?? 0,
            transform: `translateX(${pill?.x ?? 0}px)`,
            opacity: pill ? 1 : 0,
          }}
        />
        {sections.map((s) => {
          const on = s.id === active;
          return (
            <li key={s.id} className="relative">
              <a
                href={`#${s.id}`}
                aria-current={on ? "location" : undefined}
                className={`block rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 sm:px-4 sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  on ? "text-zinc-950" : "text-white/75 hover:text-white"
                }`}
              >
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
