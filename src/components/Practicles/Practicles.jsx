import React from 'react';
import Particles from 'react-tsparticles';
import { useTheme } from "../../hooks/DarkMode/DarkMode.jsx";

const ParticlesBackground = ({ init, loaded }) => {
    const { isDark } = useTheme();

    const particlesConfig = {
        background: {
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 0.7,
                },
            },
        },
        particles: {
            color: {
                value: isDark ? "#00FFFF" : "#009090",
            },
            links: {
                // color: isDark ? "#00FFFF" : "#000000",
                color: isDark ? "#FFFFFF" : "#000000",
                distance: 150,
                enable: true,
                opacity: isDark ? 0.3 : 0.2,  // Slightly lower opacity for light mode
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100,
            },
            opacity: {
                value: isDark ? 0.4 : 0.3,  // Slightly lower opacity for light mode
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={init}
            loaded={loaded}
            options={particlesConfig}
        />
    );
};

export default ParticlesBackground;