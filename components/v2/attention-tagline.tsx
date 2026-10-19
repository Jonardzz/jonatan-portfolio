"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

// The hero's one memorable moment: the tagline as an attention map.
// Hovering (or tapping) a word shades every other word by how strongly it
// "attends" to it. Blue = full stack, violet = NLP/AI, matching the Stack tile.

type Group = "role" | "web" | "ml" | "link";

const TOKENS: { text: string; group: Group }[] = [
  { text: "Software", group: "role" },
  { text: "Engineer.", group: "role" },
  { text: "Bridging", group: "link" },
  { text: "Full", group: "web" },
  { text: "Stack", group: "web" },
  { text: "Development,", group: "web" },
  { text: "NLP,", group: "ml" },
  { text: "and", group: "link" },
  { text: "AI.", group: "ml" },
];

const RGB: Record<Group, string> = {
  role: "228,228,231",
  link: "228,228,231",
  web: "91,140,255",
  ml: "165,133,255",
};

function weight(from: number, to: number) {
  if (from === to) return 1;
  const a = TOKENS[from].group;
  const b = TOKENS[to].group;
  if (a === b) return 0.85;
  if (a === "link" || b === "link") return 0.5; // "Bridging" / "and" connect everything
  if (a === "role" || b === "role") return 0.35;
  return 0.22; // web <-> ml
}

export function AttentionTagline() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const userTookOver = useRef(false);

  // One orchestrated sweep on load, then hand control to the visitor.
  useEffect(() => {
    if (reduceMotion) return;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (userTookOver.current) return;
      if (i < TOKENS.length) {
        setActive(i++);
        timer = setTimeout(tick, i === TOKENS.length ? 900 : 120);
      } else {
        setActive(null);
      }
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  const focus = (i: number) => {
    userTookOver.current = true;
    setActive(i);
  };

  return (
    <div>
      <p className="sr-only">Software Engineer. Bridging Full Stack Development, NLP, and AI.</p>
      <p
        aria-hidden
        onPointerLeave={(e) => e.pointerType === "mouse" && setActive(null)}
        className="flex max-w-[22ch] flex-wrap gap-x-[0.26em] gap-y-[0.08em] text-[clamp(1.6rem,3.6vw,2.6rem)] font-medium leading-[1.15] tracking-[-0.025em] text-zinc-100"
      >
        {TOKENS.map((t, i) => {
          const w = active === null ? null : weight(i, active);
          return (
            <span
              key={i}
              onPointerEnter={(e) => e.pointerType === "mouse" && focus(i)}
              onClick={() => {
                userTookOver.current = true;
                setActive((a) => (a === i ? null : i));
              }}
              className="-mx-[0.1em] cursor-default rounded-[0.28em] px-[0.1em] transition-[background-color,color,box-shadow] duration-150 ease-out"
              style={{
                color: w === null ? undefined : `rgba(244,244,245,${0.28 + 0.72 * w})`,
                backgroundColor:
                  w === null
                    ? "transparent"
                    : `rgba(${RGB[t.group]},${((t.group === "web" || t.group === "ml" ? 0.34 : 0.12) * w).toFixed(3)})`,
                boxShadow: i === active ? `inset 0 0 0 1px rgba(${RGB[t.group]},0.75)` : "inset 0 0 0 1px transparent",
              }}
            >
              {t.text}
            </span>
          );
        })}
      </p>
    </div>
  );
}
