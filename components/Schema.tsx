"use client";

export default function Schema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dharshan M",
    url: "https://dharshan.vercel.app",
    jobTitle: "Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, and modern web development.",
    sameAs: [
      "https://github.com/dharshan47",
      "https://linkedin.com/in/dharshan47"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
