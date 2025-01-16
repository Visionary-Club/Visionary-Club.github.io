import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const MemberCard = ({ member, index, isDark }) => {
  const defaultImage = 'https://placehold.co/200x300/00AAAA/FFFFFF/?text=No+Image';
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handle image load state
  const handleImageLoad = () => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 500);
  };

  return (
      <div
          key={index}
          className={`relative p-4 rounded-xl border-none bg-transparent w-72 md:w-60 ${isDark ? 'hover:bg-gray-600/20' : 'hover:bg-yellow-400/10'} duration-1000`}
      >
        {/* Image Section with Skeleton Loader */}
        <div className="overflow-hidden rounded-lg aspect-[2/2.5] mx-auto w-60 md:w-48">
          {/* Skeleton loader when the image is not loaded */}
          {!isImageLoaded && (
              <div className={`w-full h-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'} animate-pulse rounded-lg`} />
          )}
          {/* Image displayed once it's loaded */}
          <img
              src={member.image || defaultImage}
              alt={member.name}
              onLoad={handleImageLoad}
              className={`w-full h-full object-cover duration-500 ${isImageLoaded ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          />
        </div>

        {/* Content Section */}
        <div className="text-left mx-2 mt-4">
          {/* Placeholder content while the image is loading */}
          {!isImageLoaded ? (
              <>
                <div className={`h-5 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded w-3/4 mb-2`} />
                <div className={`h-4 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded w-1/2`} />
              </>
          ) : (
              <>
                <h2 className={`text-lg font-bold ${isDark ? 'text-cyan-500' : 'text-[#1D1D1D]'}`}>
                  {member.name}
                </h2>
                <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {member.role}
                </p>
              </>
          )}

          {/* Social Media Links */}
          <div className="flex justify-left mx-auto gap-4 mt-3">
            {!isImageLoaded ? (
                <>
                  <div className={`w-5 h-5 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-full`} />
                  <div className={`w-5 h-5 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-full`} />
                </>
            ) : (
                <>
                  {member.linkedin && (
                      <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-lg ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'}`}
                      >
                        <FaLinkedin />
                      </a>
                  )}
                  {member.github && (
                      <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-lg ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-gray-800 hover:text-gray-600'}`}
                      >
                        <FaGithub />
                      </a>
                  )}
                </>
            )}
          </div>
        </div>
      </div>
  );
};

export default MemberCard;
