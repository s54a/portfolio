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
      // system preference
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

export default function HomePage() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Call your view-count API (implementation in section 3)
    fetch("/api/view-count")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === "number") setViews(data.count);
      })
      .catch(() => {});
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 bg-linear-to-b from-slate-900 via-slate-950 to-black text-slate-100 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        {/* <div className="container mx-auto px-4 py-8 md:py-12"> */}
        {/* Top Bar */}
        <header className="mb-10 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs tracking-[0.25em] text-slate-400 uppercase">
              Portfolio
            </span>
            <h1 className="text-xl font-semibold text-slate-100">
              Sooraj Gupta
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* View counter display */}
            <div className="flex items-center gap-1.5 rounded-full border border-slate-800/80 px-2.5 py-1 text-xs text-slate-400">
              <Eye className="h-3.5 w-3.5" />
              <span>{views !== null ? `${views} views` : "…"}</span>
            </div>

            {mounted && (
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/60 px-2.5 py-1.5 text-xs font-medium text-slate-200 shadow-sm transition hover:bg-slate-800/80"
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
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
                Full Stack Engineer
              </h2>
              <p className="mb-3 text-base text-slate-300 md:text-lg">
                Next.js • TypeScript • MERN
              </p>
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  Jabalpur, India
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-300">
                  Open to Remote &amp; Relocation
                </span>
              </div>
              <p className="max-w-xl text-sm text-slate-300 md:text-base">
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
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-sky-600"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a
                  href="tel:+918889283873"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <a
                  href="https://github.com/s54a"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 px-3 py-1.5 text-slate-300 transition hover:bg-slate-900/80"
                >
                  <Github className="h-3.5 w-3.5" />
                  github.com/s54a
                </a>
                <a
                  href="https://linkedin.com/in/s54a"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 px-3 py-1.5 text-slate-300 transition hover:bg-slate-900/80"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  linkedin.com/in/s54a
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Layout: main + sidebar */}
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
              className="border-l border-slate-800 pl-5"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-[0.22em] text-slate-400 uppercase">
                Experience
              </h3>

              <div className="relative">
                <div className="absolute top-1.5 -left-6 h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(56,189,248,0.25)]" />
                <div className="mb-2 flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-base font-semibold text-slate-100">
                      Full Stack Engineer
                    </p>
                    <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-300">
                      Business Culture
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Jabalpur, India · Dec 2024 – Present
                  </p>
                </div>

                <ul className="space-y-1.5 text-sm text-slate-300">
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
              <h3 className="mb-4 text-sm font-semibold tracking-[0.22em] text-slate-400 uppercase">
                Selected Projects
              </h3>

              <div className="space-y-4">
                <ProjectCard
                  title="Enterprise CRM & Billing Systems (MERN)"
                  subtitle="Business Culture, Century Group, Krishnashray"
                  bullets={[
                    "Role-based access, lead management, billing, and reporting dashboards.",
                    "Robust data models and API design for extensibility and maintainability.",
                  ]}
                  tech={["MongoDB", "Express", "React", "Node.js"]}
                />
                <ProjectCard
                  title="Vaish Mahasammelan MP Website"
                  subtitle="Large-scale membership platform"
                  bullets={[
                    "Complex multi-section forms (40+ fields) with validation.",
                    "Paid / free registrations, OTP verification, automated email notifications.",
                    "Jobs and matrimony modules with printing management.",
                  ]}
                  tech={["MERN", "OTP", "Email", "MongoDB"]}
                />
                <ProjectCard
                  title="Commercial Business Websites (Next.js)"
                  subtitle="Century Group, Inspire Salon, Business Culture, Oswal Udyog, Nirmal Glasstech"
                  bullets={[
                    "SEO-friendly, responsive marketing sites using Next.js & Tailwind.",
                    "Reusable UI components for rapid delivery across multiple brands.",
                  ]}
                  tech={["Next.js", "Tailwind", "SSR"]}
                />
                <ProjectCard
                  title="Raeeth E-commerce Platform (WIP)"
                  subtitle="Full-stack eCommerce system"
                  bullets={[
                    "Product management, orders, and admin panel with role-based access.",
                    "Built with Next.js, Prisma, and PostgreSQL for strong typing and reliability.",
                  ]}
                  tech={["Next.js", "Prisma", "PostgreSQL"]}
                />
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
              <h3 className="mb-4 text-sm font-semibold tracking-[0.22em] text-slate-400 uppercase">
                Open Source
              </h3>
              <div className="space-y-3">
                <OpenSourceItem
                  name="@s54a/init"
                  description="Project initializer with GitHub cloning and templating."
                  stats="750+ downloads"
                  link="https://www.npmjs.com/package/@s54a/init"
                />
                <OpenSourceItem
                  name="@s54a/cliclock"
                  description="CLI clock, timer, and stopwatch with notifications."
                  stats="160+ downloads"
                  link="https://www.npmjs.com/package/@s54a/cliclock"
                />
                <OpenSourceItem
                  name="Global Time Converter"
                  description="DST-aware time zone coordination app with analog clocks and dynamic hour adjustments."
                  link="#"
                />
                <OpenSourceItem
                  name="MultiSearch"
                  description="Web app enabling one-click search across 100+ websites from a unified input interface."
                  link="#"
                />
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
              <h3 className="mb-4 text-sm font-semibold tracking-[0.22em] text-slate-400 uppercase">
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
              <h3 className="mb-4 text-sm font-semibold tracking-[0.22em] text-slate-400 uppercase">
                Education
              </h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <p className="font-medium text-slate-100">
                    Pt. Lajja Shankar Jha Government Model Higher Secondary
                    School of Excellence
                  </p>
                  <p className="text-xs text-slate-400">Jabalpur, India</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between gap-4">
                    <span>Secondary School (X)</span>
                    <span className="text-slate-400">81% · 2019</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Senior Secondary (XII) PCM</span>
                    <span className="text-slate-400">85.4% · 2021</span>
                  </div>
                </div>
              </div>
            </section>
          </motion.aside>
        </div>

        <footer className="mt-10 flex flex-wrap justify-between gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Sooraj Gupta</span>
          <span>
            Built with Next.js · TypeScript · Tailwind · Framer Motion
          </span>
        </footer>
      </div>
    </main>
  );
}

// Reusable components

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  bullets: string[];
  tech?: string[];
};

function ProjectCard({ title, subtitle, bullets, tech }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 shadow-sm transition hover:border-sky-500/60 hover:bg-slate-900/70">
      <div className="mb-2 flex flex-col gap-1">
        <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
        {subtitle && (
          <p className="text-xs leading-snug text-slate-400">{subtitle}</p>
        )}
      </div>
      <ul className="mb-2 list-inside list-disc space-y-1 text-xs text-slate-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {tech && tech.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-700/80 px-2 py-0.5 text-[10px] tracking-wide text-slate-300 uppercase"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

type OpenSourceItemProps = {
  name: string;
  description: string;
  stats?: string;
  link?: string;
};

function OpenSourceItem({
  name,
  description,
  stats,
  link,
}: OpenSourceItemProps) {
  const content = (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-slate-100">{name}</p>
        {stats && (
          <span className="text-[10px] whitespace-nowrap text-slate-400">
            {stats}
          </span>
        )}
      </div>
      <p className="text-xs text-slate-300">{description}</p>
    </div>
  );

  return (
    <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3 transition hover:border-sky-500/60 hover:bg-slate-900/70">
      {link ? (
        <a href={link} target="_blank" className="block">
          {content}
        </a>
      ) : (
        content
      )}
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
      <p className="mb-1 text-xs font-semibold text-slate-300">{title}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-800 bg-slate-900/70 px-2 py-0.5 text-[11px] text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
