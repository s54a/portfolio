import Script from "next/script";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sooraj Gupta",
    url: "https://s54a.in",
    image: "https://s54a.in/og.png",
    sameAs: [
      "https://github.com/s54a",
      "https://linkedin.com/in/s54a",
      "https://twitter.com/s54a__",
    ],
    jobTitle: "Full Stack Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Business Culture",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jabalpur",
      addressCountry: "India",
    },
    email: "soorajgupta00@gmail.com",
    telephone: "+918889283873",
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "MERN Stack",
      "Tailwind CSS",
    ],
  };

  return (
    <Script
      id="json-ld-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
