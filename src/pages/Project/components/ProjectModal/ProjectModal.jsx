import React, {useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel.jsx";
import ProjectInfo from "../ProjectInfo/ProjectInfo.jsx";

const ProjectModal = ({ project, isOpen, onClose, isDark }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            // Add Tailwind class to disable scrolling
            document.body.classList.add("overflow-hidden");
        } else {
            // Remove Tailwind class to enable scrolling
            document.body.classList.remove("overflow-hidden");
        }

        // Cleanup when the component is unmounted or `isOpen` changes
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 backdrop-blur-sm"
                        style={{
                            backgroundColor: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'
                        }}
                    />

                    {/* Modal */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed inset-4 md:inset-10 z-50"

                    >
                        <div className="min-h-full flex items-center justify-center p-0">
                            <div className={`relative w-full max-w-6xl rounded-xl overflow-hidden
                                font-mono ${isDark
                                ? 'bg-[#101010] border border-cyan-500/20'
                                : 'bg-white border border-yellow-400/20'}`}>

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className={`absolute right-4 top-4 z-10 p-2 rounded-full
                                        transition-colors duration-200 ${isDark
                                        ? 'bg-black/50 text-cyan-500 hover:bg-cyan-500/20'
                                        : 'bg-gray-100 text-yellow-600 hover:bg-yellow-400/20'
                                    }`}
                                >
                                    <X size={24} />
                                </button>

                                {/* Content Container */}
                                <div className="flex flex-col md:flex-row h-[90dvh] md:h-[80dvh]">
                                    {/* Carousel Section */}
                                    <div className="w-full md:w-1/2 h-[40dvh] md:h-full bg-black">
                                        <ProjectCarousel project={project} />
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full md:w-1/2 overflow-y-auto">
                                        <ProjectInfo project={project} isDark={isDark} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;