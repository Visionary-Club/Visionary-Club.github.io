import React from 'react';
import { useTheme } from "../../../hooks/DarkMode/DarkMode.jsx";
import TitleWithBorder from './TitleWithBorder.jsx';
import { FaLinkedin } from "react-icons/fa";

const MentorSection = ({ mentor, title, index }) => {
  const { isDark } = useTheme();

  return (
      <div className="w-full items-stretch">
        <TitleWithBorder title={title} />
        <div
            className="flex flex-col md:flex-row gap-8 w-full items-stretch"
        >
          <div className="md:w-[280px] flex-shrink-0">
            <div
                className="p-4 border-none rounded-lg overflow-hidden group hover:border-cyan-500 transition-all"
            >
              <img

                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-[350px] object-cover object-center rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div
              className={`flex-1 p-6 rounded-xl bg-transparent backdrop-blur-sm border-none hover:border-[#B6B600]/50 transition-all duration-300`}
          >
            <div className="h-full flex flex-col justify-between">
              <h3 className={`text-2xl font-bold font-mono ${isDark ? 'text-cyan-500' : 'text-black'} mb-4`}>
                {mentor.name}
              </h3>
              <p className={`text-base mt-4 font-mono ${isDark ? 'text-gray-400' : 'text-gray-600'} flex-grow`}>
                {mentor.description}
              </p>
              <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex items-center gap-2 text-sm font-mono ${
                      isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'
                  } transition-colors`}
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MentorSection;
