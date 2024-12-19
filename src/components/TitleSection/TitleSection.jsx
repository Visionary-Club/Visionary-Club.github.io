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

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TitleSection = ({
                          title,
                          extraParams = "",
                          enableCard = false,
                          fontSize = "5xl"
                      }) => {
    const titleRef = useRef(null);
    const controls = useAnimation();

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

    const topLeftDashVariants = {
        hidden: {
            pathLength: 0,
            x: '-100vw', // Start from the far left of the viewport
            y: '-100%'  // Start from the top of the viewport
        },
        visible: {
            pathLength: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const topRightDashVariants = {
        hidden: {
            pathLength: 0,
            x: '-100vw',  // Start from the far right of the viewport
            y: '-100%'  // Start from the top of the viewport
        },
        visible: {
            pathLength: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const bottomLeftDashVariants = {
        hidden: {
            pathLength: 0,
            x: '100vw', // Start from the far left of the viewport
            y: '100%'   // Start from the bottom of the viewport
        },
        visible: {
            pathLength: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const bottomRightDashVariants = {
        hidden: {
            pathLength: 0,
            x: '100vw',  // Start from the far right of the viewport
            y: '100%'   // Start from the bottom of the viewport
        },
        visible: {
            pathLength: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };


    const titleVariants = {
        hidden: {
            opacity: 0,
            scale: 1
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                delay: 0.25,
                ease: "easeInOut"
            }
        }
    };

    const renderDashes = () => (
        <>
            {/*/!* Top Left Diagonal Dash *!/*/}
            {/*<motion.div*/}
            {/*    className="absolute -top-2 -left-6 w-12 h-[1.5px] bg-cyan-500 -rotate-45 origin-right"*/}
            {/*    variants={topLeftDashVariants}*/}
            {/*    initial="hidden"*/}
            {/*    animate={controls}*/}
            {/*/>*/}

            {/* Top Right Horizontal Dash */}
            <motion.div
                className="absolute -top-2 -left-6 right-[15.25rem] h-[2.5px] bg-cyan-500"
                variants={topRightDashVariants}
                initial="hidden"
                animate={controls}
            />

            {/* Bottom Left Horizontal Dash */}
            <motion.div
                className="absolute -bottom-2 left-56 -right-6 h-[2.5px] bg-cyan-500"
                variants={bottomLeftDashVariants}
                initial="hidden"
                animate={controls}
            />

            {/*/!* Bottom Right Diagonal Dash *!/*/}
            {/*<motion.div*/}
            {/*    className="absolute -bottom-2 -right-6 w-12 h-[1.5px] bg-cyan-500 -rotate-45 origin-left"*/}
            {/*    variants={bottomRightDashVariants}*/}
            {/*    initial="hidden"*/}
            {/*    animate={controls}*/}
            {/*/>*/}

            {/* Dashed small lines with staggered animations */}
            {[...Array(5)].map((_, i) => (
                <React.Fragment key={i}>
                    <motion.div
                        className="absolute -top-2  h-[2.5px] w-1 bg-cyan-500"
                        style={{left: `${45 + i * 5}%`}}
                        variants={topLeftDashVariants}
                        initial="hidden"
                        animate={controls}
                    />
                    <motion.div
                        className="absolute -bottom-2 h-[2.5px] w-1 bg-cyan-500"
                        style={{left: `${30 + i * 5}%`}}
                        variants={bottomRightDashVariants}
                        initial="hidden"
                        animate={controls}
                    />
                </React.Fragment>
            ))}
        </>
    );

    const renderContent = () => (
        <motion.div
            ref={titleRef}
            className="relative inline-block px-12 py-6"
            initial={{opacity: 0, scale: 0.9}}
            animate={{
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                }
            }}

        >
            {renderDashes()}

            <motion.h1
                className={`font-mono text-cyan-500 text-center text-${fontSize}`}
                variants={titleVariants}
                initial="hidden"
                animate={controls}
            >
                {title}
            </motion.h1>
        </motion.div>
    );

    return (
        <div className={`h-[45vh] -mb-[10vh] flex justify-center items-center`}>
            {enableCard ? (
                <motion.div
                    className={`${extraParams} border-2 border-cyan-500 rounded-lg p-6 shadow-lg w-[90vw] mx-auto flex justify-center items-center`}
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