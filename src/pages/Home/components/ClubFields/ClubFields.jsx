import React, { useState, useRef, useEffect } from "react";
import { Bot, Wifi, Shield, Globe } from "lucide-react";
import { useTheme } from "../../../../hooks/DarkMode/DarkMode.jsx";

const ClubFields = () => {
    const [activeField, setActiveField] = useState(0);
    const [isVisible, setIsVisible] = useState(true); // For fade animation
    const { isDark } = useTheme();
    const sectionRef = useRef();

    const fields = [
        {
            id: "ai",
            name: "AI & ML",
            title: "Artificial Intelligence",
            icon: Bot,
            description:
                "Explore the frontiers of AI including machine learning, neural networks, and intelligent systems. Learn to build and deploy AI models that solve real-world problems.",
        },
        {
            id: "iot",
            name: "IoT",
            title: "Internet of Things",
            icon: Wifi,
            description:
                "Dive into the world of connected devices, sensors, and smart systems. Create innovative IoT solutions that bridge the physical and digital worlds.",
        },
        {
            id: "cybersec",
            name: "Cybersecurity",
            title: "Cybersecurity",
            icon: Shield,
            description:
                "Master the art of digital defense through ethical hacking, network security, and threat analysis. Protect systems and data in an increasingly connected world.",
        },
        {
            id: "webdev",
            name: "Web Dev",
            title: "Web Development",
            icon: Globe,
            description:
                "Build modern web applications using cutting-edge technologies. From frontend frameworks to backend systems, create seamless digital experiences.",
        },
    ];

// State to track whether custom scrolling is active
    const [customScrollActive, setCustomScrollActive] = useState(true);

// Scroll handler with fade-out, fade-in animations, and default scrolling
    const handleWheel = (e) => {
        if (!customScrollActive) return; // Stop custom scroll once deactivated

        if (e.deltaY > 0 && activeField < fields.length - 1) {
            setIsVisible(false); // Start fade-out
            setTimeout(() => {
                setActiveField((prev) => (prev + 1)%4);
                setIsVisible(true); // Start fade-in
            }, 300); // Animation duration
        } else if (e.deltaY < 0 && activeField > 0) {
            setIsVisible(false); // Start fade-out
            setTimeout(() => {
                setActiveField((prev) => prev - 1);
                setIsVisible(true); // Start fade-in
            }, 300); // Animation duration
        }

        // Deactivate custom scrolling after the last field is reached
        if (e.deltaY > 0 && activeField === fields.length - 1) {
            setCustomScrollActive(false);
        }
    };


    const Icon = fields[activeField].icon;

    return (
        <section
            ref={sectionRef}
            className={`relative pt-10 pb-40   backdrop-blur-[5px] ${
                isDark ? 'relative bg-transparent' : 'relative bg-transparent'
            }`}
            onWheel={handleWheel}
        >
            {/* Title */}
            <h2
                className={`text-3xl md:text-5xl font-mono text-center mb-16 -mt-20 ${
                    isDark ? "text-cyan-500" : "text-black"
                }`}
            >
                OUR_EXPERTISE
            </h2>

            {/* Navigation Bar */}
            <nav
                className={` top-0 z-10 bg-opacity-90 rounded-3xl w-fit mx-auto px-6 mb-20 ${
                    isDark ? "bg-gray-800/80 backdrop-blur" : "bg-gray-200 backdrop-blur"
                } py-4`}
            >
                <ul className="flex justify-center space-x-4 md:space-x-8">
                    {fields.map((field, index) => (
                        <li key={field.id}>
                            <button
                                onClick={() => {
                                    setIsVisible(false);
                                    setTimeout(() => {
                                        setActiveField(index);
                                        setIsVisible(true);
                                    }, 300); // Animation duration
                                }}
                                className={`px-4 py-2 rounded-full font-semibold transition-transform duration-300 hover:border-none ${
                                    activeField === index
                                        ? isDark
                                            ? "bg-[#00FFFF] text-gray-900 shadow-glow-cyan border-none"
                                            : "bg-yellow-100 text-black shadow-lg"
                                        : isDark
                                            ? "text-[#00FFFF] hover:bg-[#00FFFF]/10"
                                            : "text-gray-800 hover:bg-yellow-100"
                                }`}
                            >
                                {/* Display only icon on mobile */}
                                <div className="md:hidden">
                                    <field.icon

                                        size={24}
                                        className={`${
                                            isDark ? "" : "text-yellow-500"
                                        }`}
                                    />
                                </div>
                                {/* Display text on larger screens */}
                                <div className="hidden md:block">
                                    {field.name}
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Content Section */}
            <div
                className={`max-w-7xl mx-auto px-6 transition-opacity duration-300 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-transform duration-500 ${
                        activeField % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                >
                    {/* Icon */}
                    <div
                        className={`flex justify-center items-center transition-transform duration-500 ${
                            activeField % 2 === 0 ? "md:order-2" : "md:order-1"
                        }`}
                    >
                        <div
                            className={`w-40 h-40 md:w-48 md:h-48 rounded-lg border-2 flex items-center justify-center hover:scale-110 ${
                                isDark ? "border-[#00FFFF] shadow-glow-cyan" : "border-yellow-500 shadow-lg"
                            }`}
                        >
                            <Icon
                                size={64}
                                className={`${
                                    isDark ? "text-[#00FFFF]" : "text-yellow-500"
                                } transition-transform`}
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div
                        className={`text-center md:text-left ${
                            activeField % 2 === 0 ? "md:order-1" : "md:order-2"
                        }`}
                    >
                    <h3
                            className={`text-3xl md:text-4xl font-bold mb-4 ${
                                isDark ? "text-[#00FFFF]" : "text-yellow-500"
                            }`}
                        >
                            {fields[activeField].title}
                        </h3>
                        <p
                            className={`text-lg leading-relaxed ${
                                isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            {fields[activeField].description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClubFields;
