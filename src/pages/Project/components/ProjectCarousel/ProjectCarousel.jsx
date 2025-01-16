import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import {useTheme} from "../../../../hooks/DarkMode/DarkMode.jsx";

const ProjectCarousel = ({ project }) => {
    const [loadingStates, setLoadingStates] = useState(
        project.images.map(() => true) // Initialize all images as "loading"
    );
    const [isLoaded, setIsLoaded] = useState(false);

    // Update loading states after 1 second
    const handleImageLoad = (index) => {
        setTimeout(() => {
            setLoadingStates((prev) => {
                const updatedStates = [...prev];
                updatedStates[index] = false; // Set loading to false after 1 second
                return updatedStates;
            });
        }, 1000); // 1-second delay
    };

    // Check if all images are loaded
    useEffect(() => {
        if (loadingStates.every((state) => !state)) {
            setIsLoaded(true); // All images are loaded, show the carousel controls
        }
    }, [loadingStates]);

    const {isDark} = useTheme();

    return (
        <Carousel
            showArrows={isLoaded}
            showIndicators={isLoaded}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            className="h-full flex items-center justify-center"
        >
            {project.images.map((image, index) => (
                <div key={index} className="h-full relative">
                    {loadingStates[index] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black">
                            {/* Skeleton Loader */}
                            <div className=" w-[93%] md:w-[95%]  aspect-[4/3] animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
                                <div className={`w-full aspect-[4/3]  ${isDark? 'bg-gray-800':'bg-gray-600'} rounded-md`}></div>
                            </div>
                        </div>
                    )}
                    <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        className={`object-cover h-full w-full ${
                            loadingStates[index] ? "hidden" : "block"
                        }`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(index)}
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default ProjectCarousel;
