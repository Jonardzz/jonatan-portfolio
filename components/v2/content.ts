// All copy for the home page lives here, sourced from the 2026 resume.

export const links = {
  email: "j.rodriguez0721@icloud.com",
  github: "https://github.com/Jonardzz",
  linkedin: "https://www.linkedin.com/in/jonatan-rodriguez-9872213ba/",
  resume: "/Jonatan_Rodriguez_Resume.pdf",
  source: "https://github.com/Jonardzz/jonatan-portfolio",
};

export const about = [
  "Hello! I'm Jonatan Rodriguez, a recent computer science graduate who loves building software. I continuously drive myself to learn, grow, and create.",
  "I mostly work in Python, TypeScript, and C++. I've built a website for a client with Next.js, trained a TensorFlow model on 400,000+ health records, and made a search tool that sorts through 210,762 Amazon reviews. I'm looking for an entry-level software, AI, or IT role where I can keep learning and building.",
];


// ---------- Skills ----------

export type SkillCategory = "languages" | "webai" | "practices";

export const skillCategories: Record<SkillCategory, string> = {
  languages: "Programming languages",
  webai: "Web & AI",
  practices: "Practices",
};

export type Skill = {
  name: string;
  category: SkillCategory;
  /** Where it was used. Shown in the tooltip. */
  note?: string;
  /** Optional proficiency line for the tooltip. */
  level?: string;
  /** Icon key, resolved in skills-grid.tsx. */
  icon: string;
};

export const skills: Skill[] = [
  { name: "Python", category: "languages", icon: "python", note: "Amazon Opinion Search Engine, Diabetes Risk model" },
  { name: "C/C++", category: "languages", icon: "cpp", note: "CUDA-Based Sudoku Solver" },
  { name: "TypeScript", category: "languages", icon: "ts", note: "Tekkrew website, this portfolio" },
  { name: "JavaScript", category: "languages", icon: "js" },
  { name: "Bash", category: "languages", icon: "bash" },
  { name: "SQL", category: "languages", icon: "database", level: "Fundamentals" },
  { name: "React", category: "webai", icon: "react", note: "Tekkrew website, this portfolio" },
  { name: "Next.js", category: "webai", icon: "next", note: "Tekkrew website, this portfolio" },
  { name: "Vercel", category: "webai", icon: "vercel", note: "Deploys the Tekkrew website" },
  { name: "TensorFlow", category: "webai", icon: "tf", note: "Diabetes Risk model, 400,000+ records" },
  { name: "SBERT", category: "webai", icon: "search", note: "Semantic search over 210,762 reviews" },
  { name: "Matplotlib", category: "webai", icon: "chart", note: "Model performance charts" },
  { name: "CUDA", category: "webai", icon: "nvidia", note: "Parallel Sudoku solver" },
  { name: "Claude Code", category: "webai", icon: "claude", note: "Daily coding assistant" },
  { name: "Cursor", category: "webai", icon: "cursorapp", note: "Daily coding assistant" },
  { name: "Git", category: "practices", icon: "gitlogo" },
  { name: "Debugging", category: "practices", icon: "bug", note: "Performance bottlenecks in the CUDA solver" },
  { name: "Testing and Validation", category: "practices", icon: "check", note: "Cross-browser checks, batch validation" },
  { name: "Technical Documentation", category: "practices", icon: "doc", note: "Formal report for the search engine" },
  { name: "Requirements Gathering", category: "practices", icon: "clipboard", note: "Worked directly with the Tekkrew client" },
];

export const spokenLanguages = [
  { language: "English", level: "Full professional proficiency" },
  { language: "Spanish", level: "Native or bilingual" },
];

// ---------- Projects ----------

export type Project = {
  title: string;
  year: string;
  stack: string[];
  team?: string;
  bullets: string[];
  image: string;
  alt: string;
  accent: string;
  href?: string;
};

const BLUE = "#5b8cff"; // web & systems
const VIOLET = "#a585ff"; // AI & data

export const projects: Project[] = [
  {
    title: "Tekkrew Website",
    year: "2026",
    stack: ["Next.js", "TypeScript", "React", "Vercel"],
    team: "Client project",
    bullets: [
      "Built and deployed the client's website end to end on Vercel.",
      "Gathered requirements directly from the client and turned them into features.",
      "Verified behavior across browsers and devices before every production deploy.",
    ],
    image: "/gifs/G5.gif",
    alt: "Illustrated paint tin holding brushes, surrounded by paint tubes",
    accent: BLUE,
  },
  {
    title: "Amazon Opinion Search Engine",
    year: "2025",
    stack: ["Python", "SBERT"],
    bullets: [
      "Semantic search with SBERT embeddings and cosine similarity over 210,762 reviews.",
      "Compared Boolean, rating-filter, and SBERT retrieval across 5 queries, measuring precision against a baseline.",
      "Documented architecture, methodology, and results in a formal technical report.",
    ],
    image: "/gifs/G6.webp",
    alt: "Illustrated city street crowded with vintage cars and trams",
    accent: VIOLET,
    href: "https://github.com/Jonardzz/NLP-Project",
  },
  {
    title: "Diabetes Risk Predictive Modeling",
    year: "2026",
    stack: ["Python", "TensorFlow", "Matplotlib"],
    team: "Team project",
    bullets: [
      "Trained a TensorFlow model on 400,000+ anonymized health records.",
      "Validated accuracy, recall, and F1 against benchmark thresholds, retraining whenever results fell short.",
      "Charted model performance against the benchmarks in Matplotlib.",
    ],
    image: "/gifs/G4.gif",
    alt: "Illustrated airport departures board flipping through destinations",
    accent: VIOLET,
  },
  {
    title: "CUDA-Based Sudoku Solver",
    year: "2026",
    stack: ["C++", "CUDA"],
    team: "Team of 3",
    bullets: [
      "Learned CUDA and parallel computing to build the solver on a C++ base.",
      "Found performance bottlenecks through structured testing and code review.",
      "Validated correctness on batches from 1,000 to 100,000 puzzles against expected results.",
    ],
    image: "/gifs/G3.gif",
    alt: "Illustrated commuter train car with passengers reading",
    accent: BLUE,
  },
];

// ---------- Education & certifications ----------

export const education = [
  {
    school: "University of Houston",
    degree: "B.S. Computer Science",
    detail: "Dean's List, Spring 2026",
    coursework: ["Data Structures", "Operating Systems", "Cybersecurity", "Statistics", "Linear Algebra"],
    date: "Aug 2024 – May 2026",
    logo: "/UH.png",
    href: "https://www.uh.edu/",
  },
  {
    school: "Houston Community College",
    degree: "A.S. Computer Science",
    date: "Aug 2022 – May 2024",
    logo: "/HCC.png",
    href: "https://www.hccs.edu/",
  },
];

export const certifications = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic, UCC & Ringling",
    date: "Jun 2026",
    href: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "Jun 2026",
    href: "https://anthropic.skilljar.com/claude-101",
  },
  {
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "Amazon Web Services",
    date: "May 2026",
    href: "https://www.coursera.org/learn/fundamentals-of-machine-learning-and-artificial-intelligence",
  },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
