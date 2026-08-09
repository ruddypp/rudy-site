export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  image: string;
  href: string;
  kind: "Live Preview" | "GitHub Repo";
}

export const projects: ProjectItem[] = [
  {
    title: "Stem Cell Malaysia",
    description:
      "Patient-focused regenerative medicine website with treatment guides, educational resources, and search-ready content for visitors in Malaysia.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    image: "/projects/stem-cell-malaysia-home.webp",
    href: "https://advancestemcell.com/",
    kind: "Live Preview",
  },
  {
    title: "Heaven KL Local Spa",
    description:
      "Premium local-spa website with service, location, pricing, booking, FAQ, and editorial journeys for Kuala Lumpur, Selangor, and Johor Bahru.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    image: "/projects/heaven-kl-local-spa-home.webp",
    href: "https://heavenlocalmassage.com/",
    kind: "Live Preview",
  },
  {
    title: "Mysaloon",
    description:
      "Editorial salon website for hair, nail, beauty, and spa services, with service menus, transparent pricing, and WhatsApp appointment conversion.",
    stack: ["Astro", "TypeScript", "Tailwind CSS"],
    image: "/projects/mysaloon-home.webp",
    href: "https://saloon-ebon-seven.vercel.app/",
    kind: "Live Preview",
  },
  {
    title: "Indomesh Cipta Pratama",
    description:
      "Industrial company profile and CMS for wiremesh, conveyor, and custom fabrication, with product, media, client, and enquiry management.",
    stack: ["Laravel", "PHP", "Blade", "Tailwind CSS", "Alpine.js"],
    image: "/projects/indomesh-cipta-pratama-home.webp",
    href: "https://mediumaquamarine-chicken-310684.hostingersite.com/",
    kind: "Live Preview",
  },
  {
    title: "Dr. Soma Plastic Surgery",
    description:
      "Clinical aesthetics and plastic-surgery website for treatment discovery, specialist credentials, patient education, FAQs, and consultation conversion.",
    stack: ["Next.js", "React", "SEO"],
    image: "/projects/dr-soma-plastic-surgery-home.webp",
    href: "https://drsomaplasticsurgery.com/",
    kind: "Live Preview",
  },
  {
    title: "ASUS Service Quality Monitoring",
    description:
      "Service-quality monitoring system that collects customer surveys and applies Fuzzy SERVQUAL gap analysis with reporting and improvement recommendations.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts"],
    image: "/projects/asus-service-quality-home.webp",
    href: "https://asus-ten.vercel.app/",
    kind: "Live Preview",
  },
  {
    title: "SwapMate",
    description:
      "AI-guided token swaps on Uniswap v4 with natural-language intent parsing, risk checks, batch swaps, wallet analytics, and testnet execution.",
    stack: ["Next.js", "TypeScript", "Uniswap v4", "Wagmi", "Groq AI"],
    image: "/projects/swapmate-home.webp",
    href: "https://swapmate-eight.vercel.app/",
    kind: "Live Preview",
  },
  {
    title: "Andelin",
    description:
      "A platform for user booking and managing appointments for orderin web aplication, mobile, desktop aplication and admin panel with a clean and intuitive interface.",
    stack: ["Laravel", "Blade", "Bootstrap", "MySQL", "Midtrans"],
    image: "/projects/andelin-home.webp",
    href: "https://andelin.ruddypp.site",
    kind: "Live Preview",
  },
  {
    title: "E-Ensiklopedia Budaya",
    description:
      "Interactive education platform that combines science lessons with Madurese culture, complete with glossary, multimedia content, and admin tools.",
    stack: ["Laravel", "React", "Tailwind"],
    image: "/projects/ensiklopedia-home.webp",
    href: "https://ensiklopediaetnosainsmadura.site",
    kind: "Live Preview",
  },
  {
    title: "CMS Company Profile",
    description:
      "Content management system for creating and managing company profiles with a modern, responsive design.",
    stack: ["Next.js", "TypeScript", "prisma", "Tailwind", "supabase"],
    image: "/projects/cms-company-profile-home.webp",
    href: "https://www.jayafoodabdiindonesia.site/",
    kind: "Live Preview",
  },
  {
    title: "Signet",
    description:
      "A decentralized identity solution for secure and private digital interactions.",
    stack: ["React", "TypeScript", "Web3", "Vite", "Tailwind", "Story Protocol"],
    image: "/projects/signet-home.webp",
    href: "https://signet.my.id",
    kind: "Live Preview",
  },
];
