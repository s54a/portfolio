import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sooraj Gupta",
  initials: "s54a",
  url: "https://s54a.in",
  location: "Jabalpur, India",
  locationLink: "https://www.google.com/maps/place/jabalpur",
  description:
    "Full Stack Engineer specializing in Next.js, TypeScript, and scalable backend systems. Experienced in building production-ready web applications.",
  summary:
    "Full Stack Engineer with hands-on experience building and deploying end-to-end web applications using Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB.\n\nStrong background in API design, authentication (JWT, RBAC, OTP), payment gateway integration (Razorpay), performance optimization, and scalable system architecture. I’ve built CRM platforms, CMS systems, billing and invoicing tools, eCommerce solutions, and role-based dashboards handling real business transactions.\n\nExperienced in designing secure payment workflows, webhook handling, data migrations at scale, and deploying production systems on cloud infrastructure. Comfortable owning features from requirements to deployment in fast-paced product environments.",
  avatarUrl: "https://avatars.githubusercontent.com/u/90983736?v=4",
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
      title: "OBGYN Prep",
      href: "https://obgynprep.store",
      dates: "2025 - Present",
      active: true,
      description:
        "Built an ed-tech platform with separate admin and client web apps, Razorpay course purchases, OTP authentication, presigned S3 upload architecture, Express/MongoDB backend, and a React Native iOS app accepted on the App Store.",
      technologies: [
        "React",
        "TypeScript",
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "S3",
        "Razorpay",
        "OTP Auth",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://obgynprep.store",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/obgynprep.webp",
    },
    {
      title: "OBGYN Prep IOS App",
      href: "https://obgynprep.store",
      dates: "December 2025 - June 2026",
      active: true,
      description:
        "Built an ed-tech platform with separate admin and client web apps, Razorpay course purchases, OTP authentication, presigned S3 upload architecture, Express/MongoDB backend, and a React Native iOS app accepted on the App Store.",
      technologies: [
        "React",
        "TypeScript",
        "React Native",
        "iOS",
        "Node.js",
        "Express",
        "MongoDB",
        "S3",
        "Razorpay",
        "OTP Auth",
        "TailwindCSS",
      ],
      links: [
        {
          type: "iOS App",
          href: "https://apps.apple.com/in/app/obgyn-prep/id6754720569",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/ios.webp",
    },
    {
      title: "Raeeth eCommerce Platform",
      href: "https://raeeth.in",
      dates: "2025 - Present",
      active: true,
      description:
        "Building a streetwear eCommerce platform using a Turborepo monorepo with product variants, cart, order flow, admin analytics, Google/email/WhatsApp OTP login, Better Auth, PostgreSQL schema design, and Razorpay payments.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Turborepo",
        "Drizzle ORM",
        "PostgreSQL",
        "Better Auth",
        "Razorpay",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://raeeth.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/raeeth.webp",
    },
    {
      title: "Vaish Mahasammelan MP",
      href: "https://vaishmahasammelanmp.com",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        "Built a large full-stack community management platform with public pages, member registration, Razorpay payments, Cloudinary uploads, JWT auth, admin dashboards, gallery/events CMS, matrimony services, jobs marketplace, PVC card workflows, SMS/email automation, Excel exports, and analytics.",
      technologies: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Razorpay",
        "Cloudinary",
        "JWT",
        "RBAC",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://vaishmahasammelanmp.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/vms.webp",
    },
    {
      title: "CRM System",
      href: "https://crm.s54a.in",
      dates: "Dec 2024 - May 2026",
      active: true,
      description:
        "Developed real-estate CRM platforms for Century Group, Krishnashray, and Business Culture with role-based agent/admin dashboards, inquiry CRUD, follow-up tracking, analytics charts, dynamic form fields, secure cookie auth, Excel reporting, and internal billing/invoicing workflows.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "RBAC",
        "Chart.js",
        "Excel Export",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://crm.s54a.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/crm admin.webp",
    },
    {
      title: "The Lokmangal News CMS",
      href: "https://www.thelokmangal.com",
      dates: "Feb 2025 - Apr 2025",
      active: true,
      description:
        "Built a MERN news publishing platform with custom admin CMS, article/category management, RBAC, rich text editing, server-rendered meta tags for WhatsApp/social previews, and migration of 8,000+ legacy news articles.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "MERN",
        "RBAC",
        "REST APIs",
        "SSR Meta Tags",
        "AWS EC2",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.thelokmangal.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/lokmangal og preview.webp",
    },
    {
      title: "Cinematic Akash Portfolio CMS",
      href: "https://cinematicakash.in",
      dates: "2025",
      active: true,
      description:
        "Built a Next.js SSG portfolio with an SSR-powered CMS, TOTP-secured admin login, Cloudinary presigned uploads, editable video/image content, and one-click redeploy for static public pages.",
      technologies: [
        "Next.js",
        "TypeScript",
        "SSG",
        "SSR",
        "TOTP Auth",
        "Cloudinary",
        "Admin Panel",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://cinematicakash.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/akash.webp",
    },
    // {
    //   title: "Business Websites & Lead Generation Systems",
    //   href: "https://centurygroup.co.in",
    //   dates: "2024 - 2026",
    //   active: true,
    //   description:
    //     "Delivered 12+ production websites and landing pages for businesses including Century Group, Nirmal Glasstech, Business Culture, Krishnashray Senior Living, ASM Hyundai, Harsh Hyundai, CI Hyundai, and Kasliwal Hyundai variants with responsive UI, SEO, lead capture, and fast deployments.",
    //   technologies: [
    //     "Next.js",
    //     "React",
    //     "TypeScript",
    //     "TailwindCSS",
    //     "SEO",
    //     "Forms",
    //     "Lead Capture",
    //     "Deployment",
    //   ],
    //   links: [
    //     {
    //       type: "Century Group",
    //       href: "https://centurygroup.co.in",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Krishnashray",
    //       href: "https://www.krishnashray.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/projects/business-sites.png",
    // },
  ],
} as const;
