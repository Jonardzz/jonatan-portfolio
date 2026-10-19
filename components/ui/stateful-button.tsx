"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Status = "idle" | "loading" | "success" | "error";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  className?: string;
  children: React.ReactNode;
  /** May return a promise: resolve shows success, reject shows an error state. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
}

// Strong ease-out (emil-design-eng): instant response, soft landing
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const STATUS_LABEL: Record<Status, string> = {
  idle: "",
  loading: "Sending…",
  success: "Sent",
  error: "Something went wrong, please try again",
};

export const Button = ({
  className,
  children,
  onClick,
  disabled,
  ...buttonProps
}: ButtonProps) => {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const reduceMotion = useReducedMotion();

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (status === "loading") return;
    clearTimeout(timer.current);
    setStatus("loading");
    try {
      await onClick?.(event);
      setStatus("success");
      timer.current = setTimeout(() => setStatus("idle"), 2000);
    } catch {
      // Previously a rejection left the spinner running forever.
      setStatus("error");
      timer.current = setTimeout(() => setStatus("idle"), 1200);
    }
  };

  // Never from scale(0): start slightly smaller + blurred, then crossfade.
  // Reduced motion keeps the fade and drops the scale/blur.
  const hidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, transform: "scale(0.8)", filter: "blur(2px)" };
  const shown = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, transform: "scale(1)", filter: "blur(0px)" };
  const transition = { duration: 0.18, ease: EASE_OUT };

  return (
    <button
      {...buttonProps}
      disabled={disabled || status === "loading"}
      aria-busy={status === "loading"}
      onClick={handleClick}
      className={cn(
        "relative inline-flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 py-2 font-medium",
        "transition-[background-color,scale] duration-150 ease-out-strong active:scale-[0.97]",
        "disabled:cursor-wait focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
        className,
      )}
    >
      {/* Label stays in flow so the button never changes width */}
      <motion.span
        className="inline-flex items-center gap-2"
        initial={false}
        animate={status === "idle" ? shown : hidden}
        transition={transition}
      >
        {children}
      </motion.span>

      <AnimatePresence initial={false}>
        {status !== "idle" && (
          <motion.span
            key={status}
            aria-hidden
            className="absolute inset-0 flex items-center justify-center"
            initial={hidden}
            animate={shown}
            exit={hidden}
            transition={transition}
          >
            {status === "loading" && <Loader />}
            {status === "success" && <CheckIcon />}
            {status === "error" && <ErrorIcon />}
          </motion.span>
        )}
      </AnimatePresence>

      <span className="sr-only" aria-live="polite">
        {STATUS_LABEL[status]}
      </span>
    </button>
  );
};

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// CSS spin runs off the main thread, so it stays smooth while the fetch runs.
const Loader = () => (
  <svg {...iconProps} className="animate-spin [animation-duration:600ms]">
    <path d="M12 3a9 9 0 1 0 9 9" />
  </svg>
);

const CheckIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 12l2 2l4 -4" />
  </svg>
);

const ErrorIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 10l4 4m0 -4l-4 4" />
  </svg>
);
