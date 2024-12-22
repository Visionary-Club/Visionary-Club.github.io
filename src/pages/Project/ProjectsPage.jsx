import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TitleSection from "../../components/TitleSection/TitleSection.jsx";
import { useTheme } from "../../hooks/DarkMode/DarkMode.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import ProjectModal from "../../components/ProjectModal/ProjectModal.jsx";

import './ProjectsPage.scss';

const ProjectsPage = () => {
    const { isDark } = useTheme();
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/o-Erebus/Visionary-Club.github.io/refs/heads/development/public/projects.json')
            .then(response => {
                const sortedProjects = response.data.sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
                setProjects(sortedProjects);
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <>
            <div className={`min-h-screen w-screen overflow-y-scroll hide-scrollbar scrollbar-none ${
                isDark ? 'bg-transparent' : 'bg-cyan-50'
            }`}>
                <TitleSection title="OUR_PROJECTS" />

                <section className="max-w-6xl mx-auto px-8 pt-6 pb-24 hide-scrollbar scrollbar-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                                isDark={isDark}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                </section>

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