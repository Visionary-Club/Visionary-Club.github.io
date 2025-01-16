import React from 'react';

const DivisionCard = ({ division }) => {
    return (
        <div className="relative group">
            <div className="relative border border-cyan-500 bg-gray-900 p-6 group-hover:border-[#B6B600] transition-colors cursor-pointer">
                <h2 className="text-3xl font-mono text-cyan-500 mb-4 truncate">{division.title}</h2>
                <div className="border-l-2 border-[#B6B600] pl-4 bg-black/50 p-4">
                    <p className="font-mono text-cyan-500/80">
                        {division.technologies.map(tech => (
                            <React.Fragment key={tech}>
                                {tech}<br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
                <ul className="mt-6 space-y-2">
                    {division.projects.map(project => (
                        <li key={project} className="border border-cyan-500 p-2 font-mono text-[#B6B600]">
                            {project}
                        </li>
                    ))}
                </ul>
                <div className="mt-10 text-[#B6B600] font-mono">
                    {division.executable}
                </div>
            </div>
        </div>
    );
};

export default DivisionCard;