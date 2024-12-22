import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsPage from './pages/Project/ProjectsPage.jsx';
import HomePage from './pages/Home/Homepage';
import NotFoundPage from './pages/NotFound/NotFoundPage.jsx';
import {particlesConfig} from "./config/particlesConfig.js";
import Particles from "react-tsparticles";
import React, {useCallback, useState} from "react";
import {loadSlim} from "tsparticles-slim";
import Navbar from "./components/Navbar/Navbar.jsx";
import {ThemeProvider} from "./providers/ThemeProvider/ThemeProvider.jsx";


const App = () => {


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <ThemeProvider>
        <Router>

            <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <Routes>
                <Route path="/Visionary-Club.github.io/" element={<HomePage />} />
                <Route path="/Visionary-Club.github.io/projects" element={<ProjectsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
        </ThemeProvider>
    );
};

export default App;