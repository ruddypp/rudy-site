// Regenerates public/sitemap.xml from the case-study slugs so the two cannot drift.
import { readFileSync, writeFileSync } from 'node:fs'

const SITE = 'https://www.ruddypp.site'
const source = readFileSync('src/data/caseStudies.ts', 'utf8')
const slugs = [...source.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((m) => m[1])
const today = new Date().toISOString().slice(0, 10)

const urls = [
  { loc: `${SITE}/`, priority: '1.0', changefreq: 'monthly' },
  ...slugs.map((slug) => ({
    loc: `${SITE}/projects/${slug}`,
    priority: '0.8',
    changefreq: 'yearly',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
console.log(`sitemap.xml: ${urls.length} URL`)
