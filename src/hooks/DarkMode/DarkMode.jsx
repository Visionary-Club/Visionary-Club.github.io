import React, { createContext, useContext, useEffect, useState } from 'react';
import ThemeContext from "../../providers/ThemeProvider/ThemeProvider.jsx";



// Custom hook for using theme
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
