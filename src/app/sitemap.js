const DOMAIN = 'https://www.ridhwaan.xyz';

export default async function sitemap() {
  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/process',
    '/work',
  ];

  const blogPosts = [
    'four-key-features-for-successfully-deploying-vision-language-models-in-south-african-horticulture',
    'revolutionizing-inventory-management',
    'unleashing-the-power-of-predictive-analytics',
  ];

  const workProjects = [
    'hello',
    'hollard',
    'nestify',
  ];

  const sitemapEntries = routes.map(route => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  blogPosts.forEach(post => {
    sitemapEntries.push({
      url: `${DOMAIN}/blog/${post}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  workProjects.forEach(project => {
    sitemapEntries.push({
      url: `${DOMAIN}/work/${project}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>
`).join('')}
</urlset>`;

  return sitemapXml;
}
