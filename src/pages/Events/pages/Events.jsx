import React from 'react';
import TitleSection from "../../../components/TitleSection/TitleSection.jsx";
import { useTheme } from "../../../hooks/DarkMode/DarkMode.jsx";
import EventCard from '../components/EventCard/EventCard.jsx';
import { motion } from 'framer-motion';

const Events = () => {
    const { isDark } = useTheme();
    
    const eventData = [
        {
            title: "Inaugration Ceremony",
            date: "15-16 March, 2024",
            description: "Inauguration of out Visionary Club.",
            fullDescription: "Inauguration of out Visionary Club. We hosted a series of events, workshops, and talks to helped students learn more about the latest technologies and trends in the industry. It was an opportunity to connect with industry experts and like-minded individuals!",
            image: "/events/inauguration.jpg",
            images: [
                "public/Events/techfest/IMG-20250321-WA0002.jpg",
                
            ],
            highlights: [
                "Industry expert speakers",
                "Interactive Q&A sessions",
                "Networking opportunities",
                "Career guidance",
                "Certificate of participation"
            ],
            category: "Educational"
        },
        {
            title: "Hackathon 2024",
            date: "March 15-16, 2024",
            description: "Join us for 8 hours of coding, innovation, and fun! Our annual hackathon brings together developers, designers, and tech enthusiasts.",
            fullDescription: "Our flagship hackathon event brings together talented individuals from across the region. Participants will have 24 hours to build innovative solutions to real-world problems. With mentorship from industry experts, workshops, and amazing prizes, this is an event you won't want to miss!",
            image: "public/Events/hackthon23/_DSC5611.jpg",
            images: [
                "public/Events/hackthon23/_DSC5650.JPG",
                "public/Events/hackthon23/_DSC5793.JPG",
                "public/Events/hackthon23/_DSC5638.JPG",
                "public/Events/hackthon23/_DSC5657.jpg",
                "public/Events/hackthon23/_DSC5611.jpg",
                "public/Events/hackthon23/_DSC5664.jpg",
                "public/Events/hackthon23/_DSC5674.jpg",
                "public/Events/hackthon23/_DSC5747.jpg",
                "public/Events/hackthon23/_DSC5748.jpg",
                "public/Events/hackthon23/_DSC5738.jpg",
                "public/Events/hackthon23/_DSC5725.jpg"
            ],
            highlights: [
                "8-hour coding challenge",
                "Mentorship from industry experts",
                "Workshops and learning sessions",
                "Networking opportunities"
            ],
            category: "Technical"
        },
        {
            title: "TechFest 2024",
            date: "5-6 May, 2024",
            description: "Hands-on workshop covering the latest web development technologies and best practices.",
            fullDescription: "Join us for our techfest where you can share your knowledge and experiences by showcasing your amazing projects. It is a great opportunity to get more exposure and learn more things from your peers as well",
            image: "public/Events/techfest/IMG-20250321-WA0003.jpg",
            images: [
                "public/Events/techfest/IMG-20250321-WA0005.jpg",
                "public/Events/techfest/IMG-20250321-WA0004.jpg",
                "public/Events/techfest/IMG-20250321-WA0006.jpg",
                "public/Events/techfest/IMG-20250321-WA0007.jpg",
                "public/Events/techfest/IMG-20250321-WA0008.jpg",
                "public/Events/techfest/IMG-20250321-WA0009.jpg",
                "public/Events/techfest/IMG-20250321-WA0010.jpg",
                "public/Events/techfest/IMG-20250321-WA0011.jpg",
                "public/Events/techfest/IMG-20250321-WA0012.jpg",
                "public/Events/techfest/IMG-20250321-WA0013.jpg",
                "public/Events/techfest/IMG-20250321-WA0014.jpg"
               
            ],
            highlights: [
                "Industry expert speakers",
                "Interactive Q&A sessions",
                "Networking opportunities",
                "Project showcase",
                "Certificate of participation"
            ],
            category: "Educational"
        },
        {
            title: "AI Olympiad",
            date: "1 December, 2023",
            description: "Join us for the AI Olympiad, a competition showcasing the latest advancements in artificial intelligence.",
            fullDescription: "Get ready for an action-packed AI Olympiad to test out your AI skills. This olympiad features a series of challenges and competitions designed to push your AI knowledge to the limit. Compete against other participants and showcase your skills to win amazing prizes!",
            image: "/events/olympiad.jpg",
            images: [
                "/Events/olympiad.jpg"
            ],
            highlights: [
                "AI Olympiad",
                "Certificate of participation",
                "Networking opportunities",
                "Prizes for winners"
            ],
            category: "Technical"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };
                       
    return (
        <motion.div 
            className={`min-h-screen w-screen overflow-x-hidden overflow-y-scroll hide-scrollbar scrollbar-none transition-colors duration-500 ${
                isDark ? 'bg-gradient-to-r from-black to-gray-950 text-white' : 'bg-white text-black'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <TitleSection title="OUR_EVENTS" />
                </motion.div>
                
                <motion.div 
                    className="grid grid-cols-1 gap-24"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {eventData.map((event, index) => (
                        <EventCard key={index} event={event} index={index} />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Events;