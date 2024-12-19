import { useState, useEffect } from "react";
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import { ChevronDown } from "lucide-react";
import './Homepage.scss';
import DivisionSection from "../../components/DivisionSection/DivisionSection.jsx";
import TitleSection from "../../components/TitleSection/TitleSection.jsx";
import WhatSection from "../../components/WhatSection/WhatSection.jsx";

const Homepage = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="h-screen w-screen overflow-y-scroll snap-center snap-y snap-mandatory hide-scrollbar">

            <HeroSection scrollToNext={scrollToSection} next='what-section'/>
            <WhatSection scrollToNext={scrollToSection} next='division-section'/>
            <DivisionSection/>
        </div>
    );
};

export default Homepage;
