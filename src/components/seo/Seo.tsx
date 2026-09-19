import { Head } from 'vite-react-ssg'

export const SITE_URL = 'https://www.ruddypp.site'

type Props = {
  title: string
  description: string
  /** Path with leading slash, e.g. "/projects/mysaloon" */
  path: string
  image?: string
  type?: 'website' | 'article'
  jsonLd?: Record<string, unknown>
}

/**
 * Owns every per-page head tag. index.html deliberately carries no title,
 * description or Open Graph tags, so nothing here ends up duplicated.
 */
export default function Seo({
  title,
  description,
  path,
  image = '/images/og-cover.png',
  type = 'website',
  jsonLd,
}: Props) {
  const url = `${SITE_URL}${path}`
  const imageUrl = `${SITE_URL}${image}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Rudy Paningal" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Rudy Paningal, full stack developer and technical SEO specialist" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Head>
  )
}
