import { getCollection } from "astro:content";

import type { APIRoute } from "astro";

import { siteMeta } from "@data/site";

export const GET: APIRoute = async () => {
  const projects = await getCollection("projects");

  const staticPages = ["/"];

  const urls = [
    ...staticPages,
    ...projects.map((project) => `/projekty/${project.id}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${new URL(path, siteMeta.siteUrl).toString()}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
