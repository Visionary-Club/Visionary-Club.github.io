import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../../../../hooks/DarkMode/DarkMode.jsx';

const Modal = ({ isOpen, onClose, children }) => {
  const { isDark } = useTheme();
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className={`${
            isDark 
              ? 'bg-gradient-to-r from-black to-gray-950 text-white' 
              : 'bg-white text-black'
          } rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto transition-colors duration-500`}
          onClick={e => e.stopPropagation()}
        >
          {children}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 ${
              isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;