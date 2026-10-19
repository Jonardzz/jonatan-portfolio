import {
  SiClaude,
  SiCplusplus,
  SiCursor,
  SiGit,
  SiGnubash,
  SiHuggingface,
  SiJavascript,
  SiNextdotjs,
  SiNvidia,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  TbBug,
  TbChartDots3,
  TbChecklist,
  TbCode,
  TbFileDescription,
  TbLanguage,
  TbSql,
  TbTestPipe,
} from "react-icons/tb";
import type { IconType } from "react-icons";
import { skillCategories, skills, spokenLanguages, type Skill, type SkillCategory } from "./content";

// Each icon sits on a see-through tile. Tech logos (Simple Icons) keep their
// brand color (black marks and dark blues lifted so they read on the glass);
// skills without a logo use Tabler in white.
const NAVY = "#ffffff";

const ICONS: Record<string, { Icon: IconType; color: string }> = {
  python: { Icon: SiPython, color: "#5B9BD5" },
  cpp: { Icon: SiCplusplus, color: "#659AD2" },
  ts: { Icon: SiTypescript, color: "#5A9CEB" },
  js: { Icon: SiJavascript, color: "#E5B800" },
  bash: { Icon: SiGnubash, color: "#6CC24A" },
  database: { Icon: TbSql, color: NAVY },
  react: { Icon: SiReact, color: "#0EA5C6" },
  next: { Icon: SiNextdotjs, color: "#ffffff" },
  vercel: { Icon: SiVercel, color: "#ffffff" },
  tf: { Icon: SiTensorflow, color: "#FF6F00" },
  search: { Icon: SiHuggingface, color: "#E8A400" },
  chart: { Icon: TbChartDots3, color: NAVY },
  nvidia: { Icon: SiNvidia, color: "#76B900" },
  claude: { Icon: SiClaude, color: "#D97757" },
  cursorapp: { Icon: SiCursor, color: "#ffffff" },
  gitlogo: { Icon: SiGit, color: "#F05032" },
  bug: { Icon: TbBug, color: NAVY },
  check: { Icon: TbTestPipe, color: NAVY },
  doc: { Icon: TbFileDescription, color: NAVY },
  clipboard: { Icon: TbChecklist, color: NAVY },
};

const ACCENT: Record<SkillCategory, string> = {
  languages: "#8fb0ff",
  webai: "#c4b2ff",
  practices: "#e4e4e7",
};

function Group({
  title,
  accent,
  className,
  listClassName,
  children,
}: {
  title: string;
  accent: string;
  className?: string;
  listClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-2xl border border-white/12 bg-white/[0.05] p-3.5 sm:p-5 ${className ?? ""}`}>
      <h3 className="flex items-center gap-2 text-sm font-medium text-white">
        <span aria-hidden className="size-1.5 rounded-full" style={{ background: accent }} />
        {title}
      </h3>
      <ul className={`mt-3 grid grid-cols-2 gap-x-2 gap-y-1 sm:mt-4 sm:grid-cols-1 sm:gap-1 ${listClassName ?? ""}`}>{children}</ul>
    </div>
  );
}

function Row({ icon, name, detail }: { icon: { Icon: IconType; color: string }; name: string; detail?: string }) {
  const { Icon, color } = icon;
  return (
    <li className="flex min-w-0 items-center gap-2 rounded-xl px-1 py-1.5 transition-colors duration-150 sm:gap-3 sm:px-2 sm:py-2 [@media(hover:hover)]:hover:bg-white/[0.06]">
      <span
        aria-hidden
        className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.06] sm:size-10 sm:rounded-[11px]"
        style={{ color }}
      >
        <Icon className="size-[22px]" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-[13.5px] leading-tight font-medium text-white [overflow-wrap:anywhere] sm:text-[15px]">{name}</span>
        {detail && <span className="mt-0.5 hidden text-[13px] leading-snug text-white/60 sm:block">{detail}</span>}
      </span>
    </li>
  );
}

function rows(category: SkillCategory) {
  return skills
    .filter((s: Skill) => s.category === category)
    .map((s) => (
      <Row key={s.name} icon={ICONS[s.icon] ?? { Icon: TbCode, color: NAVY }} name={s.name} detail={s.note ?? s.level} />
    ));
}

/** Technical skills grouped like the resume, each with an icon and where it was used. */
export function SkillsGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Group title={skillCategories.languages} accent={ACCENT.languages}>
        {rows("languages")}
      </Group>
      <Group
        title={skillCategories.webai}
        accent={ACCENT.webai}
        className="lg:col-span-2"
        listClassName="sm:grid-cols-2"
      >
        {rows("webai")}
      </Group>
      <Group
        title={skillCategories.practices}
        accent={ACCENT.practices}
        className="lg:col-span-2"
        listClassName="sm:grid-cols-2"
      >
        {rows("practices")}
      </Group>
      <Group title="Spoken languages" accent="#86efac">
        {spokenLanguages.map((l) => (
          <Row key={l.language} icon={{ Icon: TbLanguage, color: NAVY }} name={l.language} detail={l.level} />
        ))}
      </Group>
    </div>
  );
}
