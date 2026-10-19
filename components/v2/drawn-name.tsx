"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * The hero name, drawn on load: each letter's outline traces itself in
 * (stroke-dashoffset), then the fill fades up. Plays once; reduced motion
 * shows the finished name immediately (see .drawn-name in globals.css).
 *
 * The SVG viewBox is fitted to the real text box after the font loads, so the
 * name scales exactly like the old HTML heading.
 */
export function DrawnName() {
  const groupRef = useRef<SVGGElement>(null);
  const [viewBox, setViewBox] = useState<string | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const box = groupRef.current?.getBBox();
      if (box && box.width > 0) setViewBox(`${box.x - 4} ${box.y} ${box.width + 8} ${box.height}`);
    };
    measure();
    document.fonts?.ready.then(measure);
  }, []);

  return (
    <h1 className="text-white">
      <span className="sr-only">Jonatan Rodriguez</span>
      <svg
        aria-hidden
        viewBox={viewBox ?? "0 0 1000 300"}
        className="drawn-name block h-auto w-full overflow-visible lg:h-[clamp(5.8rem,27vw,22.5rem)] lg:w-auto lg:max-w-full"
        style={{ visibility: viewBox ? "visible" : "hidden" }}
      >
        <g ref={groupRef} fontSize="160" fontWeight="600" letterSpacing="-8.8">
          <text x="0" y="128">
            Jonatan
          </text>
          <text x="0" y="266">
            Rodriguez
          </text>
        </g>
      </svg>
    </h1>
  );
}
