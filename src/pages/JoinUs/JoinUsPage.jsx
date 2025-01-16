import React from 'react';

import { FaArrowLeft } from 'react-icons/fa';
import {useTheme} from "../../hooks/DarkMode/DarkMode.jsx";
import TitleSection from "../../components/TitleSection/TitleSection.jsx";
import TitleWithBorder from "../Members/components/TitleWithBorder.jsx"; // For a back button or similar action

const JoinUsPage = () => {
    const { isDark } = useTheme();

    return (
        <section className={`min-h-dvh w-dvw ${isDark ? 'bg-gray-900' : 'bg-white'} text-center`}>
            <div className="container mx-auto px-6 py-36">


               <TitleWithBorder title={"JOIN_US"} />

                {/* Section Description */}
                <p className={`text-lg mb-12 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                    We're excited to have you join our team! Please fill out the form below to apply.
                </p>

                {/* Google Form Embed */}
                <div className="relative overflow-hidden shadow-lg rounded-xl w-full mx-auto">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSduwtcTLYrfap1batHY4AwRH0obv9rdkKaPKUoKfRND3K61Lw/viewform?embedded=true"
                        width="100%"
                        height="2137"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Join Us Form"
                        className="rounded-xl"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default JoinUsPage;
