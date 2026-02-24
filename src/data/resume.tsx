import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sooraj Gupta",
  initials: "SG",
  url: "https://s54a.in",
  location: "Jabalpur, India",
  locationLink: "https://www.google.com/maps/place/jabalpur",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    { name: "Next.js" },
    { name: "Typescript" },
    { name: "React" },
    // { name: "Javascript" },
    // { name: "Python" },
    // { name: "Go" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "Mongoose" },
    { name: "MongoDB" },
    { name: "Prisma" },
    { name: "Postgres" },
    { name: "Tailwind CSS" },
    { name: "Git" },
    { name: "Bun" },
    { name: "Bash" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dev@s54a.in",
    tel: "+91 88892 83873",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/github-s54a",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/linkedin-s54a",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/x-s54a",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/youtube-s54a",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Business Culture",
      href: "https://businessculture.co.in/",
      badges: [],
      location: "Jabalpur, India",
      title: "Full Stack Engineer",
      logoUrl: "",
      start: "Dec 2024",
      end: "Present",
      description:
        "Building and maintaining full-stack web applications using Next.js, TypeScript, Node.js, and MongoDB/PostgreSQL. Designing REST APIs, implementing authentication & authorization, and optimizing performance across frontend and backend systems.",
    },
  ],
  education: [
    {
      school:
        "Pt. Lajja Shankar Jha Government Model Higher Secondary School of Excellence",
      href: "https://modelschooljabalpur.in/",
      degree: "Class XII (PCM)",
      logoUrl:
        "https://res.cloudinary.com/drp32fxif/image/upload/v1771924315/model-school-logo_dp4zwr.avif",
      start: "2020",
      end: "2021",
      description: "85.4%",
      location: "Jabalpur, India",
    },
    {
      school:
        "Pt. Lajja Shankar Jha Government Model Higher Secondary School of Excellence",
      href: "https://modelschooljabalpur.in/",
      degree: "Class X",
      logoUrl:
        "https://res.cloudinary.com/drp32fxif/image/upload/v1771924315/model-school-logo_dp4zwr.avif",
      start: "2018",
      end: "2019",
      description: "81%",
      location: "Jabalpur, India",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
