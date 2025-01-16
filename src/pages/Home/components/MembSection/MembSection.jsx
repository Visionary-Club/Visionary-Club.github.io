import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MembersSection = ({ isDark }) => {
    const [teamData, setTeamData] = useState(null);

    useEffect(() => {
        axios
            .get('/team-data.json') // Fetch team data from JSON
            .then((response) => {
                setTeamData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching team data:', error);
            });
    }, []);

    if (!teamData) {
        return (
            <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className={`text-4xl text-center ${isDark ? 'text-cyan-400' : 'text-yellow-500'}`}>
                    Loading Members...
                </h2>
            </section>
        );
    }

    return (
        <section className={`pt-10 pb-40 bg-transparent backdrop-blur-[5px]`}>
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2
                    className={`text-center text-4xl md:text-5xl font-bold mb-12 ${
                        isDark ? 'text-cyan-400' : 'text-yellow-500'
                    }`}
                >
                    Meet Our Team
                </h2>

                {/* Members Flexbox Layout */}
                <div
                    className={`flex flex-wrap justify-center lg:justify-between gap-8 justify-center`}
                >
                    {/* Mentors */}
                    {teamData.mentors.slice(0, 3).map((mentor, index) => (
                        <div
                            key={index}
                            className={`relative p-4 rounded-xl border-none bg-transparent w-72 md:w-60 ${
                                isDark ? 'hover:bg-gray-600/20' : 'hover:bg-yellow-400/10'
                            } duration-1000`}
                        >
                            {/* Image Section with Skeleton Loader */}
                            <div className="overflow-hidden rounded-lg aspect-[2/2.5] mx-auto w-60 md:w-48">
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                    className={`w-full h-full object-cover`}
                                />
                            </div>

                            {/* Content Section */}
                            <div className="text-left mx-2 mt-4">
                                <h2 className={`text-lg font-bold ${isDark ? 'text-cyan-500' : 'text-[#1D1D1D]'}`}>
                                    {mentor.name}
                                </h2>
                                <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {mentor.role}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* President */}
                    {teamData.leadership
                        .filter((leader) => leader.role === 'President')
                        .map((president, index) => (
                            <div
                                key={index}
                                className={`relative p-4 rounded-xl border-none bg-transparent w-72 md:w-60 ${
                                    isDark ? 'hover:bg-gray-600/20' : 'hover:bg-yellow-400/10'
                                } duration-1000`}
                            >
                                {/* Image Section with Skeleton Loader */}
                                <div className="overflow-hidden rounded-lg aspect-[2/2.5] mx-auto w-60 md:w-48">
                                    <img
                                        src={president.image}
                                        alt={president.name}
                                        className={`w-full h-full object-cover`}
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="text-left mx-2 mt-4">
                                    <h2 className={`text-lg font-bold ${isDark ? 'text-cyan-500' : 'text-[#1D1D1D]'}`}>
                                        {president.name}
                                    </h2>
                                    <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {president.role}
                                    </p>
                                </div>
                            </div>
                        ))}

                    {/* "See All Members" Card */}
                    <Link
                        to="/members" // Entire card as a link to the "See All Members" page
                        className={`relative p-4 rounded-xl border-none bg-transparent w-72 md:w-60 ${
                            isDark ? 'hover:bg-gray-600/20' : 'hover:bg-yellow-400/10'
                        } duration-1000`}
                    >
                        {/* Arrow Section */}
                        <div className="flex justify-center items-center overflow-hidden rounded-lg aspect-[2/2.5] mx-auto w-60 md:w-48">
                            <FaArrowRight
                                size={40}
                                className={`${
                                    isDark ? 'text-cyan-400' : 'text-yellow-500'
                                }`}
                            />
                        </div>

                        {/* Button Section */}
                        <div className="text-center mx-2 mt-4">
              <span
                  className={`block py-2 px-4 rounded-full text-lg font-bold ${
                      isDark
                          ? 'bg-gray-700 text-cyan-400 hover:bg-gray-600'
                          : 'bg-yellow-500 text-black hover:bg-yellow-400'
                  } transition-all shadow-lg hover:scale-105`}
              >
                See All Members
              </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MembersSection;
