import { RotatingBox } from '../ui/rotating-box';

const experiences = [
    {
        id: 1,
        role: "Web Developer Intern – Technical SEO",
        company: "Daiki Media Malaysia",
        date: "Jun 2026 - Present",
        description: "Implement technical SEO directly on client websites, including metadata, canonicals, redirects, sitemaps, robots rules, structured data, internal-link safeguards, and automated verification. Translate SEO implementation sheets into production-ready web changes and audit fixes with a developer-first approach."
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "Freelance - Self Employed",
        date: "Jun 2025 - Present",
        description: "Developed more than 5 full-stack web applications. Handled both frontend and backend development, including database design, API integration, authentication, and basic deployment. Worked directly with clients to understand requirements and deliver functional, user-friendly web applications."
    },
    {
        id: 3,
        role: "Full Stack Developer",
        company: "PT. Paramata Baraya Internasional",
        date: "Mar 2025 - Dec 2025",
        description: "Designed and developed a full-stack Equipment Inventory and Maintenance Management System to improve asset monitoring and maintenance efficiency. Built features such as inventory tracking, rental management, maintenance and calibration scheduling, automated notifications, role-based access control, activity logging, and user management. Structured the application with scalable architecture using Next.js, integrated APIs, managed authentication, and optimized database interactions to ensure performance and reliability."
    },
    {
        id: 4,
        role: "Teaching Assistant Programming Java",
        company: "Universitas Pamulang",
        date: "Apr 2024 - Jul 2024",
        description: "Guided over 20 students in understanding core programming concepts. Ensured 95% of students successfully used Java by providing installation and setup guidance."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative container mx-auto px-6 py-7 lg:py-9">
            <div className="absolute top-20 -left-6 lg:left-12 xl:left-32 z-0 opacity-50 md:opacity-100">
                <RotatingBox className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-[#B98EFC] to-pink-400 dark:from-[#B98EFC]/60 dark:to-pink-500/60" />
            </div>

            <div className="absolute bottom-20 -right-6 lg:right-12 xl:right-32 z-0 opacity-50 md:opacity-100">
                <RotatingBox className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-500/60 dark:to-blue-600/60" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="relative overflow-hidden bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-[32px] p-6 lg:p-10 border border-white/50 dark:border-white/10">
                    <img
                        src="/decor/starburst.svg"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute right-5 top-5 hidden w-16 opacity-80 lg:block"
                    />
                    <img
                        src="/decor/dot-swoosh.svg"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-5 left-6 hidden w-28 opacity-65 xl:block"
                    />
                    <div className="inline-block bg-[#B98EFC] text-white font-bold py-2 px-6 rounded-full text-base">
                        Experience
                    </div>

                    <div className="relative z-10 mt-6 flex flex-col gap-4">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="rounded-[26px] border border-brand-purple/10 bg-[#fcfbff] dark:bg-slate-950/60 p-5 sm:p-6">
                                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[170px_1fr] lg:gap-6">
                                    <div className="flex flex-col gap-3">
                                        <span className="w-fit rounded-full bg-brand-purple/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-purple">
                                            {exp.date}
                                        </span>
                                        <div className="hidden lg:block h-full w-px bg-brand-purple/15 ml-4"></div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl lg:text-2xl font-bold text-brand-navy dark:text-white">
                                            {exp.role}
                                        </h3>
                                        <p className="mt-1 text-base lg:text-lg text-brand-purple font-semibold">
                                            {exp.company}
                                        </p>

                                        {exp.description && (
                                            <p className="mt-4 text-sm lg:text-base text-brand-navy/80 dark:text-white/80 leading-7">
                                                {exp.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
