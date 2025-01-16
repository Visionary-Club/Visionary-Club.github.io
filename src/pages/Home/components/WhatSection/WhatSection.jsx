import React from 'react';
import { useTheme } from "../../../../hooks/DarkMode/DarkMode.jsx";

const WhatSection = () => {
    const { isDark } = useTheme();

    return (
        <div
            id="what-section"
            className={`min-h-screen relative flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20 ${
                isDark ? 'relative bg-transparent' : 'relative bg-transparent'
            }`}
        >
            {/* Blur Layer */}
            <div
                className="absolute inset-0 -z-1"
                style={{
                    backdropFilter: "blur(5px)",
                    pointerEvents: "none",
                }}
            ></div>
            <div
                className={`
                z-0
                    w-full max-w-8xl md:-mt-20 p-8 md:p-12
                    
                    backdrop-blur-[20px]
                    
                    relative
                    rounded-xl
              
                `}
                style={{
                    borderImage: isDark
                        ? 'linear-gradient(to right, rgb(6, 182, 212), rgb(182, 182, 0)) 1'
                        : 'linear-gradient(to right, rgb(6, 182, 212), rgb(234, 179, 8)) 1',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    backgroundClip: 'border-box',
                    borderRadius: '1rem',


                }}
            >
                <h2 className={`
                    text-3xl md:text-4xl lg:text-5xl 
                    font-mono mb-8 text-center 
                    ${isDark ? 'text-cyan-500' : 'text-black'}
                `}>
                    WHAT_WE_DO
                </h2>

                <div className={`space-y-6 font-mono ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p className="text-lg md:text-xl leading-relaxed text-center">
                        We are a tech-focused community dedicated to fostering innovation and collaboration in software
                        development, cybersecurity, and emerging technologies.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed text-center">
                        Our initiatives include:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
                        {/* Initiative Cards */}
                        <div className={`p-4 rounded-lg ${isDark ? 'bg-black/20' : 'bg-white/20'}`}>
                            <h3 className={`text-xl mb-2 ${isDark ? 'text-[#B6B600]' : 'text-yellow-500'}`}>
                                PROJECT_DEVELOPMENT
                            </h3>
                            <p>
                                Collaborative coding projects focusing on real-world applications and innovative
                                solutions.
                            </p>
                        </div>

                        <div className={`p-4 rounded-lg ${isDark ? 'bg-black/20' : 'bg-white/20'}`}>
                            <h3 className={`text-xl mb-2 ${isDark ? 'text-[#B6B600]' : 'text-yellow-500'}`}>
                                SKILL_ENHANCEMENT
                            </h3>
                            <p>Regular workshops, hackathons, and hands-on training sessions.</p>
                        </div>

                        <div className={`p-4 rounded-lg ${isDark ? 'bg-black/20' : 'bg-white/20'}`}>
                            <h3 className={`text-xl mb-2 ${isDark ? 'text-[#B6B600]' : 'text-yellow-500'}`}>
                                RESEARCH_&_INNOVATION
                            </h3>
                            <p>Exploring cutting-edge technologies and contributing to open-source projects.</p>
                        </div>

                        <div className={`p-4 rounded-lg ${isDark ? 'bg-black/20' : 'bg-white/20'}`}>
                            <h3 className={`text-xl mb-2 ${isDark ? 'text-[#B6B600]' : 'text-yellow-500'}`}>
                                COMMUNITY_BUILDING
                            </h3>
                            <p>Creating a network of tech enthusiasts and fostering knowledge sharing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatSection;