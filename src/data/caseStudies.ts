export interface CaseStudySection {
  heading: string
  body: string[]
}

export interface CaseStudy {
  slug: string
  /** Must match the `title` of an entry in projects.ts */
  project: string
  metaTitle: string
  metaDescription: string
  /** Front-loaded answer block: AI search engines cite the opening of a page far more often than the body, so this stays self-contained. */
  summary: string
  role: string
  year: string
  sections: CaseStudySection[]
  /** Outcome figures. Left empty until verified numbers exist — never estimated. */
  results: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'stem-cell-malaysia',
    project: 'Stem Cell Malaysia',
    metaTitle: 'Stem Cell Malaysia — 42-Page Medical SEO Architecture',
    metaDescription:
      'How a regenerative medicine clinic in Malaysia got a 42-page Next.js site where each treatment, cost question, and compliance query has its own URL.',
    summary:
      'Stem Cell Malaysia is a 42-page website for a regenerative medicine clinic, built with Next.js and TypeScript. Rather than one page describing every treatment, the site gives each patient question its own URL — treatment pages, a cost page, a legality page, a clinic-verification page, and eleven educational articles — so each one can answer a single search intent completely.',
    role: 'Full stack development, technical SEO',
    year: '2025',
    sections: [
      {
        heading: 'The brief',
        body: [
          'Regenerative medicine is a high-consideration category. Nobody books a stem cell treatment from an advertisement. They research for weeks, and they research in fragments: what a treatment costs, whether it is legal in their country, how to tell a legitimate clinic from a dubious one, whether it helps the specific joint that hurts.',
          'Those are not one question. They are a dozen questions with different intents, different urgency, and different stages of readiness to book. A single marketing page cannot serve them, because a page optimised for everything ranks for nothing and answers no question completely.',
        ],
      },
      {
        heading: 'Mapping questions to URLs',
        body: [
          'The site architecture starts from the questions rather than from the clinic’s internal structure. Each recurring patient question was given its own page and its own URL, and the URL says what the page answers.',
          'Treatment intent is served by dedicated pages for knee treatment, hair treatment, and facial treatment, alongside a treatments and conditions hub. Commercial research is served by a cost page. Trust and compliance questions — the ones that decide whether a patient proceeds at all — are served by a page on the legality of the therapy in Malaysia and a page on how to verify a clinic. Geographic intent is served by a Kuala Lumpur page.',
          'That mapping means a search about cost and a search about knee treatment land on different pages, each of which covers its subject fully instead of devoting a paragraph to it. It also means the pages do not compete with each other for the same query, which is the failure mode of clinic sites that publish variations of the same content.',
        ],
      },
      {
        heading: 'Trust content as its own layer',
        body: [
          'In medical categories the deciding factor is often not the treatment page at all. A patient who is not yet sure the field is legitimate will not read a treatment page carefully, no matter how good it is.',
          'So compliance and verification content was treated as a first-class layer rather than a footnote. The legality page and the clinic-verification page exist to answer scepticism directly, in the patient’s own framing, and they link forward to treatments once that scepticism is addressed. Eleven educational articles sit around them, covering the research-stage questions that precede any treatment decision and linking inward to the relevant pages.',
          'This is also what makes the site quotable. Self-contained pages that answer one question plainly are the pages that search engines — and increasingly AI assistants — extract answers from.',
        ],
      },
      {
        heading: 'Rendering and crawlability',
        body: [
          'The site is built on Next.js with TypeScript and statically generated, so every page is delivered as complete HTML. For a medical site this matters more than the average case: content that only exists after JavaScript executes is invisible to crawlers that do not run it, and that category now includes several of the AI assistants patients ask before they ask Google.',
          'All 42 URLs are declared in a sitemap at the site root, with consistent trailing-slash URLs so no page is reachable at two addresses. The URL structure is flat — one segment per page — which keeps every page within a short crawl path of the homepage and makes the URLs themselves readable in a search result.',
          'Tailwind CSS handles the design system, which keeps the shipped stylesheet small and consistent across a site with many similar templates. TypeScript covers the content models, so a page cannot be published missing a field that its metadata or structured data depends on.',
        ],
      },
    ],
    results: [],
  },
  {
    slug: 'heaven-kl-local-spa',
    project: 'Heaven KL Local Spa',
    metaTitle: 'Heaven KL Local Spa — 72-Page Multi-Location Local SEO Build',
    metaDescription:
      'A spa website covering 8 locations across Kuala Lumpur and Johor with 21 service pages, therapist profiles, pricing, and booking — built on Next.js.',
    summary:
      'Heaven KL Local Spa is a 72-page spa website covering eight service areas across Kuala Lumpur, Selangor, and Johor. Built with Next.js and TypeScript, it separates 21 service pages from 8 location pages and adds therapist profiles, a pricing page, an FAQ, and a dedicated booking page — so that a search for a treatment and a search for a treatment near a place land on different, appropriate pages.',
    role: 'Full stack development, local SEO',
    year: '2025',
    sections: [
      {
        heading: 'The structural problem',
        body: [
          'A spa operating in eight areas faces a choice that decides the whole project. Put everything on one page and the business competes in one city while being invisible in the other seven. Generate one page per area with only the place name swapped and the site looks like a doorway network, which search engines filter out rather than reward.',
          'The requirement was genuine coverage for Sungai Besi, Seri Kembangan, Setapak, Desa Sri Hartamas, Kuala Lumpur, Johor Bahru, Permas Jaya, and Gelang Patah — without the thin, templated pages that get local sites demoted.',
        ],
      },
      {
        heading: 'Two layers, not one',
        body: [
          'Service pages and location pages were built as separate layers with separate jobs. A service page explains one treatment in full — what it is, who it suits, what it involves. There are 21 of them, covering everything from deep tissue and Thai to hot stone, couples, and four-hand massage.',
          'A location page does a different job: it explains availability, access, and booking for one area, and links to the services offered there. It does not restate the treatment content, because restating it is exactly what produces duplicate pages.',
          'That separation means the two search behaviours — researching a treatment, and looking for somewhere nearby — are served by pages built for each, rather than by one page trying to do both badly.',
        ],
      },
      {
        heading: 'The pages that close the booking',
        body: [
          'Local service searches convert on specifics, and the specifics people want are usually withheld. Sites that hide prices behind an enquiry form lose the comparison before it starts.',
          'So the build treats the closing information as pages in their own right: a pricing and packages page, an FAQ, and a dedicated booking page reachable from anywhere on the site. Seven therapist profile pages add the detail that generic spa sites cannot offer — who the customer will actually see.',
          'Twenty-one editorial articles sit above all of this, targeting the research-stage questions that come before someone knows which treatment they want, and linking down into the service and location pages.',
        ],
      },
      {
        heading: 'Technical approach',
        body: [
          'Next.js static generation delivers every one of the 72 URLs as complete HTML, so no page depends on JavaScript execution to be crawled or read. All 72 are declared in a sitemap at the site root.',
          'Tailwind CSS keeps the shipped CSS small across a site built largely from repeated templates, and TypeScript models the service, location, and pricing content so that a page cannot ship with a field missing. Supporting pages — privacy policy, booking terms — are part of the same system rather than afterthoughts, because a local business site is judged on completeness as much as on content.',
        ],
      },
    ],
    results: [],
  },
  {
    slug: 'mysaloon',
    project: 'Mysaloon',
    metaTitle: 'Mysaloon — Single-Page Salon Site Built With Astro',
    metaDescription:
      'An editorial salon website built with Astro: seven service categories, intent-based browsing, and WhatsApp booking on one fast, HTML-first page.',
    summary:
      'Mysaloon is a single-page editorial website for a salon offering hair, nail, beauty, and spa services. It was built with Astro rather than a client-side framework, so the page ships as HTML with almost no JavaScript, and it converts through WhatsApp rather than a contact form.',
    role: 'Full stack development, technical SEO',
    year: '2025',
    sections: [
      {
        heading: 'The brief',
        body: [
          'Salon customers compare on two things before booking: what is offered, and what it costs. Sites that bury the service menu behind navigation, or hide prices behind an enquiry form, lose that comparison to whichever competitor shows it.',
          'The brief was an editorial-feeling site — closer to a magazine than a brochure — that still loaded immediately on a phone, and that converted through the channel the salon actually answers.',
        ],
      },
      {
        heading: 'Why Astro, and why one page',
        body: [
          'Almost nothing on this site changes after load. Service descriptions, category listings, and the salon’s positioning are static content. Shipping a full client-side framework to render static text is a cost every visitor pays for no benefit.',
          'Astro renders to HTML at build time and ships JavaScript only where something genuinely needs it. For a content-led page this removes the JavaScript-rendering question from SEO entirely — the content is in the HTML from the first byte, readable by every crawler including the ones that do not execute scripts.',
          'Keeping it to a single page was a deliberate choice rather than a shortcut. A salon with one location and one set of services does not have enough distinct content to justify a dozen pages; splitting it would have produced exactly the thin pages that hurt a site. One page with everything on it, loading instantly, serves the visitor better.',
        ],
      },
      {
        heading: 'Two ways to find a service',
        body: [
          'The service menu is organised seven ways by category — haircut, colour, texture, treatments, hands and feet, beauty, and spa — which serves the customer who already knows what they want.',
          'Alongside it, the same services are grouped a second way by intent: getting event ready, healthy hair and scalp, a makeover, everyday care. This serves the larger group who know how they want to feel but not what the service is called. Offering both routes through the same content costs nothing extra and catches both kinds of visitor.',
        ],
      },
      {
        heading: 'Booking through WhatsApp',
        body: [
          'Contact forms leak. A visitor fills one in, receives no acknowledgement, and the salon replies hours later through a different channel. In this market WhatsApp is where the conversation was always going to happen.',
          'So booking runs through WhatsApp directly, with the service pre-filled in the message. The visitor taps once from the service they were reading about and arrives in a conversation that already has context. There is no form to abandon and no reply delay to lose them in.',
          'TypeScript and Tailwind CSS cover the content models and design system, keeping service and pricing data structured in one place rather than written into markup by hand.',
        ],
      },
    ],
    results: [],
  },
  {
    slug: 'indomesh-cipta-pratama',
    project: 'Indomesh Cipta Pratama',
    metaTitle: 'Indomesh Cipta Pratama — Industrial Catalogue on Laravel',
    metaDescription:
      'A 14-page industrial catalogue for a wire mesh conveyor manufacturer, built on Laravel with eight spec-driven product pages and a CMS the client runs themselves.',
    summary:
      'Indomesh Cipta Pratama is a 14-page industrial catalogue for an Indonesian manufacturer of wire mesh conveyors, roller chains, sprockets, and related transmission parts. Built on Laravel with a purpose-made CMS, it gives each of the eight product lines its own specification-led page rather than collapsing the catalogue into a single products list.',
    role: 'Full stack development',
    year: '2025',
    sections: [
      {
        heading: 'What industrial buyers actually search for',
        body: [
          'Buyers in this category do not search for the company. They search for the part and the material: a wire mesh conveyor belt in SS304, a stainless roller chain, a specific sprocket. The company name enters the search only after the part has been found somewhere.',
          'That makes a single products page the wrong shape. It forces eight distinct searches onto one URL, where each product gets a paragraph and none gets a page that can rank for or fully answer its own query.',
        ],
      },
      {
        heading: 'One page per product line',
        body: [
          'Each of the eight product lines has its own page: wire mesh conveyor, wire mesh chain conveyor, roller chain in stainless steel, table top chain, trolley chain, gear and sprocket, coupling and pulley, and gear box.',
          'These are not stub pages. A product page runs to roughly 700 words and is organised the way a buyer evaluates: what the part is for, which working environments it suits, which processes it fits, the main specifications, and the weave variants worth considering — balanced weave, compound balanced, and so on. It closes by moving from requirement to production rather than with a generic contact prompt.',
          'The page titles carry the same specificity, naming the material grades a buyer types, so the search result matches the search.',
        ],
      },
      {
        heading: 'A CMS scoped to the business',
        body: [
          'Industrial catalogues move. Specifications get revised, variants get added, client references grow. When every edit needs a developer, the edits stop happening, and a catalogue that drifts out of date stops matching what buyers search for.',
          'So I built a CMS covering exactly what this business needs: products, media, client references, and enquiries. Constraining the scope is the point — an admin interface learnable in one sitting is one that actually gets used. Products are stored as structured records with specifications in defined fields rather than as free text, which keeps eight product pages consistent and lets each one present its details in a predictable place.',
          'The supporting pages — about, clients, media, contact — are part of the same system, so the whole site stays under the client\u2019s control rather than only the parts that were easy to make editable.',
        ],
      },
      {
        heading: 'Delivered as HTML, not as an app',
        body: [
          'Laravel renders the catalogue server-side with Blade templates, so every product page arrives as complete HTML. For a supplier whose buyers arrive by searching part names, a catalogue that only materialises after JavaScript runs is a catalogue that risks not being indexed at all.',
          'Each product page carries structured data describing the product, and all 14 URLs are declared in a sitemap at the site root alongside a robots file. Alpine.js supplies the small amount of interactivity the admin panel needs without pulling in a framework, and Tailwind CSS handles the design system.',
        ],
      },
    ],
    results: [],
  },
  {
    slug: 'cms-company-profile',
    project: 'CMS Company Profile',
    metaTitle: 'CMS Company Profile — Custom CMS for a Commodity Supplier',
    metaDescription:
      'A company profile site and custom CMS for an Indonesian agricultural commodity supplier, built with Next.js, Prisma, and Supabase across six product categories.',
    summary:
      'A company profile website with a purpose-built CMS for an Indonesian agricultural commodity supplier, covering six product categories: coconut shell charcoal, palm sugar, crystal sugar, coffee beans, fermented cocoa beans, and industrial salt. Built with Next.js, TypeScript, Prisma, and Supabase, it renders server-side so the catalogue is readable by search engines without JavaScript.',
    role: 'Full stack development',
    year: '2025',
    sections: [
      {
        heading: 'The problem with static company profiles',
        body: [
          'Commodity suppliers have catalogues that move. Grades change, specifications get revised, product lines get added or dropped with the season. When every one of those edits needs a developer, the edits do not happen — and a catalogue that no longer matches what buyers search for is worse than no catalogue at all.',
          'The alternative most suppliers are offered is a general-purpose CMS carrying hundreds of features for blogging, commerce, and marketing that a commodity exporter will never touch. Those systems get abandoned because the interface asks the client to learn a product, not to update a price.',
        ],
      },
      {
        heading: 'A CMS scoped to the business',
        body: [
          'I built a CMS that does exactly what this business needs and nothing else: manage products, manage media, manage client references, and handle incoming enquiries.',
          'Constraining the scope is the point. An admin interface that can be learned in one sitting is an interface that gets used, and a catalogue that gets updated is the whole reason the site exists. Every feature not built is one fewer thing standing between the client and a price change.',
          'Products are modelled as structured records with their specifications in defined fields rather than as free-form text. That keeps the catalogue consistent across six categories, and it means each product page presents its details in a predictable place — which matters for buyers scanning quickly and for search engines reading the page.',
        ],
      },
      {
        heading: 'Rendering and the data layer',
        body: [
          'The site runs on Next.js with server-side rendering, so the catalogue is present in the HTML that search engines receive. For a supplier whose buyers find them by searching product names, a catalogue that only appears after JavaScript runs is a catalogue that may not be indexed at all.',
          'Prisma provides the typed data layer over the product, media, and enquiry models, which means the schema and the application code cannot drift apart. Supabase handles the database and storage. TypeScript covers the models end to end, so a product cannot be saved missing a field that its page depends on.',
          'Enquiries land in the same system as the catalogue, tied to the product they came from — so a question about a grade of palm sugar arrives with the context of which product prompted it, rather than as an anonymous form submission.',
        ],
      },
      {
        heading: 'Why this shape suits B2B',
        body: [
          'B2B commodity buyers search differently from consumers. They search for the product name and the specification, they compare a small number of suppliers, and they want to reach a person quickly.',
          'That argues for a catalogue that is complete, structured, fast to scan, and always current — and against the marketing-heavy company profile that most suppliers end up with. Giving the client direct control over the catalogue is what keeps that promise true six months after launch, which is the part most company profile projects never solve.',
        ],
      },
    ],
    results: [],
  },
]

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug)
