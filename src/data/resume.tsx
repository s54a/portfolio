import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sooraj Gupta",
  initials: "SG",
  url: "https://s54a.in",
  location: "Jabalpur, India",
  locationLink: "https://www.google.com/maps/place/jabalpur",
  description:
    "Full Stack Engineer specializing in Next.js, TypeScript, and scalable backend systems. Experienced in building production-ready web applications.",
  summary:
    "Full Stack Engineer with hands-on experience building and deploying end-to-end web applications using Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB.\n\nStrong background in API design, authentication (JWT, RBAC, OTP), payment gateway integration (Razorpay), performance optimization, and scalable system architecture. I’ve built CRM platforms, CMS systems, billing and invoicing tools, eCommerce solutions, and role-based dashboards handling real business transactions.\n\nExperienced in designing secure payment workflows, webhook handling, data migrations at scale, and deploying production systems on cloud infrastructure. Comfortable owning features from requirements to deployment in fast-paced product environments.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Next.js" },
    { name: "Typescript" },
    { name: "React" },
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
      title: "Enterprise CRM & Billing Systems",
      href: "https://crm-demo-8mv7.onrender.com",
      dates: "Dec 2024 - January 2025",
      active: true,
      description:
        "Built and maintained multiple production-grade CRM and billing platforms for Business Culture, Century Group, and Krishnashray. Implemented lead management, role-based dashboards, Razorpay payment workflows, automated billing, reporting, and secure OTP-based authentication. Migrated 8,000+ legacy SQL records to MongoDB with zero downtime and converted 44,800+ DevLys non-Unicode records to Unicode for modern system compatibility.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "JWT",
        "RBAC",
      ],
      links: [
        {
          type: "Company",
          href: "https://crm-demo-8mv7.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Vaish Mahasammelan MP",
      href: "https://vaishmahasammelanmp.com",
      dates: "February 2025 - Present",
      active: true,
      description:
        "Developed a large-scale membership and event management system featuring 40+ field dynamic forms, paid and free registrations, OTP verification, automated email notifications, print-ready membership management, jobs and matrimony modules, and admin-level reporting dashboards.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Razorpay",
        "TailwindCSS",
        "JWT",
        "RBAC",
      ],
      links: [
        {
          type: "Website",
          href: "https://vaishmahasammelanmp.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Commercial Business Websites",
      href: "https://businessculture.in",
      dates: "January 2025 - October 2025",
      active: true,
      description:
        "Delivered production-grade corporate websites using Next.js for multiple businesses including Century Group, Inspire Salon, Business Culture, Oswal Udyog, and Nirmal Glasstech. Focused on performance, SEO, responsive UI, and scalable content architecture.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "TailwindCSS",
        "SSR",
        "SEO Optimization",
      ],
      links: [
        {
          type: "Example",
          href: "https://businessculture.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Raeeth eCommerce Platform (WIP)",
      href: "https://raeeth.in",
      dates: "December 2025 - Present",
      active: true,
      description:
        "Building a full-stack eCommerce system with product management, order workflows, admin dashboard, and scalable PostgreSQL schema design. Focused on clean architecture, transactional integrity, and performance optimization.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Node.js",
        "TailwindCSS",
      ],
      links: [],
      image: "",
    },
    {
      title: "Cinematic Akash – Video Editor Portfolio",
      href: "https://cinematicakash.in/",
      dates: "August 2025 - September 2025",
      active: true,
      description:
        "Built a fully static (SSG) Next.js portfolio platform with an integrated secure admin panel using TOTP-based authentication. Enables dynamic management of videos, thumbnails, and images while maintaining static site performance. Designed for fast load times, SEO performance, and secure content updates without sacrificing scalability.",
      technologies: [
        "Next.js (SSG)",
        "TypeScript",
        "TOTP Authentication",
        "Admin Panel",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
        "Media Optimization",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://cinematicakash.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "ProShop v2 (MERN + Razorpay)",
      href: "https://proshop-v2-rr4v.onrender.com",
      dates: "October 2024 - October 2024",
      active: true,
      description:
        "Full-stack eCommerce platform built with the MERN stack using Vite instead of CRA for improved build performance and DX. Implemented product catalog, cart, order management, admin dashboard, and secure Razorpay payment integration. Designed REST APIs, authentication flows, and protected routes with role-based authorization.",
      technologies: [
        "React (Vite)",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Razorpay",
        "JWT",
        "REST APIs",
      ],
      links: [
        {
          type: "Live",
          href: "https://proshop-v2-rr4v.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "@s54a/init",
      href: "https://www.npmjs.com/package/@s54a/init",
      dates: "2024",
      active: true,
      description:
        "CLI project initializer with GitHub cloning and template scaffolding. 750+ downloads.",
      technologies: ["Node.js", "TypeScript", "CLI", "npm"],
      links: [
        {
          type: "npm",
          href: "https://www.npmjs.com/package/@s54a/init",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "@s54a/cliclock",
      href: "https://www.npmjs.com/package/@s54a/cliclock",
      dates: "2024",
      active: true,
      description:
        "CLI-based clock, timer, and stopwatch tool with terminal notifications and clean command interface. Designed for developer productivity workflows. 160+ downloads.",
      technologies: ["Node.js", "TypeScript", "CLI", "npm", "Terminal UX"],
      links: [
        {
          type: "npm",
          href: "https://www.npmjs.com/package/@s54a/cliclock",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Lead Generation Systems (Multi-Client)",
      href: "https://harshhyundaiindore.in/",
      dates: "September 2025 - Present",
      active: true,
      description:
        "Designed and deployed high-conversion lead generation platforms for multiple automotive dealerships including Harsh Hyundai (Indore), ASM Hyundai, CI Hyundai (Bhopal), and Kasliwal Hyundai. Built ad-optimized landing pages focused on performance marketing, campaign-based tracking, and structured lead capture.\n\nImplemented validated multi-step forms, backend lead storage, admin access, and scalable deployment using Next.js. Engineered for SEO, fast load times, and conversion efficiency across paid traffic campaigns.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Form Validation",
        "SEO Optimization",
        "Lead Tracking",
      ],
      links: [
        {
          type: "Krishnashray Senior Living",
          href: "https://www.krishnashray.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Harsh Hyundai",
          href: "https://harshhyundaiindore.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Kasliwal Hyundai",
          href: "https://www.kasliwalhyundai.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "CI Hyundai",
          href: "https://cihyundaibhopal.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "ASM Hyundai",
          href: "https://asmhyundai.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "The Lokmangal – News CMS Platform",
      href: "https://www.thelokmangal.com/",
      dates: "February 2025 - April 2025",
      active: true,
      description:
        "Built a full-stack news publishing platform with a custom admin panel, role-based access control (RBAC), and analytics tracking. Implemented article management with rich text editor support, category structuring, author permissions, and real-time statistics monitoring.\n\nDesigned REST APIs using Express and MongoDB, structured secure authentication flows, and deployed the production system on AWS EC2 with proper server configuration and environment management.",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "RBAC",
        "REST APIs",
        "Rich Text Editor",
        "AWS EC2",
      ],
      links: [
        {
          type: "The Lokmangal",
          href: "https://www.thelokmangal.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    // {
    //   title: "Global Time Converter",
    //   href: "",
    //   dates: "2024",
    //   active: true,
    //   description:
    //     "Web application for managing working hours across global time zones with DST-aware logic, analog clocks, and dynamic hour adjustments for distributed team coordination.",
    //   technologies: [
    //     "Next.js",
    //     "TypeScript",
    //     "Date APIs",
    //     "Time Zone Handling",
    //   ],
    //   links: [],
    //   image: "",
    // },
  ],
} as const;
