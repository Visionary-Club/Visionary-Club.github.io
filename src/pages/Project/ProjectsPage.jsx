import React, { useState } from 'react';
import { projects as projectData } from '../../constants/projects';
import TitleSection from "../../components/TitleSection/TitleSection.jsx";
import { useTheme } from "../../hooks/DarkMode/DarkMode.jsx";
import { motion } from 'framer-motion';

import './ProjectsPage.scss';
import ProjectModal from "../../components/ProjectModal/ProjectModal.jsx";

const ProjectsPage = () => {
    const { isDark } = useTheme();
    const [selectedProject, setSelectedProject] = useState(null);
    const defaultImage = 'https://via.placeholder.com/300x200/00AAAA/FFFFFF/?text=No+Image';

    const projects = projectData.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        })
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <div className={`min-h-screen w-screen overflow-y-scroll hide-scrollbar scrollbar-none ${
                isDark ? 'bg-transparent' : 'bg-cyan-50'
            }`}>
                <TitleSection title="OUR_PROJECTS" />

                {/* Projects Grid Section */}
                <section className="max-w-6xl mx-auto px-8 pt-6 pb-24 hide-scrollbar scrollbar-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                onClick={() => setSelectedProject(project)}
                                className={`group relative cursor-pointer ${
                                    isDark
                                        ? 'hover:bg-gray-900/20'
                                        : 'hover:bg-white/50'
                                } rounded-xl transition-all duration-500 ease-out`}
                            >
                                {/* Line Decorations */}
                                <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${
                                    isDark ? 'bg-cyan-500/20' : 'bg-yellow-400/20'
                                }`} />

                                <div className={`absolute -inset-1 rounded-xl transition-all duration-500`} />

                                {/* Project Content */}
                                <div className="relative p-1">
                                    {/* Image Container */}
                                    <motion.div
                                        className="overflow-hidden rounded-lg aspect-[16/9]"
                                        variants={contentVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <img
                                            src={project.image || defaultImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </motion.div>

                                    {/* Project Info */}
                                    <div className="mt-6 px-4">
                                        <motion.div
                                            variants={contentVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="flex items-center justify-between mb-4"
                                        >
                                            <h2 className={`font-mono text-xl tracking-wider ${
                                                isDark ? 'text-cyan-500' : 'text-[#EAAF08]'
                                            }`}>
                                                {project.title}
                                            </h2>

                                            <span className={`font-mono text-sm ${
                                                isDark ? 'text-gray-400' : 'text-gray-500'
                                            }`}>
                                                {new Date(project.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                        </motion.div>

                                        <motion.p
                                            variants={contentVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className={`font-mono text-sm leading-relaxed mb-6 ${
                                                isDark ? 'text-[#B6B600]' : 'text-gray-600'
                                            }`}
                                        >
                                            {project.description}
                                        </motion.p>

                                        {/* Status Badge */}
                                        <motion.div
                                            variants={contentVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="mb-4"
                                        >
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                                isDark
                                                    ? 'text-cyan-400/60 border border-cyan-400/30'
                                                    : 'text-yellow-600/80 border border-yellow-400/30'
                                            }`}>
                                                {project.status}
                                            </span>
                                        </motion.div>

                                        {/* Bottom Decoration Line */}
                                        <div className={`h-[1px] w-full transform origin-left transition-all duration-500 ${
                                            isDark
                                                ? 'bg-gradient-to-r from-cyan-500/50 to-transparent group-hover:scale-x-110'
                                                : 'bg-gradient-to-r from-yellow-400/50 to-transparent group-hover:scale-x-110'
                                        }`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Project Modal */}
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    isDark={isDark}
                />
            </div>
        </>
    );
};

export default ProjectsPage;
