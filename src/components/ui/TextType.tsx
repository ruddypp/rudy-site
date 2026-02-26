import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface TextTypeProps {
    text?: string[];
    texts?: string[];
    typingSpeed?: number;
    pauseDuration?: number;
    showCursor?: boolean;
    cursorCharacter?: string;
    deletingSpeed?: number;
    variableSpeedEnabled?: boolean;
    variableSpeedMin?: number;
    variableSpeedMax?: number;
    cursorBlinkDuration?: number;
    className?: string;
}

const TextType: React.FC<TextTypeProps> = ({
    text,
    texts,
    typingSpeed = 75,
    pauseDuration = 1500,
    showCursor = true,
    cursorCharacter = "_",
    deletingSpeed = 50,
    variableSpeedEnabled = false,
    variableSpeedMin = 60,
    variableSpeedMax = 120,
    cursorBlinkDuration = 0.5,
    className = ""
}) => {
    const allTexts = texts || text || [];
    const [displayText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const cursorRef = useRef<HTMLSpanElement>(null);

    // Use GSAP for the cursor blinking effect (as requested/expected)
    useEffect(() => {
        let ctx = gsap.context(() => {
            if (showCursor && cursorRef.current) {
                gsap.to(cursorRef.current, {
                    opacity: 0,
                    ease: "power2.inOut",
                    repeat: -1,
                    yoyo: true,
                    duration: cursorBlinkDuration
                });
            }
        });
        return () => ctx.revert();
    }, [showCursor, cursorBlinkDuration]);

    // Main typing logic
    useEffect(() => {
        if (allTexts.length === 0) return;

        let timeout: ReturnType<typeof setTimeout>;
        const currentFullText = allTexts[currentIndex];

        const getSpeed = (isDeletingMode: boolean) => {
            if (isDeletingMode) return deletingSpeed;
            if (variableSpeedEnabled) {
                return Math.floor(Math.random() * (variableSpeedMax - variableSpeedMin + 1)) + variableSpeedMin;
            }
            return typingSpeed;
        };

        if (isDeleting) {
            if (displayText === "") {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % allTexts.length);
            } else {
                timeout = setTimeout(() => {
                    setDisplayedText(currentFullText.substring(0, Math.max(0, displayText.length - 1)));
                }, getSpeed(true));
            }
        } else {
            if (displayText === currentFullText) {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseDuration);
            } else {
                timeout = setTimeout(() => {
                    setDisplayedText(currentFullText.substring(0, displayText.length + 1));
                }, getSpeed(false));
            }
        }

        return () => clearTimeout(timeout);
    }, [
        displayText, isDeleting, currentIndex, allTexts,
        typingSpeed, pauseDuration, deletingSpeed,
        variableSpeedEnabled, variableSpeedMin, variableSpeedMax
    ]);

    return (
        <span className={`inline-block ${className}`}>
            {displayText}
            {showCursor && <span ref={cursorRef} className="ml-0.5">{cursorCharacter}</span>}
        </span>
    );
};

export default TextType;
