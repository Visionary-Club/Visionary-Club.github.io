const fs = require('fs');
const path = require('path');

// Define the base directory where the member folders are located
const baseDir = path.join(__dirname, 'public', 'Members');

// Define the base path for local image paths
//const basePath = 'public/Members';
// Define the base GitHub path for image URLs (for raw GitHub usage)
const baseGithubPath = 'https://raw.githubusercontent.com/o-Erebus/Visionary-Club.github.io/development/public/Members';

// Map of category names to the keys in combinedData
const categoryMapping = {
    'Senior Mentor': 'mentors',
    'Leadership': 'leadership',
    'Club Leads': 'clubLeads',
    'Core Members': 'coreMembers',
    'Management Team': 'managementTeam'
};

// Function to read and parse the metadata JSON file
const readMetadata = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(`Successfully read metadata from: ${filePath}`);
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error reading file ${filePath}:`, err);
        return null;
    }
};

// Function to combine the metadata into a final JSON structure
const combineMetadata = () => {
    let combinedData = {
        mentors: [],
        leadership: [],
        clubLeads: [],
        coreMembers: [],
        managementTeam: []
    };

    // Iterate through each category
    for (const category in categoryMapping) {
        const categoryDir = path.join(baseDir, category);

        // Check if the category directory exists
        if (fs.existsSync(categoryDir)) {
            console.log(`Processing category: ${category}`);
            const membersDirs = fs.readdirSync(categoryDir);

            membersDirs.forEach((memberDir) => {
                const metadataFilePath = path.join(categoryDir, memberDir, 'metadata.json');

                // Check if the metadata file exists
                if (fs.existsSync(metadataFilePath)) {
                    const metadata = readMetadata(metadataFilePath);
                    if (metadata) {
                        const categoryKey = categoryMapping[category];

                        // Set the correct image path
                        const imageFileName = metadata.image.split('/').pop();
                        //metadata.image = path.join(basePath, category, memberDir, imageFileName); // Local path

                        // Uncomment the line below for raw GitHub path
                        metadata.image = `${baseGithubPath}/${category}/${memberDir}/${imageFileName}`;

                        combinedData[categoryKey].push(metadata);
                    }
                } else {
                    console.log(`Metadata file not found for member: ${memberDir}`);
                }
            });
        } else {
            console.log(`Category directory not found: ${category}`);
        }
    }

    // Maintain the specific order for mentors
    if (combinedData.mentors.length > 0) {
        const specificOrder = ['Dr. Nitin Satpute', 'Dr. Pratibha Mahajan'];
        combinedData.mentors.sort((a, b) => {
            const indexA = specificOrder.indexOf(a.name);
            const indexB = specificOrder.indexOf(b.name);

            // If both names are in the order array, sort based on that
            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB;
            }
            // If one is in the order array and the other is not, place the ordered one first
            if (indexA !== -1) {
                return -1;
            }
            if (indexB !== -1) {
                return 1;
            }
            return 0; // If neither is in the specific order array, maintain original order
        });
    }

    // Ensure "President" is first in the leadership category
    if (combinedData.leadership.length > 0) {
        const presidentIndex = combinedData.leadership.findIndex(member => member.role.toLowerCase() === 'president');
        if (presidentIndex !== -1) {
            const president = combinedData.leadership.splice(presidentIndex, 1)[0]; // Remove the president
            combinedData.leadership.unshift(president); // Add president to the start of the array
        }
    }

    return combinedData;
};

// Function to save the combined JSON file
const saveCombinedJson = (combinedData) => {
    const outputFilePath = path.join(__dirname, 'public', 'team-data.json');
    fs.writeFileSync(outputFilePath, JSON.stringify(combinedData, null, 2), 'utf8');
    console.log(`Combined JSON saved to ${outputFilePath}`);
};

// Main function to execute the process
const main = () => {
    const combinedData = combineMetadata();

    // Check if any data was collected
    if (Object.values(combinedData).every(arr => arr.length === 0)) {
        console.log("No data found. Please check the directory structure and metadata files.");
    } else {
        saveCombinedJson(combinedData);
    }
};

// Run the script
main();
