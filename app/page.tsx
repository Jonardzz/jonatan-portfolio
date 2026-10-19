import type { Metadata } from "next";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbCertificate,
  TbFileCv,
  TbMail,
  TbSchool,
} from "react-icons/tb";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import Grainient from "@/components/v2/grainient";
import ChromaGrid from "@/components/v2/chroma-grid";
import { AttentionTagline } from "@/components/v2/attention-tagline";
import { SkillsGrid } from "@/components/v2/skills-grid";
import { ContactForm } from "@/components/v2/contact-form";
import { Dock } from "@/components/v2/section-nav";
import { HeaderMenu } from "@/components/v2/header-menu";
import { DrawnName } from "@/components/v2/drawn-name";
import { about, certifications, education, links, projects } from "@/components/v2/content";

export const metadata: Metadata = {
  title: "Jonatan Rodriguez, Software Engineer",
  description:
    "Software engineer bridging full stack development, NLP, and AI. Computer Science graduate from the University of Houston.",
};

// Design system: every section is tinted glass over the Grainient sky, so the
// gradient flows through the whole page instead of stopping at the hero.

const shadow = "[text-shadow:0_1px_2px_rgba(9,9,11,0.35),0_2px_24px_rgba(9,9,11,0.45)]";

/** Navy tint pulled from the gradient's deepest stop, plus a light blur. */
const glass =
  "rounded-[28px] border border-white/15 bg-[#0b1a4a]/66 md:bg-[#0b1a4a]/58 md:backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_60px_-30px_rgba(5,12,45,0.55)]";

const link = cn(
  "rounded-sm text-white/90 underline-offset-4 transition-colors duration-150 hover:text-white hover:underline",
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
);

const darkPill =
  "rounded-full border border-white/25 bg-[#0b1a4a]/45 px-4 py-1.5 font-medium text-white [text-shadow:none] transition-[background-color,border-color,scale] duration-150 ease-out-strong hover:border-white/40 hover:bg-[#0b1a4a]/65 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const pressable =
  "transition-[background-color,border-color,scale] duration-150 ease-out-strong active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const h2 = "text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] text-white sm:text-[2rem]";
const subhead = "text-sm font-medium text-white/70";

function Panel({
  id,
  title,
  intro,
  className,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-6 p-5 sm:p-9", glass, className)}>
      <h2 id={`${id}-title`} className={h2}>
        {title}
      </h2>
      {intro && <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-white/70">{intro}</p>}
      <div className="mt-7">{children}</div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-white/12 px-2.5 py-1 text-xs text-zinc-300">{children}</span>;
}

/** See-through icon tile, matching the Skills grid. */
function IconBadge({ icon: Icon }: { icon: IconType }) {
  return (
    <span
      aria-hidden
      className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-white"
    >
      <Icon className="size-[22px]" />
    </span>
  );
}


/** Icon links in the contact section: GitHub, LinkedIn, Resume (as on the reference site), plus Email. */
const socials = [
  { label: "GitHub", href: links.github, Icon: TbBrandGithub, external: true },
  { label: "LinkedIn", href: links.linkedin, Icon: TbBrandLinkedin, external: true },
  { label: "Resume (PDF)", href: links.resume, Icon: TbFileCv, external: true },
  { label: `Email ${links.email}`, href: `mailto:${links.email}`, Icon: TbMail, external: false },
];

// ---------- Page ----------

export default function Portfolio() {
  return (
    <div className="relative min-h-dvh overflow-x-clip bg-zinc-950 font-sans text-zinc-100 antialiased [--blue:#5b8cff] [--violet:#a585ff] selection:bg-[#cbd9fc]! selection:text-[#0b1a4a]!">
      {/* React Bits Grainient, configured exactly as supplied, fixed behind everything */}
      <div aria-hidden className="fixed inset-0 z-0">
        <Grainient
          colors={["#cbd9fc", "#639bff", "#14346f", "#3e7ef5"]}
          angle={216}
          flow={0.8}
          silk={0.35}
          grainAmount={0.08}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-4 sm:px-6">
        {/* ---------- Hero ---------- */}
        <section className={cn("flex min-h-[100svh] flex-col pb-28", shadow)}>
          <header className="flex items-center justify-end py-5">
            <HeaderMenu />
          </header>

          <div className="flex flex-1 flex-col justify-center py-12">
            <DrawnName />
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end">
            <AttentionTagline />
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <a
                href="#contact"
                className={cn("rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-zinc-950 [text-shadow:none] hover:bg-zinc-100", pressable)}
              >
                Get in touch
              </a>
              <a href="#projects" className={cn(darkPill, "px-5 py-2.5 text-[15px]")}>
                See projects
              </a>
            </div>
          </div>
        </section>

        <main className="space-y-5 pb-10">
          {/* ---------- About ---------- */}
          <Panel id="about" title="About">
            <div>
              <p className="max-w-[44ch] text-[clamp(1.35rem,2.4vw,1.85rem)] font-medium leading-[1.32] tracking-[-0.02em] text-white">
                {about[0]}
              </p>
              {about.slice(1).map((para) => (
                <p key={para.slice(0, 24)} className="mt-5 max-w-[68ch] text-[17px] leading-relaxed text-white/75">
                  {para}
                </p>
              ))}
            </div>
          </Panel>

          {/* Projects: each image is a React Bits ChromaGrid card */}
          <Panel id="projects" title="Projects">
            <div className="space-y-10">
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  className={cn(
                    "grid items-center gap-6 md:grid-cols-[minmax(0,11fr)_minmax(0,10fr)] md:gap-8",
                    i > 0 && "border-t border-white/10 pt-10",
                  )}
                >
                  <div className={cn(i % 2 === 1 && "md:order-2")}>
                    <ChromaGrid
                      items={[{ image: p.image, alt: p.alt, title: p.title, accent: p.accent, url: p.href }]}
                      columns={1}
                      showInfo={false}
                      aspectRatio="16 / 10"
                      reveal="card"
                      radius={140}
                      cardRadius={14}
                      damping={0.2}
                      grayscale={0}
                      dim={0.14}
                    />
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-[13px] text-zinc-400">
                      <span aria-hidden className="size-1.5 rounded-full" style={{ background: p.accent }} />
                      {p.team ? `${p.team}, ${p.year}` : p.year}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.015em] text-white sm:text-[1.4rem]">{p.title}</h3>
                    <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-zinc-300">
                      {p.bullets.map((b) => (
                        <li key={b} className="relative pl-4 before:absolute before:top-[0.7em] before:left-0 before:size-1 before:rounded-full before:bg-zinc-500">
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {p.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                      {p.href && (
                        <a href={p.href} target="_blank" rel="noopener noreferrer" className={cn(link, "ml-2 text-sm")}>
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Panel>

          {/* ---------- Education & Certifications ---------- */}
          <section id="education" aria-labelledby="education-title" className={cn("scroll-mt-6 p-5 sm:p-9", glass)}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 id="education-title" className={h2}>
                Education &amp; Certifications
              </h2>
            </div>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className={subhead}>Academic Background</h3>
                <ul className="mt-4 space-y-3">
                  {education.map((ed) => (
                    <li key={ed.school} className="flex gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-4">
                      <IconBadge icon={TbSchool} />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg leading-snug font-semibold tracking-[-0.01em] text-white">
                          <a href={ed.href} target="_blank" rel="noopener noreferrer" className={cn(link, "text-white")}>
                            {ed.school}
                          </a>
                        </h4>
                        <p className="text-[15px] text-white/85">{ed.degree}</p>
                        <p className="text-sm tabular-nums text-white/60">
                          {ed.date}
                          {ed.detail && <span>, {ed.detail}</span>}
                        </p>
                        {ed.coursework && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {ed.coursework.map((c) => (
                              <span key={c} className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-xs text-white/80">
                                {c}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className={subhead}>Licenses & Certifications</h3>
                <ul className="mt-4 space-y-3">
                  {certifications.map((c) => (
                    <li
                      key={c.title}
                      className="relative flex gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-4 transition-colors duration-150 [@media(hover:hover)]:hover:bg-white/[0.1]"
                    >
                      <IconBadge icon={TbCertificate} />
                      <div className="min-w-0 flex-1">
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-medium leading-snug text-white after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-white"
                        >
                          {c.title}
                        </a>
                        <p className="mt-0.5 text-sm text-white/60">
                          {c.issuer}, <time className="tabular-nums">{c.date}</time>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ---------- Technical Skills ---------- */}
          <Panel id="skills" title="Technical Skills">
            <SkillsGrid />
          </Panel>

          {/* ---------- Contact: layout follows the supplied reference ---------- */}
          <section id="contact" aria-labelledby="contact-title" className={cn("scroll-mt-6 p-5 sm:p-10", glass)}>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
              <div>
                <h2 id="contact-title" className="text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1] tracking-[-0.04em] text-white">
                  Get in touch!
                </h2>
                <p className="mt-6 text-[clamp(1.35rem,2.4vw,1.9rem)] font-medium leading-snug tracking-[-0.02em] text-white">
                  I&apos;m available for new opportunities.
                </p>
                <p className="mt-6 max-w-[26ch] text-[clamp(1.1rem,1.8vw,1.4rem)] leading-snug text-white/85">
                  Got a question or want to get connected?
                </p>
                <p className="mt-2 text-[clamp(1.1rem,1.8vw,1.4rem)] leading-snug text-white/85">By all means shoot me a message!</p>

                <ul className="mt-9 flex flex-wrap items-center gap-3" aria-label="Elsewhere">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        aria-label={s.label}
                        title={s.label}
                        className="flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-white transition-[translate,background-color,border-color,scale] duration-200 ease-out-strong hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.12] active:scale-[0.95] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <s.Icon aria-hidden className="size-[26px]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/12 bg-white/[0.05] p-6 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className={cn("relative z-10 px-4 pt-4 pb-28 text-center text-sm text-white/85", shadow)}>
        © 2026 Jonatan Rodriguez. Built with Next.js and Tailwind CSS.{" "}
        <a href={links.source} target="_blank" rel="noopener noreferrer" className={link}>
          View source
        </a>
      </footer>

      <Dock />
    </div>
  );
}
