import { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

interface RotatingBoxProps {
    className?: string;
}

export function RotatingBox({ className }: RotatingBoxProps) {
    const boxRef = useRef<HTMLDivElement>(null);

    // GSAP is loaded on demand so it stays out of the initial bundle; the box
    // itself is server-rendered either way, only the scroll animation waits.
    useEffect(() => {
        if (!boxRef.current) return;

        let cancelled = false;
        let ctx: { revert: () => void } | undefined;

        Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
            ([{ default: gsap }, { ScrollTrigger }]) => {
                if (cancelled || !boxRef.current) return;
                gsap.registerPlugin(ScrollTrigger);
                ctx = gsap.context(() => {
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
            },
        );

        return () => {
            cancelled = true;
            ctx?.revert();
        };
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
