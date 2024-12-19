import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import TitleSection from "../TitleSection/TitleSection.jsx";
import { Terminal, Monitor, Shield, Cpu } from 'lucide-react';
import TechTitleSection from "../TechTitleSection/TechTitleSection.jsx";
import {useTheme} from "../../hooks/DarkMode/DarkMode.jsx";

const WhatSection = ({ scrollToNext, next }) => {
    const [selectedContent, setSelectedContent] = useState('intro');
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [isScrollLocked, setIsScrollLocked] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);
    const contentRef = useRef('');
    const [isInitialRender, setIsInitialRender] = useState(true);
    const { isDark } = useTheme();

    const categories = [
        {
            id: 'intro',
            label: 'SYSTEM OVERVIEW',
            icon: <Terminal className="w-5 h-5" />,
            content: "  The Visionary Club is a dynamic and innovative college organization that focuses on advancing knowledge and skills in cutting-edge fields. "
        },
        {
            id: 'ai',
            label: 'AI MODULE',
            icon: <Monitor className="w-5 h-5" />,
            content: "  Our AI initiatives include machine learning workshops, deep learning projects, and practical implementations of neural networks."
        },
        {
            id: 'cyber',
            label: 'SECURITY CORE',
            icon: <Shield className="w-5 h-5" />,
            content: "  In Cybersecurity, we focus on ethical hacking, network security, and defensive programming. "
        },
        {
            id: 'iot',
            label: 'IOT FRAMEWORK',
            icon: <Cpu className="w-5 h-5" />,
            content: "  Our IoT projects combine hardware and software skills, working with sensors, microcontrollers, and cloud connectivity to build smart solutions."
        }
    ];

    useEffect(() => {
        // Ensure typing starts on initial render or when content is in view
        if (isInitialRender || isInView) {
            setIsTyping(true);
            setDisplayedText('');
            const currentContent = categories.find(cat => cat.id === selectedContent)?.content || '';
            contentRef.current = currentContent;
            let currentIndex = 0;

            const typingInterval = setInterval(() => {
                if (currentIndex < contentRef.current.length) {
                    setDisplayedText(contentRef.current.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    setIsTyping(false);
                    clearInterval(typingInterval);
                }
            }, 20);

            // After first render, update the flag to false
            if (isInitialRender) {
                setIsInitialRender(false);
            }

            return () => clearInterval(typingInterval);
        }
    }, [selectedContent, isInView, isInitialRender]);


    // Intersection Observer setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsInView(true);  // Set state to true when in view
                }
            },
            {
                threshold: 0.5, // Trigger when 10% of the element is in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Start observing the section
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Cleanup observer
            }
        };
    }, []);

    // Scroll handling
    useEffect(() => {
        let timeoutId;

        const handleWheel = (e) => {
            if (!isScrollLocked || !isInView) return;

            const currentIndex = categories.findIndex(cat => cat.id === selectedContent);

            // Allow default upward scroll at the first item
            if (e.deltaY < 0 && currentIndex === 0) {
                setIsScrollLocked(false); // Unlock scroll for natural upward behavior
                return;
            }

            // Allow default downward scroll at the last item
            if (e.deltaY > 0 && currentIndex === categories.length - 1) {
                setIsScrollLocked(false); // Unlock scroll for natural downward behavior
                return;
            }

            // Prevent default scrolling and handle navigation
            e.preventDefault();
            if (timeoutId) return;

            timeoutId = setTimeout(() => {
                if (e.deltaY > 0) {
                    // Scroll Down
                    if (currentIndex < categories.length - 1) {
                        setSelectedContent(categories[currentIndex + 1].id);
                    }
                } else if (e.deltaY < 0) {
                    // Scroll Up
                    if (currentIndex > 0) {
                        setSelectedContent(categories[currentIndex - 1].id);
                    }
                }
                timeoutId = null;
            }, 200);
        };

        if (isInView) {
            window.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            window.removeEventListener('wheel', handleWheel);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [selectedContent, isScrollLocked, isInView]);

    return (
        <div
            ref={sectionRef}
            id="what-section"
            className={`w-screen min-h-screen snap-start relative flex flex-col
                ${isDark ? 'bg-[#101010]' : 'bg-white'}`}
        >
            <TechTitleSection />

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                {/* Left panel - Buttons */}
                <div className="flex flex-col gap-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedContent(category.id)}
                            className={`
                                group relative overflow-hidden
                                border-2 rounded-lg 
                                transition-all duration-300
                                focus:ring-0 focus:outline-none
                                ${isDark
                                ? `border-cyan-500 text-cyan-500 bg-[#010101]/60 hover:border-[#B6B600]
                                       ${selectedContent === category.id
                                    ? 'bg-cyan-500/15 text-[#B6B600] border-[#B6B600]'
                                    : ''}`
                                : `border-gray-300 text-gray-800 bg-gray-100 hover:border-yellow-500 hover:text-black
                                       ${selectedContent === category.id
                                    ? 'bg-yellow-100 border-yellow-500 text-black'
                                    : ''}`
                            }
                            `}
                        >
                            <div className={`absolute inset-0 transform -skew-x-12 -translate-x-full 
                                group-hover:translate-x-0 transition-transform duration-300
                                ${isDark ? 'bg-cyan-500/10' : 'bg-yellow-50'}`}>
                            </div>
                            <div className="relative p-4 flex items-center gap-3 font-mono">
                                {category.icon}
                                <span>{category.label}</span>
                                <span className="ml-auto opacity-50">[{selectedContent === category.id ? 'ACTIVE' : 'STANDBY'}]</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Right panel - Terminal Output */}
                <div className={`md:col-span-2 border-2 rounded-lg h-[16rem] md:h-full overflow-hidden
                    ${isDark
                    ? 'border-cyan-500 bg-[#101010]'
                    : 'border-gray-300 bg-gray-50'}`}
                >
                    <div className={`${isDark? 'bg-gray-800':'bg-gray-200'} p-2 flex items-center`}>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div
                            className={`flex-1 text-center text-sm font-mono ${
                                isDark ? 'text-gray-400' : 'text-gray-700'
                            }`}
                        >
                            module-details.txt
                        </div>
                    </div>
                    <div className="p-6 font-mono">
                        <div className="flex items-center mb-2">
                            <span className={`mr-2 ${isDark ? 'text-cyan-500' : 'text-gray-800'}`}>$</span>
                            <span className={isDark ? 'text-[#B6B600]' : 'text-yellow-500'}>
                                cat {categories.find(cat => cat.id === selectedContent)?.label.toLowerCase()}.txt
                            </span>
                        </div>
                        <p className={`text-[16px] lg:text-xl leading-relaxed
                            ${isDark ? 'text-[#B6B600]' : 'text-gray-800'}`}
                        >
                            {displayedText}
                            {isTyping && (
                                <span className={`inline-block w-2 h-4 ml-1 animate-pulse
                                    ${isDark ? 'bg-[#B6B600]' : 'bg-yellow-500'}`}
                                ></span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatSection;