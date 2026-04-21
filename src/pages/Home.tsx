import Navbar from '../components/ui/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Footer from '../components/ui/Footer';
import { DotPattern } from "../components/ui/dot-pattern";
import { cn } from "../lib/utils";
import Lottie from "lottie-react";
import bubblesAnimation from "../assets/Bubbles.json";
import { SmoothCursor } from "@/components/ui/smooth-cursor"

export default function Home() {
    return (
        <div className="relative min-h-screen font-sans overflow-hidden bg-background text-foreground transition-colors duration-300">
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
                        <Lottie
                            animationData={bubblesAnimation}
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
