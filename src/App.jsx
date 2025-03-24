import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsPage from './pages/Project/ProjectsPage.jsx';
import HomePage from './pages/Home/Homepage';
import NotFoundPage from './pages/NotFound/NotFoundPage.jsx';
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { ThemeProvider } from "./providers/ThemeProvider/ThemeProvider.jsx";
import MembersPage from "./pages/Members/MembersPage.jsx";
import JoinUsPage from "./pages/JoinUs/JoinUsPage.jsx";
import ContactUsPage from "./pages/ContactUs/ContactUsPage.jsx";
import { MetaTags } from "./components/MetaTags/MetaTags.jsx";
import Alumni from '../src/pages/alumni/Alumni.jsx';
import Events from '../src/pages/Events/pages/Events.jsx';

const App = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <ThemeProvider>
            <Router>
                <MetaTags />
                <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/members" element={<MembersPage />} />
                    <Route path="/join" element={<JoinUsPage />} />
                    <Route path="/contact" element={<ContactUsPage />} />
                    <Route path="/alumni" element={<Alumni />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
