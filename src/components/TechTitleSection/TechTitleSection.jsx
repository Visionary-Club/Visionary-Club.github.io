import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from "../../hooks/DarkMode/DarkMode.jsx";

const TechTitleSection = () => {
    const { isDark } = useTheme();
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const title = "SYSTEM CAPABILITIES";
    const sectionRef = useRef(null);
    const [isTyping, setIsTyping] = useState(true);
    useEffect(() => {
        if (!isInView) return;
        setIsInView(true);
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < title.length) {
                setDisplayedTitle(title.substring(0, index + 1));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(typingInterval);
            }
        }, 150);

        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, [isInView]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`w-full mt-[4rem] border-b-2 ${
                isDark
                    ? 'border-cyan-500 bg-[#101010]'
                    : 'border-gray-300 bg-white'
            }`}
        >
            <div className="p-4 flex flex-col items-center">
                <div className="flex items-center mb-2">
                    <span className={`mr-2 ${
                        isDark ? 'text-cyan-500' : 'text-gray-800'
                    }`}>$</span>
                    <span className={
                        isDark ? 'text-[#B6B600]' : 'text-yellow-500'
                    }>sudo ./display_capabilities.sh</span>
                </div>
                <h1 className={`text-3xl md:text-5xl font-bold font-mono tracking-wider ${
                    isDark ? 'text-cyan-500' : 'text-gray-800'
                }`}>
                    {displayedTitle}


                    {isTyping && (
                    <span
                        className={`md:inline-block w-4 h-8 ml-1  ${
                            isDark ? 'bg-cyan-500' : 'bg-yellow-500'
                        }`}
                    ></span>
                        )}
                </h1>
                <div className={`mt-2 flex gap-4 font-mono text-sm ${
                    isDark ? 'text-[#B6B600]' : 'text-yellow-500'
                }`}>
                    <span>[INITIALIZED]</span>
                    <span>[SECURE]</span>
                    <span>[READY]</span>
                </div>
            </div>
        </div>
    );
};

export default TechTitleSection;