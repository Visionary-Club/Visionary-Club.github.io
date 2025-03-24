import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, GraduationCap, Briefcase, Calendar, Users, Star, Trophy } from 'lucide-react';
import { useTheme } from '../../hooks/DarkMode/DarkMode.jsx';
import ParticlesBackground from '../../components/Practicles/Practicles.jsx';
import { loadSlim } from "tsparticles-slim";

const Alumni = () => {
    const { isDark } = useTheme();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBatch, setSelectedBatch] = useState('all');

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    // Sample alumni data with hierarchy
    const alumniData = {
        founders: [
            {
                id: 1,
                name: "Alex Thompson",
                batch: "2020",
                role: "Founder",
                company: "TechVision Labs",
                position: "CEO",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex0",
                linkedIn: "https://linkedin.com/in/alexthompson",
                achievements: "Founded the club in 2020",
                type: "founder"
            },
            {
                id: 2,
                name: "Emma Davis",
                batch: "2020",
                role: "Co-Founder",
                company: "InnovateTech",
                position: "CTO",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma0",
                linkedIn: "https://linkedin.com/in/emmadavis",
                achievements: "Co-founded the club and established the technical framework",
                type: "cofounder"
            }
        ],
        formerMembers: [
            {
                id: 3,
                name: "Sarah Wilson",
                batch: "2021",
                role: "Former President",
                company: "Meta",
                position: "Product Manager",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
                linkedIn: "https://linkedin.com/in/sarahwilson",
                tenure: "2021-2022"
            },
            {
                id: 4,
                name: "John Doe",
                batch: "2023",
                role: "Tech Lead",
                company: "Google",
                position: "Software Engineer",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
                linkedIn: "https://linkedin.com/in/johndoe",
                domain: "AI/ML"
            },
            {
                id: 5,
                name: "Lisa Park",
                batch: "2022",
                role: "Management Lead",
                company: "Microsoft",
                position: "Project Manager",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
                linkedIn: "https://linkedin.com/in/lisapark",
                domain: "Operations"
            }
        ]
    };

    const batches = [...new Set([
        ...alumniData.founders.map(f => f.batch),
        ...alumniData.formerMembers.map(m => m.batch)
    ])].sort((a, b) => b - a);

    const filterAlumni = (member) => {
        const searchMatch = 
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.position.toLowerCase().includes(searchTerm.toLowerCase());
        
        const batchMatch = selectedBatch === 'all' || member.batch === selectedBatch;

        return searchMatch && batchMatch;
    };

    const AlumniCard = ({ member }) => {
        const cardVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5 }
            }
        };

        const getBorderColor = () => {
            if (member.type === 'founder') return 'border-purple-500';
            if (member.type === 'cofounder') return 'border-blue-500';
            return 'border-cyan-500';
        };

        return (
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`group relative p-6 rounded-xl ${
                    isDark 
                        ? 'bg-gray-800/50 hover:bg-gray-700/50'
                        : 'bg-white/80 hover:bg-white'
                } backdrop-blur-sm transition-all duration-300`}
            >
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 relative">
                        <img
                            src={member.image}
                            alt={member.name}
                            className={`w-20 h-20 rounded-full border-2 ${getBorderColor()}`}
                        />
                        <motion.a
                            href={member.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`absolute bottom-0 right-0 p-1 rounded-full ${
                                isDark ? 'bg-gray-700' : 'bg-white'
                            } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            whileHover={{ scale: 1.2 }}
                        >
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </motion.a>
                    </div>
                    <div className="flex-1 min-w-0">
                        <motion.h3 
                            className={`text-xl font-semibold truncate ${isDark ? 'text-cyan-500' : 'text-black'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {member.name}
                        </motion.h3>
                        <motion.div 
                            className="flex items-center mt-1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Calendar size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                            <span className={`ml-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Batch of {member.batch}
                            </span>
                        </motion.div>
                        <motion.div 
                            className="flex items-center mt-1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Briefcase size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                            <span className={`ml-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                {member.position} at {member.company}
                            </span>
                        </motion.div>
                    </div>
                </div>
                {member.achievements && (
                    <motion.div 
                        className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex items-center">
                            <Trophy className={isDark ? 'text-purple-500' : 'text-purple-600'} size={20} />
                            <span className={`ml-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {member.achievements}
                            </span>
                        </div>
                    </motion.div>
                )}
                {member.tenure && (
                    <motion.div 
                        className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex items-center">
                            <Star className={isDark ? 'text-red-500' : 'text-red-600'} size={20} />
                            <span className={`ml-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Tenure: {member.tenure}
                            </span>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        );
    };

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gradient-to-r from-black to-gray-950' : 'bg-gradient-to-r from-cyan-100 to-white'}`}>
            <ParticlesBackground init={particlesInit} loaded={particlesLoaded} />
            
            {/* Hero Section */}
            <motion.section 
                className="relative pt-20 pb-20 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-6">
                    <motion.h1 
                        className={`text-5xl md:text-6xl font-mono mb-6 ${isDark ? 'text-cyan-500' : 'text-black'}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        OUR_LEGACY
                    </motion.h1>
                    <motion.p 
                        className={`text-lg md:text-xl font-mono mb-8 ${isDark ? 'text-[#B6B600]' : 'text-[#FFBF00]'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        CONNECTING_PAST::INSPIRING_FUTURE
                    </motion.p>
                    <motion.p 
                        className={`max-w-3xl mx-auto text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Our alumni network represents a legacy of innovation and excellence. These remarkable individuals 
                        continue to make significant impacts across the global tech landscape, from pioneering startups 
                        to leading tech giants.
                    </motion.p>
                </div>
            </motion.section>

            {/* Search and Filter Section */}
            <motion.section 
                className="py-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <div className={`relative flex-1 max-w-md ${isDark ? 'text-white' : 'text-black'}`}>
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name, company, or position..."
                                className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                                    isDark 
                                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400'
                                        : 'bg-white/80 border-gray-300 text-black placeholder-gray-500'
                                } border focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm`}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select
                            value={selectedBatch}
                            onChange={(e) => setSelectedBatch(e.target.value)}
                            className={`px-4 py-2 rounded-lg ${
                                isDark 
                                    ? 'bg-gray-800/50 text-white border-gray-700'
                                    : 'bg-white/80 text-black border-gray-300'
                                } border focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-sm`}
                        >
                            <option value="all">All Batches</option>
                            {batches.map(batch => (
                                <option key={batch} value={batch}>Batch of {batch}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </motion.section>

            {/* Alumni Grid Section */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    {/* Founders Section */}
                    <motion.div 
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-purple-500' : 'text-purple-600'}`}>
                            Founders
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {alumniData.founders.filter(filterAlumni).map(founder => (
                                <AlumniCard key={founder.id} member={founder} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Former Members Section */}
                    <motion.div 
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-cyan-500' : 'text-cyan-600'}`}>
                            Former Members
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {alumniData.formerMembers.filter(filterAlumni).map(member => (
                                <AlumniCard key={member.id} member={member} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Alumni;




