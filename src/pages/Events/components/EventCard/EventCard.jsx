import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal.jsx';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow.jsx';
import { useTheme } from '../../../../hooks/DarkMode/DarkMode.jsx';

const EventCard = ({ event, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();

  const slideDirection = index % 2 === 0 ? -100 : 100;

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: slideDirection,
      y: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.2,
        bounce: 0.3,
        delay: index * 0.2
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const categoryColors = {
    Featured: "bg-purple-600",
    Technical: "bg-blue-600",
    Educational: "bg-green-600",
    Competition: "bg-red-600"
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const handleExploreClick = () => {
    if (event.title !== "Inaugration Ceremony") {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={`w-full flex flex-col ${
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-12 items-center backdrop-blur-sm bg-opacity-5 bg-white dark:bg-opacity-5 p-8 rounded-3xl`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div 
          className="w-full lg:w-3/5 overflow-hidden rounded-2xl relative group"
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-300"
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <p className="text-lg font-medium">{event.description}</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-2/5 space-y-6"
          variants={contentVariants}
          animate={isHovered ? "hover" : "rest"}
        >
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className={`${categoryColors[event.category]} px-4 py-1.5 rounded-full text-white text-sm font-medium inline-block`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {event.category}
            </motion.span>
            <motion.h2 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {event.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-500 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {event.date}
            </motion.p>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {event.description}
          </motion.p>

          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 text-lg font-medium shadow-lg hover:shadow-xl ${
              event.title === "Inaugration Ceremony" ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleExploreClick}
            disabled={event.title === "Inaugration Ceremony"}
          >
            Explore
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {event.title}
              </h2>
              <span className={`${categoryColors[event.category]} px-4 py-1.5 rounded-full text-white text-sm font-medium`}>
                {event.category}
              </span>
            </div>
            <p className="text-xl text-blue-600 font-semibold">{event.date}</p>
          </div>
          
          {event.images && event.images.length > 0 && (
            <div className="mb-8">
              <ImageSlideshow images={event.images} />
            </div>
          )}
          
          <div className="space-y-6">
            <div>
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                About the Event
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
                {event.fullDescription || event.description}
              </p>
            </div>
            
            {event.highlights && (
              <div>
                <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                  Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.highlights.map((highlight, idx) => (
                    <li key={idx} className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fullDescription: PropTypes.string,
    image: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    highlights: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default EventCard;