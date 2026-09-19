import Navbar from '../components/ui/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Footer from '../components/ui/Footer';
import { DotPattern } from "../components/ui/dot-pattern";
import { cn } from "../lib/utils";
import LazyLottie from "../components/ui/LazyLottie";
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import Seo, { SITE_URL } from "../components/seo/Seo";
import { caseStudies } from "../data/caseStudies";

const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Rudy Paningal",
            url: `${SITE_URL}/`,
            image: `${SITE_URL}/images/rudyy.webp`,
            jobTitle: "Full Stack Developer & Technical SEO Specialist",
            email: "mailto:paningalrudy@gmail.com",
            knowsAbout: [
                "Full Stack Web Development",
                "Technical SEO",
                "Laravel",
                "React",
                "Next.js",
                "TypeScript",
            ],
            sameAs: [
                "https://github.com/ruddypp",
                "https://linkedin.com/in/rudypaningal",
                "https://instagram.com/ruddypp",
            ],
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: "Rudy Paningal — Portfolio",
            description:
                "Portfolio of Rudy Paningal, full stack developer and technical SEO specialist.",
            inLanguage: "en",
            publisher: { "@id": `${SITE_URL}/#person` },
        },
        {
            "@type": "ProfilePage",
            "@id": `${SITE_URL}/#webpage`,
            url: `${SITE_URL}/`,
            name: "Rudy Paningal — Full Stack Developer & Technical SEO",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#person` },
            inLanguage: "en",
            hasPart: caseStudies.map((study) => ({
                "@type": "Article",
                headline: study.metaTitle,
                url: `${SITE_URL}/projects/${study.slug}`,
            })),
        },
    ],
};

export default function Home() {
    return (
        <div className="relative min-h-screen font-sans overflow-hidden bg-background text-foreground transition-colors duration-300">
            <Seo
                title="Rudy Paningal — Full Stack Developer & Technical SEO"
                description="Full stack developer and technical SEO specialist. Laravel, React, and Next.js projects shipped for real clients. See the work and start your project."
                path="/"
                jsonLd={homeJsonLd}
            />
            <SmoothCursor />
            <div className="fixed inset-0 z-0 pointer-events-none">
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(100vw_circle_at_center,white,transparent)]",
                        "opacity-50 w-full h-full text-brand-navy/20 dark:text-white/20"
                    )}
                />
            </div>
            <div className="relative z-10 flex flex-col gap-8 pb-6 lg:gap-10">
                <Navbar />
                <Hero />
                <div className="relative w-full overflow-hidden pt-2">
                    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60 pointer-events-none mix-blend-multiply">
                        <LazyLottie
                            src="/lottie/bubbles.json"
                            loop
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 flex flex-col gap-2 lg:gap-3">
                        <About />
                        <Experience />
                        <Projects />
                        <Contact />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
