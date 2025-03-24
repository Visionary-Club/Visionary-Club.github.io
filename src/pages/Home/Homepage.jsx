import { useState, useEffect } from "react";
import HeroSection from './components/HeroSection/HeroSection.jsx';
import { ChevronDown } from "lucide-react";
import './Homepage.scss';
import DivisionSection from "../../components/DivisionSection/DivisionSection.jsx";
import TitleSection from "../../components/TitleSection/TitleSection.jsx";
import WhatSection from "./components/WhatSection/WhatSection.jsx";
import {useTheme} from "../../hooks/DarkMode/DarkMode.jsx";
import ClubFields from "./components/ClubFields/ClubFields.jsx";
import MembSection from "./components/MembSection/MembSection.jsx";

const Homepage = () => {
    const { isDark } = useTheme();
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        const root = document.documentElement; // Get the root HTML element
        if (isDark) {
            root.classList.remove("light-mode"); // Remove light-mode class
        } else {
            root.classList.add("light-mode"); // Add light-mode class
        }
    }, [isDark]); // Run this effect whenever `isDark` changes


    return (
        <div className={`h-screen w-screen md:overflow-y-scroll hide-scrollbar ${isDark ? 'bg-gradient-to-r from-black to-gray-950' : ''} `}>

            <HeroSection scrollToNext={scrollToSection} next={'what-section'} blurAmount={1}/>
            <WhatSection />
            <ClubFields />
            <MembSection isDark={isDark} />
        </div>

    );
};

export default Homepage;
