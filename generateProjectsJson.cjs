const fs = require('fs-extra');
const path = require('path');

const projectsDir = path.join(__dirname, 'public', 'Projects');
const projectsJsonPath = path.join(__dirname, 'public', 'projects.json');

const generateProjectsJson = async () => {
    const projectDirs = await fs.readdir(projectsDir);
    const projects = [];

    for (const dir of projectDirs) {
        const metadataPath = path.join(projectsDir, dir, 'metadata.json');
        if (await fs.pathExists(metadataPath)) {
            const metadata = await fs.readJson(metadataPath);
            const images = [];

            // Add main image
            const mainImagePath = path.join(projectsDir, dir, 'images', 'main.svg');
            if (await fs.pathExists(mainImagePath)) {
                metadata.image = `/Projects/${dir}/images/main.svg`;
            }

            // Add additional images
            for (let i = 1; i <= 10; i++) {
                const imagePathSvg = path.join(projectsDir, dir, 'images', `${String(i).padStart(2, '0')}.svg`);

                if (await fs.pathExists(imagePathSvg)) {
                    images.push(`/Projects/${dir}/images/${String(i).padStart(2, '0')}.svg`);
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