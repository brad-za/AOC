// Import required modules
const fs = require("fs");
const path = require("path");

// Base directory where year folders will be created
const baseDir = path.join(".", "src");

// Function to get the latest year and day number
const getLatestYearAndDay = () => {
	// Ensure base directory exists, if not, create it
	if (!fs.existsSync(baseDir)) {
		fs.mkdirSync(baseDir);
	}

	// Read the base directory and filter out directories
	const directories = fs
		.readdirSync(baseDir)
		.filter(file => fs.lstatSync(path.join(baseDir, file)).isDirectory());

	// Filter out directories that match a 4-digit pattern (for years)
	const yearFolders = directories.filter(dir => /^\d{4}$/.test(dir));

	// Determine the latest year by finding the maximum in the year folders, default to current year
	const latestYear = Math.max(
		...yearFolders.map(year => parseInt(year, 10)),
		new Date().getFullYear(),
	);

	let latestDay = 0;
	// Check if the latest year directory exists, and if so, find the latest day
	if (yearFolders.includes(latestYear.toString())) {
		const dayFolders = fs
			.readdirSync(path.join(baseDir, latestYear.toString()))
			.filter(file => file.startsWith("day"));
		latestDay = dayFolders.reduce(
			(max, folder) =>
				Math.max(max, parseInt(folder.replace("day", ""), 10)),
			0,
		);
	}

	// Return the latest year and day
	return { latestYear, latestDay };
};

// Function to create a new day folder with required files
const createDayFolder = (year, dayNumber) => {
	const yearFolder = path.join(baseDir, year.toString());

	// Create the year folder if it doesn't exist
	if (!fs.existsSync(yearFolder)) {
		fs.mkdirSync(yearFolder);
	}

	// Create the day folder
	const folderName = path.join(yearFolder, `day${dayNumber}`);
	fs.mkdirSync(folderName);

	// Read the template from src/CLI/template/dayx.js
	const templateContent = fs.readFileSync("src/CLI/template/dayx.js", "utf8");

	// Create index.js, input.txt, and input(e).txt in the new day folder with appropriate content
	fs.writeFileSync(path.join(folderName, "index.js"), templateContent);
	fs.writeFileSync(path.join(folderName, "input.txt"), "");
	fs.writeFileSync(path.join(folderName, "example.txt"), "");

	console.log(
		`Created folder and files for day ${dayNumber} of year ${year} in ${folderName}`,
	);
};

// Main function to orchestrate the process
const main = () => {
	// Get the latest year and day
	const { latestYear, latestDay } = getLatestYearAndDay();
	// Determine the next day number
	const nextDayNumber = latestDay + 1;

	// Create a new day folder for the next day
	createDayFolder(latestYear, nextDayNumber);
};

// Execute the main function
main();
