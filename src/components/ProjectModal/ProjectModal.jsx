import React, {useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel.jsx";

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
                                        <div className="flex flex-col h-full p-8">
                                            {/* Header */}
                                            <div className="mb-6">
                                                <h2 className={`text-2xl tracking-wider mb-2 ${
                                                    isDark ? 'text-cyan-500' : 'text-yellow-600'
                                                }`}>
                                                    {project.title}
                                                </h2>
                                                <div className="flex items-center space-x-4">
                                                    <span className={isDark ? 'text-[#B6B600]' : 'text-gray-600'}>
                                                        {new Date(project.date).toLocaleDateString('en-US', {
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                    <span className={`px-2 py-1 rounded-full text-xs
                                                        ${isDark
                                                        ? 'text-cyan-400/60 border border-cyan-400/30'
                                                        : 'text-yellow-600/80 border border-yellow-400/30'
                                                    }`}>
                                                        {project.status}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="flex-grow">
                                                <p className={`leading-relaxed mb-6 ${
                                                    isDark ? 'text-[#B6B600]' : 'text-gray-600'
                                                }`}>
                                                    {project.longDescription}
                                                </p>

                                                {/* Technologies */}
                                                <div className="mb-6">
                                                    <h3 className={isDark ? 'text-cyan-500' : 'text-yellow-600'}>
                                                        TECHNOLOGIES
                                                    </h3>
                                                    <div className="flex flex-wrap  gap-2 mt-3">
                                                        {project.technologies.map((tech, index) => (
                                                            <span
                                                                key={index}
                                                                className={`px-3 py-1 text-sm rounded-full
                                                                    ${isDark
                                                                    ? 'text-cyan-400/60 border border-cyan-400/30'
                                                                    : 'text-yellow-600/80 border border-yellow-400/30'
                                                                }`}
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Footer */}
                                            <div className={`pt-6 pb-6 md:pb-0 ${isDark
                                                ? 'border-t border-cyan-500/20'
                                                : 'border-t border-yellow-400/20'
                                            }`}>
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center space-x-2
                                                        transition-colors duration-200 ${isDark
                                                        ? 'text-cyan-500 hover:text-cyan-400'
                                                        : 'text-yellow-600 hover:text-yellow-500'
                                                    }`}
                                                >
                                                    <Github size={20} />
                                                    <span>View on GitHub</span>
                                                </a>
                                            </div>
                                        </div>
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