import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from "../../../hooks/DarkMode/DarkMode.jsx";

const TitleWithBorder = ({ title }) => {
  const { isDark } = useTheme();

  return (
      <motion.h2
          className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-cyan-500' : 'text-black'
          } pb-2`}
          initial={{ width: '15rem', borderBottomWidth: '1px' }}
          whileInView={{
            width: '100%',
            borderBottomWidth: '2px',
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          style={{
            borderBottom: `0.5px solid ${isDark ? 'cyan' : 'rgb(234 179 8 / var(--tw-border-opacity, 1))'}`,
          }}
          viewport={{ once: true }}
      >
        {title}
      </motion.h2>
  );
};

export default TitleWithBorder;