// import React from 'react';
//
// const TitleSection = ({ title, extraParams = "", enableCard = false, fontSize = "5xl" }) => {
//     return (
//         <div className={`h-[45vh] -mb-[10vh] flex justify-center items-center `}>
//             {enableCard ? (
//                 <div className={`${extraParams} border-2 border-cyan-500 rounded-lg p-6 shadow-lg w-[90vw] mx-auto flex justify-center items-center`}>
//                     <div className="relative inline-block px-12 py-6">
//                         {/* Top left diagonal dash */}
//                         <div className="absolute -top-2 -left-6 w-12 h-[1.5px] bg-cyan-500 -rotate-45 origin-right"></div>
//
//                         {/* Top horizontal dash */}
//                         <div className="absolute -top-2 left-6 right-[15.25rem] h-[1.5px] bg-cyan-500"></div>
//
//                         {/* Bottom horizontal dash */}
//                         <div className="absolute -bottom-2 left-56 right-6 h-[1.5px] bg-cyan-500"></div>
//
//                         {/* Bottom right diagonal dash */}
//                         <div className="absolute -bottom-2 -right-6 w-12 h-[1.5px] bg-cyan-500 -rotate-45 origin-left"></div>
//
//                         {/* Create dashed effect using multiple small divs */}
//                         {[...Array(8)].map((_, i) => (
//                             <React.Fragment key={i}>
//                                 <div
//                                     className="absolute -top-2 h-[1.5px] w-1 bg-cyan-500"
//                                     style={{ left: `${30 + i * 5}%` }}
//                                 ></div>
//                                 <div
//                                     className="absolute -bottom-2 h-[1.5px] w-1 bg-cyan-500"
//                                     style={{ left: `${30 + i * 5}%` }}
//                                 ></div>
//                             </React.Fragment>
//                         ))}
//
//                         <h1 className={`font-mono text-cyan-500 text-center text-${fontSize}`}>{title}</h1>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="relative inline-block px-12 py-6">
//                     {/* Top left diagonal dash */}
//                     <div className="absolute -top-2 -left-6 w-12 h-[1.5px] bg-cyan-500 -rotate-45 origin-right"></div>
//
//                     {/* Top horizontal dash */}
//                     <div className="absolute -top-2 left-6 right-60 h-[1.5px] bg-cyan-500"></div>
//
//                     {/* Bottom horizontal dash */}
//                     <div className="absolute -bottom-2 left-56 right-6 h-[1.5px] bg-cyan-500"></div>
//
//                     {/* Bottom right diagonal dash */}
//                     <div className="absolute -bottom-2 -right-6 w-12 h-[1.5px] bg-cyan-500 -rotate-45 origin-left"></div>
//
//                     {/* Create dashed effect using multiple small divs */}
//                     {[...Array(8)].map((_, i) => (
//                         <React.Fragment key={i}>
//                             <div
//                                 className="absolute -top-2 h-[1.5px] w-1 bg-cyan-500"
//                                 style={{ left: `${30 + i * 5}%` }}
//                             ></div>
//                             <div
//                                 className="absolute -bottom-2 h-[1.5px] w-1 bg-cyan-500"
//                                 style={{ left: `${30 + i * 5}%` }}
//                             ></div>
//                         </React.Fragment>
//                     ))}
//
//                     <h1 className={`font-mono text-cyan-500 text-center text-${fontSize}`}>{title}</h1>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default TitleSection;

// import React, { useEffect, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import {useTheme} from "../../hooks/DarkMode/DarkMode.jsx";
//
// const TitleSection = ({
//                           title,
//                           extraParams = "",
//                           enableCard = false,
//                           fontSize = "5xl"
//                       }) => {
//     const titleRef = useRef(null);
//     const controls = useAnimation();
//     const {isDark} = useTheme();
//
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         controls.start('visible');
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );
//
//         if (titleRef.current) {
//             observer.observe(titleRef.current);
//         }
//
//         return () => {
//             if (titleRef.current) {
//                 observer.unobserve(titleRef.current);
//             }
//         };
//     }, [controls]);
//
//     const topLeftDashVariants = {
//         hidden: {
//             pathLength: 0,
//             x: '-100vw', // Start from the far left of the viewport
//             y: '-100%'  // Start from the top of the viewport
//         },
//         visible: {
//             pathLength: 1,
//             x: 0,
//             y: 0,
//             transition: {
//                 duration: 0.5,
//                 ease: "easeOut"
//             }
//         }
//     };
//
//     const topRightDashVariants = {
//         hidden: {
//             pathLength: 0,
//             x: '-100vw',  // Start from the far right of the viewport
//             y: '-100%'  // Start from the top of the viewport
//         },
//         visible: {
//             pathLength: 1,
//             x: 0,
//             y: 0,
//             transition: {
//                 duration: 0.5,
//                 ease: "easeOut"
//             }
//         }
//     };
//
//     const bottomLeftDashVariants = {
//         hidden: {
//             pathLength: 0,
//             x: '100vw', // Start from the far left of the viewport
//             y: '100%'   // Start from the bottom of the viewport
//         },
//         visible: {
//             pathLength: 1,
//             x: 0,
//             y: 0,
//             transition: {
//                 duration: 0.5,
//                 ease: "easeOut"
//             }
//         }
//     };
//
//     const bottomRightDashVariants = {
//         hidden: {
//             pathLength: 0,
//             x: '100vw',  // Start from the far right of the viewport
//             y: '100%'   // Start from the bottom of the viewport
//         },
//         visible: {
//             pathLength: 1,
//             x: 0,
//             y: 0,
//             transition: {
//                 duration: 0.5,
//                 ease: "easeOut"
//             }
//         }
//     };
//
//
//     const titleVariants = {
//         hidden: {
//             opacity: 0,
//             scale: 1
//         },
//         visible: {
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.2,
//                 delay: 0.25,
//                 ease: "easeInOut"
//             }
//         }
//     };
//
//     const renderDashes = () => (
//         <>
//             {/* Top Right Horizontal Dash */}
//             <motion.div
//                 className={`absolute -top-2 -left-6 right-[15.25rem] h-[2.5px] ${
//                     isDark ? 'bg-cyan-500' : 'bg-cyan-600'
//                 }`}
//                 variants={topRightDashVariants}
//                 initial="hidden"
//                 animate={controls}
//             />
//
//             {/* Bottom Left Horizontal Dash */}
//             <motion.div
//                 className={`absolute -bottom-2 left-56 -right-6 h-[2.5px] ${
//                     isDark ? 'bg-cyan-500' : 'bg-cyan-600'
//                 }`}
//                 variants={bottomLeftDashVariants}
//                 initial="hidden"
//                 animate={controls}
//             />
//
//             {/* Dashed small lines with staggered animations */}
//             {[...Array(5)].map((_, i) => (
//                 <React.Fragment key={i}>
//                     <motion.div
//                         className={`absolute -top-2 h-[2.5px] w-1 ${
//                             isDark ? 'bg-cyan-500' : 'bg-cyan-600'
//                         }`}
//                         style={{left: `${45 + i * 5}%`}}
//                         variants={topLeftDashVariants}
//                         initial="hidden"
//                         animate={controls}
//                     />
//                     <motion.div
//                         className={`absolute -bottom-2 h-[2.5px] w-1 ${
//                             isDark ? 'bg-cyan-500' : 'bg-cyan-600'
//                         }`}
//                         style={{left: `${30 + i * 5}%`}}
//                         variants={bottomRightDashVariants}
//                         initial="hidden"
//                         animate={controls}
//                     />
//                 </React.Fragment>
//             ))}
//         </>
//     );
//
//     const renderContent = () => (
//         <motion.div
//             ref={titleRef}
//             className="relative inline-block px-12 py-6"
//             initial={{opacity: 0, scale: 0.9}}
//             animate={{
//                 opacity: 1,
//                 scale: 1,
//                 transition: {
//                     duration: 0.8,
//                     ease: "easeOut"
//                 }
//             }}
//         >
//             {renderDashes()}
//
//             <motion.h1
//                 className={`font-mono text-center text-${fontSize} ${
//                     isDark ? 'text-cyan-500' : 'text-gray-800'
//                 }`}
//                 variants={titleVariants}
//                 initial="hidden"
//                 animate={controls}
//             >
//                 {title}
//             </motion.h1>
//         </motion.div>
//     );
//
//     return (
//         <div className={`h-[45vh] -mb-[10vh] flex justify-center items-center`}>
//             {enableCard ? (
//                 <motion.div
//                     className={`${extraParams} rounded-lg p-6 shadow-lg w-[90vw] mx-auto flex justify-center items-center ${
//                         isDark
//                             ? 'border-2 border-cyan-500'
//                             : 'border-2 border-yellow-400'
//                     }`}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{
//                         opacity: 1,
//                         y: 0,
//                         transition: {
//                             duration: 0.8,
//                             ease: "easeOut"
//                         }
//                     }}
//                 >
//                     {renderContent()}
//                 </motion.div>
//             ) : (
//                 renderContent()
//             )}
//         </div>
//     );
// };
//
// export default TitleSection;


import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from "../../hooks/DarkMode/DarkMode.jsx";

const TitleSection = ({
                          title,
                          extraParams = "",
                          enableCard = false,
                          fontSize = "5xl"
                      }) => {
    const titleRef = useRef(null);
    const controls = useAnimation();
    const { isDark } = useTheme();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, [controls]);

    const topLineVariants = {
        hidden: { scaleX: 0, originX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const bottomLineVariants = {
        hidden: { scaleX: 0, originX: 1 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const dashVariants = {
        hidden: { scale: 0 },
        visible: (i) => ({
            scale: 1,
            transition: {
                delay: (i+2.5) * 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        })
    };

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: 0.3,
                ease: "easeOut"
            }
        }
    };

    const renderContent = () => (
        <motion.div
            ref={titleRef}
            className="relative w-full max-w-3xl px-8 py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* Container for lines and dashes */}
            <div className="absolute inset-0">
                {/* Top line - starts from left */}
                <motion.div
                    className={`absolute -top-2 left-[10%] md:left-[22%] right-[51%] h-[2px] ${
                        isDark ? 'bg-cyan-500' : 'bg-cyan-600'
                    }`}
                    variants={topLineVariants}
                    initial="hidden"
                    animate={controls}
                />

                {/* Bottom line - starts from right */}
                <motion.div
                    className={`absolute -bottom-2 left-[51%] right-[10%] md:right-[22%] h-[2.5px] ${
                        isDark ? 'bg-cyan-500' : 'bg-cyan-600'
                    }`}
                    variants={bottomLineVariants}
                    initial="hidden"
                    animate={controls}
                />

                {/* Top dashes */}
                <div className="absolute -top-2 left-[50%] right-1/3 flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={`top-${i}`}
                            className={`h-0.5 w-1 ${isDark ? 'bg-cyan-500' : 'bg-cyan-600'}`}
                            variants={dashVariants}
                            custom={i}
                            initial="hidden"
                            animate={controls}
                        />
                    ))}
                </div>

                {/* Bottom dashes */}
                <div className="absolute -bottom-2 left-1/3 right-[50%] flex space-x-2 rotate-180">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={`bottom-${i}`}
                            className={`h-0.5 w-1 ${isDark ? 'bg-cyan-500' : 'bg-cyan-600'}`}
                            variants={dashVariants}
                            custom={i}
                            initial="hidden"
                            animate={controls}
                        />
                    ))}
                </div>
            </div>

            {/* Title */}
            <motion.h1
                className={`font-mono text-center ${
                    fontSize === "5xl" ? "text-4xl md:text-5xl" : `text-${fontSize}`
                } ${isDark ? 'text-cyan-500' : 'text-gray-800'}`}
                variants={titleVariants}
                initial="hidden"
                animate={controls}
            >
                {title}
            </motion.h1>
        </motion.div>
    );

    return (
        <div className="h-[45vh] -mb-[10vh] flex justify-center items-center px-4 overflow-hidden">
            {enableCard ? (
                <motion.div
                    className={`${extraParams} rounded-lg p-4 md:p-6 shadow-lg w-full max-w-4xl mx-auto flex justify-center items-center ${
                        isDark ? 'border-2 border-cyan-500' : 'border-2 border-yellow-400'
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        }
                    }}
                >
                    {renderContent()}
                </motion.div>
            ) : (
                renderContent()
            )}
        </div>
    );
};

export default TitleSection;