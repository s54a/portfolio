"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Eye,
  ExternalLink,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.4 },
  }),
};

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.classList.toggle("dark", initial === "dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  };

  return { theme, toggleTheme, mounted };
}

/* ---------- DATA CONFIG ---------- */

type Project = {
  title: string;
  subtitle?: string;
  bullets: string[];
  tech?: string[];
  live?: string;
  github?: string;
  isOss?: boolean;
};

const mainProjects: Project[] = [
  {
    title: "Enterprise CRM & Billing Systems (MERN)",
    subtitle: "Business Culture, Century Group, Krishnashray",
    bullets: [
      "Role-based access, lead management, billing, and reporting dashboards.",
      "Robust data models and API design for extensibility and maintainability.",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Vaish Mahasammelan MP Website",
    subtitle: "Large-scale membership platform",
    bullets: [
      "Complex multi-section forms (40+ fields) with validation.",
      "Paid / free registrations, OTP verification, automated email notifications.",
      "Jobs and matrimony modules with printing management.",
    ],
    tech: ["MERN", "OTP", "Email", "MongoDB"],
  },
  {
    title: "Commercial Business Websites (Next.js)",
    subtitle:
      "Century Group, Inspire Salon, Business Culture, Oswal Udyog, Nirmal Glasstech",
    bullets: [
      "SEO-friendly, responsive marketing sites using Next.js & Tailwind.",
      "Reusable UI components for rapid delivery across multiple brands.",
    ],
    tech: ["Next.js", "Tailwind", "SSR"],
  },
  {
    title: "Raeeth E-commerce Platform (WIP)",
    subtitle: "Full-stack eCommerce system",
    bullets: [
      "Product management, orders, and admin panel with role-based access.",
      "Built with Next.js, Prisma, and PostgreSQL for strong typing and reliability.",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL"],
  },
];

const openSourceProjects: Project[] = [
  {
    title: "@s54a/init",
    subtitle: "Project initializer with GitHub cloning and templating.",
    bullets: ["750+ downloads on npm."],
    isOss: true,
    github: "https://github.com/s54a/init", // change to real repo
    live: "https://www.npmjs.com/package/@s54a/init",
  },
  {
    title: "@s54a/cliclock",
    subtitle: "CLI clock, timer, and stopwatch with notifications.",
    bullets: ["160+ downloads on npm."],
    isOss: true,
    github: "https://github.com/s54a/cliclock", // change to real repo
    live: "https://www.npmjs.com/package/@s54a/cliclock",
  },
  {
    title: "Global Time Converter",
    subtitle:
      "DST-aware time zone coordination app with analog clocks and dynamic hour adjustments.",
    bullets: [],
    isOss: true,
    github: "https://github.com/s54a/global-time-converter", // example
    live: "https://your-live-link.com", // example
  },
  {
    title: "MultiSearch",
    subtitle:
      "Web app enabling one-click search across 100+ websites from a unified input.",
    bullets: [],
    isOss: true,
    github: "https://github.com/s54a/multisearch", // example
    live: "https://your-live-link.com", // example
  },
];

/* ---------- PAGE ---------- */

export default function HomePage() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [views, setViews] = useState<number | null>(null);

  // useEffect(() => {
  //   fetch("/api/view-count")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (typeof data.count === "number") setViews(data.count);
  //     })
  //     .catch(() => {});
  // }, []);

  return (
    <main className="min-h-screen bg-slate-50 bg-linear-to-b from-slate-50 via-slate-100 to-slate-50 text-slate-900 dark:bg-slate-950 dark:from-slate-900 dark:via-slate-950 dark:to-black dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        {/* Top Bar */}
        <header className="mb-10 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs tracking-[0.25em] text-slate-500 uppercase dark:text-slate-400">
              Portfolio
            </span>
            <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Sooraj Gupta
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* View counter */}
            {/* <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-400">
              <Eye className="h-3.5 w-3.5" />
              <span>{views !== null ? `${views} views` : "…"}</span>
            </div> */}

            {mounted && (
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-2.5 py-1.5 text-xs font-medium text-slate-800 shadow-sm transition hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-800/80"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
        </header>

        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
          className="mb-10 md:mb-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-50">
                Full Stack Engineer
              </h2>
              <p className="mb-3 text-base text-slate-700 md:text-lg dark:text-slate-300">
                Next.js • TypeScript • MERN
              </p>
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  Jabalpur, India
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-100/60 px-2.5 py-1 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                  Open to Remote &amp; Relocation
                </span>
              </div>
              <p className="max-w-xl text-sm text-slate-700 md:text-base dark:text-slate-300">
                I build production-grade web applications with clean, scalable
                architectures—from CRM and billing platforms to membership
                systems and e-commerce, with a focus on performance, DX, and
                maintainability.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <a
                  href="mailto:soorajgupta00@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-sky-700"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a
                  href="tel:+918889283873"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <a
                  href="https://github.com/s54a"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-slate-800 transition hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <Github className="h-3.5 w-3.5" />
                  github.com/s54a
                </a>
                <a
                  href="https://linkedin.com/in/s54a"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-slate-800 transition hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  linkedin.com/in/s54a
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Layout */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] md:gap-10">
          {/* Left column */}
          <div className="space-y-8 md:space-y-10">
            {/* Experience */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeInUp}
              className="border-l border-slate-200 pl-5 dark:border-slate-800"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase dark:text-slate-400">
                Experience
              </h3>

              <div className="relative">
                <div className="absolute top-1.5 -left-6 h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(56,189,248,0.25)]" />
                <div className="mb-2 flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      Full Stack Engineer
                    </p>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                      Business Culture
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Jabalpur, India · Dec 2024 – Present
                  </p>
                </div>

                <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                  <li>
                    Built and maintained production-grade CRM and billing
                    systems using the MERN stack.
                  </li>
                  <li>
                    Designed and integrated secure Razorpay payment workflows
                    for business-critical transactions.
                  </li>
                  <li>
                    Implemented OTP auth, automated email notifications, and
                    role-based access control (RBAC).
                  </li>
                  <li>
                    Migrated 8,000+ legacy SQL records to MongoDB with schema
                    validation and zero downtime.
                  </li>
                  <li>
                    Converted 44,800+ DevLys legacy member records to Unicode
                    and migrated cleaned data into MongoDB.
                  </li>
                  <li>
                    Owned features end-to-end, independently shipping and
                    iterating as business needs evolved.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeInUp}
            >
              <h3 className="mb-4 text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase dark:text-slate-400">
                Selected Projects
              </h3>

              <div className="space-y-4">
                {mainProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </motion.section>

            {/* Open Source */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeInUp}
            >
              <h3 className="mb-4 text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase dark:text-slate-400">
                Open Source
              </h3>
              <div className="space-y-3">
                {openSourceProjects.map((project) => (
                  <OpenSourceCard key={project.title} project={project} />
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right column (sidebar) */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeInUp}
            className="space-y-8 md:space-y-10"
          >
            {/* Skills */}
            <section>
              <h3 className="mb-4 text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase dark:text-slate-400">
                Technical Skills
              </h3>
              <SkillGroup
                title="Languages"
                items={["TypeScript", "JavaScript", "HTML5", "CSS3"]}
              />
              <SkillGroup
                title="Frameworks & Libraries"
                items={[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MERN",
                  "Tailwind",
                  "React Query",
                ]}
              />
              <SkillGroup
                title="Databases & ORM"
                items={["MongoDB", "PostgreSQL", "Prisma", "Mongoose"]}
              />
              <SkillGroup
                title="Dev Tools"
                items={[
                  "Git",
                  "GitHub",
                  "Bash",
                  "Vite",
                  "Webpack",
                  "npm",
                  "pnpm",
                  "Bun",
                ]}
              />
              <SkillGroup
                title="Architecture & Practices"
                items={[
                  "Monorepos",
                  "REST APIs",
                  "Server-Side Rendering",
                  "Data Migration",
                  "Cloudinary Integration",
                  "Auth & RBAC",
                  "Performance Optimization",
                ]}
              />
            </section>

            {/* Education */}
            <section>
              <h3 className="mb-4 text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase dark:text-slate-400">
                Education
              </h3>
              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    Pt. Lajja Shankar Jha Government Model Higher Secondary
                    School of Excellence
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Jabalpur, India
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between gap-4">
                    <span>Secondary School (X)</span>
                    <span className="text-slate-600 dark:text-slate-400">
                      81% · 2019
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Senior Secondary (XII) PCM</span>
                    <span className="text-slate-600 dark:text-slate-400">
                      85.4% · 2021
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </motion.aside>
        </div>

        <footer className="mt-10 flex flex-wrap justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          <span>© {new Date().getFullYear()} Sooraj Gupta</span>
          <span>
            Built with Next.js · TypeScript · Tailwind · Framer Motion
          </span>
        </footer>
      </div>
    </main>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition hover:border-sky-500/60 hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:bg-slate-900/70">
      <div className="mb-2 flex flex-col gap-1">
        <div className="flex justify-between gap-2">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {project.title}
          </h4>
        </div>
        {project.subtitle && (
          <p className="text-xs leading-snug text-slate-600 dark:text-slate-400">
            {project.subtitle}
          </p>
        )}
      </div>
      {project.bullets.length > 0 && (
        <ul className="mb-2 list-inside list-disc space-y-1 text-xs text-slate-700 dark:text-slate-300">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {project.tech && project.tech.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] tracking-wide text-slate-700 uppercase dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}
      {/* Live link for non-OSS if present */}
      {!project.isOss && project.live && (
        <div className="mt-2">
          <a
            href={project.live}
            target="_blank"
            className="inline-flex items-center gap-1 text-xs text-sky-700 hover:underline dark:text-sky-400"
          >
            <ExternalLink className="h-3 w-3" />
            Live
          </a>
        </div>
      )}
    </div>
  );
}

function OpenSourceCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-3 transition hover:border-sky-500/60 hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:bg-slate-900/70">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
            {project.title}
          </p>
          {project.subtitle && (
            <p className="text-xs text-slate-700 dark:text-slate-300">
              {project.subtitle}
            </p>
          )}
          {project.bullets.length > 0 && (
            <ul className="mt-1 list-inside list-disc space-y-0.5 text-[11px] text-slate-700 dark:text-slate-300">
              {project.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
        {/* Icons only if links exist */}
        <div className="flex flex-col items-end gap-1 text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

type SkillGroupProps = {
  title: string;
  items: string[];
};

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="mb-3">
      <p className="mb-1 text-xs font-semibold text-slate-800 dark:text-slate-300">
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] text-slate-800 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
