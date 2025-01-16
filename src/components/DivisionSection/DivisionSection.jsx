// src/components/DivisionSection/DivisionSection.jsx
import React from "react";
import DivisionCard from '../../components/DivisionCard/DivisionCard.jsx';
import { divisions } from '../../constants/navigation';
import {ChevronDown} from "lucide-react";

const DivisionSection = (scrollToNext, next) => {
    return (
        <div id="division-section" className="w-screen min-h-screen snap-start relative lg:snap-none ">
            <div className="max-w-7xl mx-auto p-8 pt-[20vh] pb-[18vh]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {divisions.map((division) => (
                        <DivisionCard key={division.id} division={division}/>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <button
                    onClick={() => scrollToNext(next)}
                    className="text-cyan-500 hover:text-[#B6B600] border-none transition-colors animate-bounce focus:outline-none focus:ring-0 hidden md:block"
                >
                    <ChevronDown size={48}/>
                </button>
            </div>
        </div>
    );
};

export default DivisionSection;
