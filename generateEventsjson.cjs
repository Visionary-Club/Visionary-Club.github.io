const fs = require('fs-extra');
const path = require('path');

const eventsDir = path.join(__dirname, 'public', 'Events');
const eventsJsonPath = path.join(__dirname, 'public', 'events.json');
const rawBaseUrl = 'https://raw.githubusercontent.com/Visionary-Club/Visionary-Club.github.io/main/public/Events';

const generateEventsJson = async () => {
    const eventDirs = await fs.readdir(eventsDir);
    const events = [];

    for (const dir of eventDirs) {
        const metadataPath = path.join(eventsDir, dir, 'metadata.json');
        if (await fs.pathExists(metadataPath)) {
            const metadata = await fs.readJson(metadataPath);
            const images = [];

            // Add main image
            const mainImagePath = path.join(eventsDir, dir, 'images', 'main.png');
            if (await fs.pathExists(mainImagePath)) {
                metadata.image = `${rawBaseUrl}/${dir}/images/main.png`;
            }

            // Add additional images
            for (let i = 1; i <= 10; i++) {
                const imagePathpng = path.join(eventsDir, dir, 'images', `${String(i).padStart(2, '0')}.png`);

                if (await fs.pathExists(imagePathpng)) {
                    images.push(`${rawBaseUrl}/${dir}/images/${String(i).padStart(2, '0')}.png`);
                } else {
                    break;
                }
            }

            events.push({ ...metadata, images });
        }
    }

    await fs.writeJson(eventsJsonPath, events, { spaces: 2 });
    console.log('events.json generated successfully');
};

generateEventsJson().catch(err => console.error('Error generating events.json:', err));
