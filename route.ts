export async function GET() {
  const baseUrl = "https://brajone.com";
  const pages = ["", "/properties", "/projects", "/about", "/contact", "/gallery", "/blog"];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(p => `
  <url>
    <loc>${baseUrl}${p}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === "" ? "1.0" : "0.8"}</priority>
  </url>`).join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
