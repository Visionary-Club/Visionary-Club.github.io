import React, { useCallback, useState, useEffect } from 'react';
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import { useTheme } from "../../../../hooks/DarkMode/DarkMode.jsx";
import { particlesConfig } from "../../../../config/particlesConfig.js";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import ParticlesBackground from "../../../../components/Practicles/Practicles.jsx";

const HeroSection = ({ scrollToNext, next }) => {
    const { isDark } = useTheme();

    const [blurAmount, setBlurAmount] = useState(0);

    const handleScroll = useCallback(() => {
        // Calculate blur amount based on scroll position
        const scrollTop = window.scrollY; // Current scroll position
        const maxBlur = 10; // Max blur value
        const maxScroll = 200; // Scroll threshold for max blur
        const newBlur = Math.min((scrollTop / maxScroll), maxBlur);
        setBlurAmount(newBlur);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div
            id="hero-section"
            className={`min-h-dvh snap-start flex flex-col justify-between md:snap-none lg:mb-0 ${
                isDark ? 'relative bg-transparent' : 'relative bg-gradient-to-r from-cyan-100 to-white'
            }`}
        >
            <ParticlesBackground init={particlesInit} loaded={particlesLoaded} />
            {/* Blur Layer */}
            <div
                className="absolute inset-0 -z-1"
                style={{
                    backdropFilter: "blur(5px)",
                    WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                    maskImage: "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                    pointerEvents: "none",
                }}
            ></div>
            <div
                className={`z-0 flex flex-grow items-center px-4 sm:px-6 md:px-8 lg:px-20 pt-16 md:pt-20 lg:pt-12 transition-all duration-200`}

            >
                <div className="w-full md:w-auto md:border-l-4 md:border-cyan-500 text-center md:text-left md:pl-4">
                    <h1
                        className={`text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl font-mono mb-3 md:mb-4 ${
                            isDark ? 'text-cyan-500' : 'text-black'
                        }`}
                    >
                        VISIONARY CLUB
                    </h1>
                    <p
                        className={`text-sm sm:text-base md:text-lg font-mono mb-6 md:mb-8 ${
                            isDark ? 'text-[#B6B600]' : 'text-[#FFBF00]'
                        }`}
                    >
                        INIT_SYSTEM_ACCESS::TECH_DIVISION
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                        <Link
                            to="/contact"
                            className={`w-full sm:w-44 bg-cyan-500 px-4 md:px-6 py-3.5  md:py-3 text-sm sm:text-base font-mono font-bold leading-none rounded-lg transition-colors text-center ${
                                isDark
                                    ? 'text-black hover:bg-[#B6B600] hover:text-black'
                                    : 'text-black hover:bg-yellow-300 hover:text-black'
                            }`}
                        >
                            CONTACT US
                        </Link>
                        <Link
                            to="/projects"
                            className={`w-full sm:w-44 border px-4 md:px-6 py-3.5 md:py-3 text-sm sm:text-base font-mono leading-none rounded-lg transition-colors text-center ${
                                isDark
                                    ? 'border-cyan-500 text-cyan-500 hover:border-[#B6B600] hover:text-[#B6B600]'
                                    : 'border-black text-black bg-black/10 hover:bg-yellow-500/20 hover:border-[#808000] hover:text-black'
                            }`}
                        >
                            VIEW_PROJECTS
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <button
                    onClick={() => scrollToNext(next)}
                    className={`border-none transition-colors animate-bounce focus:outline-none focus:ring-0 hidden md:block ${
                        isDark
                            ? 'text-cyan-500 hover:text-[#B6B600]'
                            : 'text-black hover:text-yellow-300'
                    }`}
                >
                    <ChevronDown size={48} />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
