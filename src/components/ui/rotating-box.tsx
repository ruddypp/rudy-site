import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface RotatingBoxProps {
    className?: string;
}

export function RotatingBox({ className }: RotatingBoxProps) {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boxRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(boxRef.current, {
                rotation: 360,
                ease: "none",
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                }
            });
        }, boxRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={boxRef}
            className={cn(
                "rounded-[2rem] opacity-70 shadow-2xl backdrop-blur-md",
                className
            )}
        >
            <div className="w-full h-full rounded-[2rem] border-2 border-white/20 dark:border-white/10" />
        </div>
    );
}
