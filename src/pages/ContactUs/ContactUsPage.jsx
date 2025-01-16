import React, {useCallback} from 'react';
import {useTheme} from "../../hooks/DarkMode/DarkMode.jsx";


const ContactUsPage = () => {
    const { isDark } = useTheme();

    return (
        <section
            className={`flex items-center justify-center relative h-dvh w-dvw ${isDark ? 'bg-transparent' : 'bg-gray-100'} transition-colors py-16`}
        >

            <div
                className={`h-[80%] justify-center flex flex-col relative p-12 rounded-xl border-4  shadow-lg backdrop-blur-[40px] ${
                    isDark ? ' text-gray-300' : ' text-gray-800'
                }`}
                style={{
                    borderImage: isDark
                        ? 'linear-gradient(to right, rgb(6, 182, 212), rgb(182, 182, 0)) 1'
                        : 'linear-gradient(to right, rgb(6, 182, 212), rgb(234, 179, 8)) 1',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    backgroundClip: 'border-box',
                    borderRadius: '1rem',


                }}
            >
                <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-cyan-400' : 'text-yellow-500'}`}>
                    Contact Us
                </h2>

                <p className={`text-xl mb-6 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                    Whether you’re a student looking to join our dynamic community or a company
                    seeking to collaborate with passionate innovators, we are always excited to hear from you!
                </p>

                <div className="space-y-6 text-lg">
                    {/* Email */}
                    <div className="flex items-center space-x-4">
                        <span className={`text-2xl ${isDark ? 'text-cyan-400' : 'text-yellow-500'}`}>📧</span>
                        <a
                            href="mailto:visionaryclub16@gmail.com"
                            className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
                        >
                            visionaryclub16@gmail.com
                        </a>
                    </div>

                    {/* Contact Numbers */}
                    <div className="flex items-center space-x-4">
                        <span className={`text-2xl ${isDark ? 'text-cyan-400' : 'text-yellow-500'}`}>📱</span>
                        <div className={`${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                            <p className="font-semibold">9930168981</p>
                            <p className="font-semibold">9112213506</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsPage;
