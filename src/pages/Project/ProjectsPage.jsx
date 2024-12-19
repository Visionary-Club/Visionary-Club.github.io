

import { projects as projectData } from '../../constants/projects';
import TitleSection from "../../components/TitleSection/TitleSection.jsx";

const ProjectsPage = () => {
    const defaultImage = 'https://via.placeholder.com/300x500/00AAAA/FFFFFF/?text=No+Image'; // Default fallback image URL
    const projects = projectData.sort(
        (a, b) => new Date(b.date) - new Date(a.date) // Descending order of dates
    );

    return (
        <>
        <div className="h-screen w-screen overflow-y-scroll hide-scrollbar">

            <TitleSection title="OUR_PROJECTS" />

            {/* Projects Grid Section */}
            <section className="max-w-7xl mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="h-[50vh] relative group border border-cyan-500 bg-gray-900 overflow-hidden shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:border-[#B6B600]"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image ? project.image : defaultImage}
                                alt={project.title}
                                className="w-full h-[50vh] object-cover"
                            />

                            {/* Overlay with Title and Description */}
                            <div
                                className="absolute bottom-0 left-0 right-0 p-4 pt-6  bg-gradient-to-t from-black via-black/70  to-transparent backdrop-blur-sm">
                                <h2 className="font-mono text-lg mb-1 text-cyan-500">{project.title}</h2>
                                <p className="text-sm text-[#B6B600] font-mono">{project.description}</p>
                                <p className="text-xs text-gray-400 mt-1">{new Date(project.date).toLocaleDateString('en-US', {
                                    month: 'short', // Displays abbreviated month (e.g., "Dec")
                                    day: undefined, // Excludes the day of the week
                                    year: 'numeric', // Displays the year
                                })}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </div>
        </>
    );
};

export default ProjectsPage;