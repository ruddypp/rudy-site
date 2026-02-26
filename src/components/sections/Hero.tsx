import Lottie from "lottie-react";
import animation from "../../assets/AdQuanto.json";
import TextType from "../ui/TextType";
export default function Hero() {
    return (
        <main className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 pt-10 md:pt-10 lg:pt-10 gap-12">
            <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">

                <h1 className="w-full text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-brand-navy">
                    Hi, I'm <br className="hidden md:block" />
                    <span className="text-brand-purple underline decoration-brand-purple/30 decoration-4 sm:decoration-8 underline-offset-4 sm:underline-offset-8">Rudy Paningal,</span>
                </h1>

                <div className="mt-4 sm:mt-6 min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-brand-navy/80 max-w-2xl">
                    <TextType
                        className="whitespace-pre-line"
                        texts={["Full-Stack Developer\nBased in Indonesia."]}
                        typingSpeed={50}
                        pauseDuration={4000}
                        showCursor={true}
                        cursorCharacter="|"
                        deletingSpeed={30}
                        variableSpeedEnabled={true}
                        variableSpeedMin={40}
                        variableSpeedMax={90}
                        cursorBlinkDuration={0.5}
                    />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="rounded-full bg-brand-purple px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:brightness-110">
                        View My Work
                    </button>
                    <button className="rounded-full border-2 border-brand-navy px-8 py-4 font-bold text-brand-navy transition-all hover:bg-brand-navy hover:text-white">
                        Download Resume
                    </button>
                </div>
            </div>

            {/* Lottie Animation Side */}
            <div className="flex-1 w-full max-w-lg lg:max-w-xl self-start lg:-mt-6 xl:-mt-10">
                <Lottie animationData={animation} loop className="w-full h-auto drop-shadow-xl" />
            </div>
        </main>
    );
}
