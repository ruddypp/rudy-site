import Navbar from '../components/ui/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import { DotPattern } from "../components/ui/dot-pattern";
import { cn } from "../lib/utils";
import Lottie from "lottie-react";
import bubblesAnimation from "../assets/Bubbles.json";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-white font-sans text-brand-navy overflow-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(100vw_circle_at_center,white,transparent)]",
                        "opacity-50 w-full h-full"
                    )}
                />
            </div>
            <div className="relative z-10 flex flex-col pt-24 pb-24">
                <Navbar />
                <Hero />
                <div className="relative w-full overflow-hidden mt-24">
                    {/* Background Lottie Animation */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60 pointer-events-none mix-blend-multiply">
                        <Lottie
                            animationData={bubblesAnimation}
                            loop
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 flex flex-col gap-24">
                        <About />
                        <Experience />
                    </div>
                </div>
            </div>
        </div>
    );
}
