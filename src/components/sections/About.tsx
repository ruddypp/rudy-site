import Lottie from "lottie-react";
import rabbitAnimation from "../../assets/Remix of Rabbit Hi Without Statemachine.json";

const stackIcons = [
    { name: 'Laravel', src: '/stack/laravel.svg' },
    { name: 'Bootstrap', src: '/stack/bootstrap.svg' },
    { name: 'PHP', src: '/stack/php.svg' },
    { name: 'Bun', src: '/stack/bun.svg' },
    { name: 'Yarn', src: '/stack/yarn.svg' },
    { name: 'Typescript', src: '/stack/Typescript.png' },
    { name: 'JavaScript', src: '/stack/javascript.png' },
    { name: 'React', src: '/stack/react.webp' },
    { name: 'Next.js', src: '/stack/nextjs.png' },
    { name: 'Node.js', src: '/stack/nodejs.svg' },
    { name: 'Express', src: '/stack/express.webp' },
    { name: 'Tailwind CSS', src: '/stack/tailwind.png' },
    { name: 'MySQL', src: '/stack/mysql.png' },
    { name: 'PostgreSQL', src: '/stack/psql.png' },
    { name: 'Solidity', src: '/stack/solidity.png' },
    { name: 'Hardhat', src: '/stack/hardhat.png' },
    { name: 'Fedora', src: '/stack/fedora.png' },
];

export default function About() {
    return (
        <section id="about" className="container mx-auto px-6 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-6xl mx-auto">
                <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-10">
                    <div className="relative bg-[#B98EFC] rounded-[40px] p-6 pt-16 shadow-xl flex flex-col items-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-white rounded-b-[24px]"></div>

                        <svg className="absolute top-20 -left-6 w-16 h-16 text-[#2EEDA2] opacity-90" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M40 10 C30 30, 10 30, 10 50 C10 70, 30 80, 50 80 C70 80, 80 60, 80 40 C80 20, 60 10, 40 10" />
                        </svg>

                        <svg className="absolute bottom-24 -right-8 w-20 h-20 text-[#2EEDA2] opacity-90 scale-x-[-1]" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M40 10 C30 30, 10 30, 10 50 C10 70, 30 80, 50 80 C70 80, 80 60, 80 40 C80 20, 60 10, 40 10" />
                        </svg>

                        <div className="relative w-[280px] mt-2 mb-4 z-10 flex justify-center">
                            <img src="/images/rudyy.png" alt="Rudy Paningal" className="w-[85%] h-auto max-h-[300px] object-cover object-bottom" />
                        </div>

                        <div className="w-full bg-white/30 border-2 border-white/40 text-white font-bold py-3 px-6 rounded-3xl shadow-sm z-10 text-center text-lg">
                            Rudy Paningal
                        </div>

                        <div className="absolute inset-4 border-[3px] border-dashed border-white/40 rounded-[28px] pointer-events-none z-0"></div>
                    </div>

                    <div className="hidden lg:flex w-full justify-center items-center -translate-x-8">
                        <Lottie animationData={rabbitAnimation} loop className="w-64 h-auto opacity-90 drop-shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
                    </div>
                </div>

                <div className="w-full lg:flex-1 flex flex-col gap-6">
                    <div className="relative overflow-hidden bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-[32px] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 dark:border-white/10">
                        <img
                            src="/decor/dot-swoosh.svg"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none absolute right-6 top-6 hidden w-32 opacity-75 lg:block"
                        />
                        <img
                            src="/decor/orbit-ring.svg"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none absolute bottom-5 right-6 hidden w-16 opacity-80 xl:block"
                        />
                        <div className="inline-block bg-brand-purple hover:bg-brand-purple/90 transition-colors text-white font-bold py-2.5 px-8 rounded-full mb-8 text-lg">
                            About
                        </div>

                        <div className="text-brand-navy/80 dark:text-white/80 text-lg leading-relaxed space-y-6 text-justify">
                            <p>
                                Hi, I&apos;m <strong className="text-brand-navy dark:text-white">Rudy Paningal</strong>, a full-stack web developer based in Indonesia. I build business systems, company profiles, and SEO-focused content platforms. I&apos;m currently focusing on backend development and keep an interest in Web3.
                            </p>
                            <p>
                                At Daiki Media, I work on the technical side of SEO: implementing metadata, canonicals, redirects, sitemaps, robots rules, structured data, and automated checks that help websites stay clear and consistent as they grow.
                            </p>
                            <p>
                                Outside my internship, I work freelance on web apps, mobile applications, and desktop applications—from requirements through database design, APIs, authentication, and deployment. I enjoy the overlap between product engineering and discoverability—making sites easier to use, easier to maintain, and easier for search engines to understand.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-[32px] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 dark:border-white/10">
                        <img
                            src="/decor/pill-stack.svg"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none absolute right-5 top-5 hidden w-20 opacity-80 lg:block"
                        />
                        <img
                            src="/decor/spark-wave.svg"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-3 right-8 hidden w-28 opacity-60 xl:block"
                        />
                        <div className="inline-block bg-brand-purple hover:bg-brand-purple/90 transition-colors text-white font-bold py-2 px-8 rounded-full mb-6 text-lg">
                            Tools
                        </div>

                        <div className="relative z-10 flex flex-wrap gap-4 sm:gap-6 mt-2">
                            {stackIcons.map((tool) => (
                                <div key={tool.name} className="flex flex-col items-center group cursor-pointer">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-lg hover:-translate-y-2 hover:border-brand-purple/40 dark:hover:border-brand-purple/40 transition-all">
                                        <img src={tool.src} alt={tool.name} className="w-full h-full object-contain" />
                                    </div>
                                    <p className="mt-2 text-xs font-semibold text-brand-navy/70 dark:text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {tool.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
