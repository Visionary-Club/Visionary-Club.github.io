const fs = require('fs-extra');
const path = require('path');

const projectsDir = path.join(__dirname, 'public', 'Projects');
const projectsJsonPath = path.join(__dirname, 'public', 'projects.json');
const rawBaseUrl = 'https://raw.githubusercontent.com/o-Erebus/Visionary-Club.github.io/main/public/Projects';
//const rawBaseUrl = "Projects";
const generateProjectsJson = async () => {
    const projectDirs = await fs.readdir(projectsDir);
    const projects = [];

    for (const dir of projectDirs) {
        const metadataPath = path.join(projectsDir, dir, 'metadata.json');
        if (await fs.pathExists(metadataPath)) {
            const metadata = await fs.readJson(metadataPath);
            const images = [];

            // Add main image
            const mainImagePath = path.join(projectsDir, dir, 'images', 'main.png');
            if (await fs.pathExists(mainImagePath)) {
                metadata.image = `${rawBaseUrl}/${dir}/images/main.png`;
            }

            // Add additional images
            for (let i = 1; i <= 10; i++) {
                const imagePathpng = path.join(projectsDir, dir, 'images', `${String(i).padStart(2, '0')}.png`);

                if (await fs.pathExists(imagePathpng)) {
                    images.push(`${rawBaseUrl}/${dir}/images/${String(i).padStart(2, '0')}.png`);
                } else {
                    break;
                }
            }

            projects.push({ ...metadata, images });
        }
    }

    await fs.writeJson(projectsJsonPath, projects, { spaces: 2 });
    console.log('projects.json generated successfully');
};

generateProjectsJson().catch(err => console.error('Error generating projects.json:', err));
