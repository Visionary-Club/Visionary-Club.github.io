import React from 'react';
import { Github } from 'lucide-react';

const ProjectInfo = ({ project, isDark }) => {
    return (
        <div className="flex flex-col h-full p-8">
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
                    <span className={`px-2 py-1 rounded-full text-xs ${
                        isDark
                            ? 'text-cyan-400/60 border border-cyan-400/30'
                            : 'text-yellow-600/80 border border-yellow-400/30'
                    }`}>
                        {project.status}
                    </span>
                </div>
            </div>

            <div className="flex-grow">
                <p className={`leading-relaxed mb-6 ${
                    isDark ? 'text-[#B6B600]' : 'text-gray-600'
                }`}>
                    {project.longDescription}
                </p>

                <div className="mb-6">
                    <h3 className={isDark ? 'text-cyan-500' : 'text-yellow-600'}>
                        TECHNOLOGIES
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className={`px-3 py-1 text-sm rounded-full ${
                                    isDark
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

            <div className={`pt-6 pb-6 md:pb-0 ${isDark
                ? 'border-t border-cyan-500/20'
                : 'border-t border-yellow-400/20'
            }`}>
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 transition-colors duration-200 ${
                        isDark ? 'text-cyan-500 hover:text-cyan-400' : 'text-yellow-600 hover:text-yellow-500'
                    }`}
                >
                    <Github size={20} />
                    <span>View on GitHub</span>
                </a>
            </div>
        </div>
    );
};

export default ProjectInfo;