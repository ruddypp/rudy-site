import { Link } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Seo, { SITE_URL } from '../components/seo/Seo'
import { caseStudyBySlug } from '../data/caseStudies'
import { projects } from '../data/projects'

export default function CaseStudy({ slug }: { slug: string }) {
  const study = caseStudyBySlug(slug)
  const project = projects.find((p) => p.title === study?.project)

  if (!study) return null

  const path = `/projects/${study.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: study.metaTitle,
        description: study.metaDescription,
        author: { '@type': 'Person', name: 'Rudy Paningal', url: `${SITE_URL}/` },
        publisher: { '@type': 'Person', name: 'Rudy Paningal', url: `${SITE_URL}/` },
        mainEntityOfPage: `${SITE_URL}${path}`,
        image: project ? `${SITE_URL}${project.image}` : undefined,
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}/#projects` },
          { '@type': 'ListItem', position: 3, name: study.project, item: `${SITE_URL}${path}` },
        ],
      },
    ],
  }

  return (
    <div className="relative min-h-screen font-sans bg-background text-foreground transition-colors duration-300">
      <Seo
        title={study.metaTitle}
        description={study.metaDescription}
        path={path}
        type="article"
        image={project?.image}
        jsonLd={jsonLd}
      />

      <div className="relative z-10 flex flex-col gap-8 pb-6">
        <Navbar />

        <article className="container mx-auto px-6 max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-brand-navy/60 dark:text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-brand-purple transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/#projects" className="hover:text-brand-purple transition-colors">Work</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-navy dark:text-white">{study.project}</li>
            </ol>
          </nav>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-brand-navy dark:text-white">
            {study.project}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-brand-navy/80 dark:text-white/80">
            {study.summary}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 rounded-[26px] border border-brand-purple/10 bg-[#fcfbff] dark:bg-slate-950/60 p-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-brand-purple">Role</dt>
              <dd className="mt-1 text-sm text-brand-navy dark:text-white">{study.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-brand-purple">Year</dt>
              <dd className="mt-1 text-sm text-brand-navy dark:text-white">{study.year}</dd>
            </div>
            {project ? (
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-brand-purple">Stack</dt>
                <dd className="mt-1 text-sm text-brand-navy dark:text-white">{project.stack.join(', ')}</dd>
              </div>
            ) : null}
          </dl>

          {project ? (
            <img
              src={project.image}
              alt={`${study.project} homepage`}
              width={1200}
              height={750}
              loading="lazy"
              className="mt-10 w-full rounded-[26px] border border-brand-purple/10"
            />
          ) : null}

          {study.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-brand-navy dark:text-white">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-brand-navy/80 dark:text-white/80">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {study.results.length > 0 ? (
            <section className="mt-12">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-brand-navy dark:text-white">Results</h2>
              <ul className="mt-4 space-y-3">
                {study.results.map((result) => (
                  <li key={result} className="text-lg leading-relaxed text-brand-navy/80 dark:text-white/80">{result}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="mt-12 flex flex-wrap gap-4">
            {project ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-brand-purple px-8 py-3 font-bold text-white transition-colors hover:bg-brand-purple/90"
              >
                Visit the live site
              </a>
            ) : null}
            <Link
              to="/#contact"
              className="inline-block rounded-full border-2 border-brand-purple px-8 py-3 font-bold text-brand-purple transition-colors hover:bg-brand-purple hover:text-white"
            >
              Start a project like this
            </Link>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  )
}
