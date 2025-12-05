import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { StructuredData } from "./structured-data";

export const metadata: Metadata = {
  title: {
    default: "Sooraj Gupta - Full Stack Engineer",
    template: "%s | Sooraj Gupta",
  },
  description:
    "I am a Full Stack Engineer specializing in Next.js, TypeScript, and the MERN stack. Building scalable, production-grade web applications.",
  keywords: [
    "Sooraj Gupta",
    "Full Stack Engineer",
    "Next.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Web Developer India",
    "Remote Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
  ],
  authors: [{ name: "Sooraj Gupta", url: "https://s54a.in" }],
  creator: "Sooraj Gupta",

  openGraph: {
    type: "website",
    title: "Sooraj Gupta - Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in Next.js, TypeScript, and MERN stack.",
    url: "https://s54a.in",
    siteName: "Sooraj Gupta Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sooraj Gupta Portfolio",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sooraj Gupta - Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in Next.js, TypeScript, and MERN stack.",
    creator: "@s54a__",
    images: ["/og.png"],
    site: "@s54a__",
  },

  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23000'/%3E%3Ctext x='50' y='50' font-size='68' fill='%23ffffff' text-anchor='middle' dy='.35em' font-family='Poppins, sans-serif' %3ESG%3C/text%3E%3C/svg%3E",
      },
    ],
    shortcut: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23000'/%3E%3Ctext x='50' y='50' font-size='68' fill='%23ffffff' text-anchor='middle' dy='.35em' font-family='Poppins, sans-serif' %3ESG%3C/text%3E%3C/svg%3E",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://s54a.in",
  },

  // verification: {
  //   google: "your-google-verification-code", // TODO: Replace with actual Google verification code
  // },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <StructuredData />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uerfks5omv");
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
