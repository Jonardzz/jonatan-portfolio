"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/stateful-button";
import { links } from "./content";

// Underlined fields, as in the reference design: tinted well, bright bottom rule.
const field =
  "w-full rounded-t-md border-0 border-b-2 border-white/70 bg-[#06102e]/45 px-3 py-2.5 text-[16px] text-white placeholder:text-white/35 transition-[border-color,background-color] duration-150 ease-out focus:border-white focus:bg-[#06102e]/60 focus:outline-none";

const label = "mb-2 block text-[17px] font-medium tracking-[-0.01em] text-white";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<{ tone: "ok" | "error"; text: string } | null>(null);

  const send = async () => {
    const form = formRef.current;
    if (!form) throw new Error("Form missing");
    setMessage(null);
    if (!form.reportValidity()) throw new Error("Validation failed");

    try {
      const res = await fetch("https://formspree.io/f/mojrblqo", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setMessage({ tone: "ok", text: "Message sent. Thanks for reaching out." });
    } catch (err) {
      setMessage({
        tone: "error",
        text: `Your message didn't send. Try again, or email ${links.email} directly.`,
      });
      throw err;
    }
  };

  return (
    <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <label className="block">
        <span className={label}>What&apos;s your name?</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className={label}>What&apos;s your email?</span>
        <input type="email" name="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className={label}>Let&apos;s hear your message!</span>
        <textarea name="message" required rows={2} className={`${field} resize-y`} />
      </label>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <Button
          type="button"
          onClick={send}
          className="w-full rounded-lg bg-white px-8 py-3 text-[15px] font-semibold text-zinc-950 hover:bg-zinc-100 sm:w-auto"
        >
          Submit!
        </Button>
        <p role="status" className={`text-sm ${message?.tone === "error" ? "text-rose-200" : "text-white/75"}`}>
          {message?.text}
        </p>
      </div>
    </form>
  );
}
