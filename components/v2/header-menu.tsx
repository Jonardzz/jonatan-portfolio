"use client";

import { useEffect, useId, useRef, useState } from "react";
import { TbArrowUpRight, TbBrandGithub, TbBrandLinkedin, TbFileCv } from "react-icons/tb";
import type { IconType } from "react-icons";
import { links } from "./content";

const items: { label: string; detail: string; href: string; Icon: IconType }[] = [
  { label: "GitHub", detail: "@Jonardzz", href: links.github, Icon: TbBrandGithub },
  { label: "LinkedIn", detail: "Jonatan Rodriguez", href: links.linkedin, Icon: TbBrandLinkedin },
  { label: "Resume", detail: "PDF, 1 page", href: links.resume, Icon: TbFileCv },
];

/**
 * Hamburger in the top-right corner. The two bars morph into an X, and the
 * panel scales out of the button (origin-top-right). Exit is faster than enter.
 */
export function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative [text-shadow:none]">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close links menu" : "Open links menu"}
        onClick={() => setOpen((o) => !o)}
        className="group relative flex size-12 items-center justify-center rounded-full border border-white/25 bg-[#0b1a4a]/50 backdrop-blur-md transition-[background-color,border-color,scale] duration-150 ease-out-strong hover:border-white/40 hover:bg-[#0b1a4a]/70 active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden className="relative block h-3 w-5">
          <span
            className={`absolute left-0 h-[2px] w-5 rounded-full bg-white transition-transform duration-200 ease-out-strong ${
              open ? "top-[5px] rotate-45" : "top-0 group-hover:-translate-y-[1px]"
            }`}
          />
          <span
            className={`absolute left-0 h-[2px] w-5 rounded-full bg-white transition-transform duration-200 ease-out-strong ${
              open ? "top-[5px] -rotate-45" : "top-[10px] group-hover:translate-y-[1px]"
            }`}
          />
        </span>
      </button>

      <div
        id={menuId}
        data-open={open || undefined}
        inert={!open}
        className="absolute top-full right-0 z-50 mt-3 w-64 origin-top-right scale-[0.96] rounded-2xl border border-white/20 bg-[#0b1a4a]/85 p-1.5 opacity-0 shadow-[0_24px_48px_-20px_rgba(5,12,45,0.8)] backdrop-blur-xl transition-[opacity,scale] duration-150 ease-out data-[open]:scale-100 data-[open]:opacity-100 data-[open]:duration-200 data-[open]:ease-out-strong"
      >
        <ul>
          {items.map(({ label, detail, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="group/item flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-white transition-colors duration-150 hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.06] text-white">
                  <Icon aria-hidden className="size-[22px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-medium leading-tight">{label}</span>
                  <span className="block text-[13px] text-white/60">{detail}</span>
                </span>
                <TbArrowUpRight
                  aria-hidden
                  className="size-4 text-white/50 transition-transform duration-150 ease-out group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-white"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
