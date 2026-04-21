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
    title: "XSignature",
    description:
      "REST API for an auto garage platform with multi-role authentication, service booking, Midtrans payments, and PostgreSQL-powered operational flows.",
    stack: ["React","Express", "PostgreSQL", "JWT", "Midtrans"],
    image: "/projects/xsignature.svg",
    href: "https://xsignature.ruddypp.site",
    kind: "Live Preview",
  },
  {
    title: "Absensi-App",
    description:
      "Attendance and operations dashboard built as an admin system with structured data monitoring, role handling, and an efficient internal workflow.",
    stack: ["Laravel", "Blade", "Bootstrap", "MySQL"],
    image: "/projects/absensia.svg",
    href: "https://abnsensiapp.ruddypp.site",
    kind: "Live Preview",
  },
  {
    title: "Andelin",
    description:
      "A platform for user booking and managing appointments for orderin web aplication, mobile, desktop aplication and admin panel with a clean and intuitive interface.",
    stack: ["Laravel", "Blade", "Bootstrap", "MySQL", "Midtrans"],
    image: "/projects/rinciin.svg",
    href: "https://andelin.ruddypp.site",
    kind: "Live Preview",
  },
  {
    title: "E-Ensiklopedia Budaya",
    description:
      "Interactive education platform that combines science lessons with Madurese culture, complete with glossary, multimedia content, and admin tools.",
    stack: ["Laravel", "React", "Tailwind"],
    image: "/projects/ensiklopedia.svg",
    href: "https://ensiklopediaetnosainsmadura.site",
    kind: "Live Preview",
  },
  {
    title: "CMS Company Profile",
    description:
      "Content management system for creating and managing company profiles with a modern, responsive design.",
    stack: ["Next.js", "TypeScript", "prisma", "Tailwind", "supabase"],
    image: "/projects/minikit.svg",
    href: "https://www.jayafoodabdiindonesia.site/",
    kind: "Live Preview",
  },
  {
    title: "Piggy Bank",
    description:
      "Personal budgeting app with a lightweight UI for tracking savings goals, cash flow, and daily money habits.",
    stack: ["React", "TypeScript", "Vite", "CSS","Solidity"],
    image: "/projects/piggybank.svg",
    href: "https://piggybank-lyart.vercel.app",
    kind: "Live Preview",
  },
  {
    title: "Signet",
    description:
      "A decentralized identity solution for secure and private digital interactions.",
    stack: ["React", "TypeScript", "Web3", "Vite", "Tailwind", "Story Protocol"],
    image: "/projects/impactchain.svg",
    href: "https://signet.my.id",
    kind: "Live Preview",
  },
  {
    title: "RS Citra Medika Queue",
    description:
      "Android hospital queue app with patient and staff flows, clinic management, and a more organized registration experience.",
    stack: ["Kotlin", "SQLite", "Jetpack", "Material"],
    image: "/projects/rscitra.svg",
    href: "https://github.com/ruddypp/rs-citra-medika",
    kind: "GitHub Repo",
  },
];
