import { NextResponse } from "next/server";

const staticPages = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/other-projects", changefreq: "monthly", priority: 0.8 },
  { path: "/other-skills", changefreq: "monthly", priority: 0.8 },
];

export async function GET() {
  const baseUrl = "https://dharshanm.vercel.app";

  const urls = staticPages
    .map(
      ({ path, changefreq, priority }) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
