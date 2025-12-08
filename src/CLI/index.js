// Import required modules
const fs = require("fs");
const path = require("path");

// Base directory where year folders will be created
const baseDir = path.join(".", "src");

// Parse command line arguments
const parseArgs = () => {
	const args = process.argv.slice(2);
	const options = {
		year: null,
		day: null,
	};

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		if (arg === "--year" || arg === "-y") {
			options.year = parseInt(args[++i], 10);
		} else if (arg === "--day" || arg === "-d") {
			options.day = parseInt(args[++i], 10);
		}
	}

	return options;
};

// Function to get the latest day number for a given year
const getLatestDayForYear = (year) => {
	const yearFolder = path.join(baseDir, year.toString());

	if (!fs.existsSync(yearFolder)) {
		return 0;
	}

	const dayFolders = fs
		.readdirSync(yearFolder)
		.filter(
			(file) =>
				fs.lstatSync(path.join(yearFolder, file)).isDirectory() &&
				file.startsWith("day"),
		);

	if (dayFolders.length === 0) {
		return 0;
	}

	return dayFolders.reduce(
		(max, folder) => Math.max(max, parseInt(folder.replace("day", ""), 10)),
		0,
	);
};

// Function to create a new day folder with required files
const createDayFolder = (year, dayNumber) => {
	// Validate day number (Advent of Code is days 1-25)
	if (dayNumber < 1 || dayNumber > 25) {
		console.error(
			`Error: Day number must be between 1 and 25. Got: ${dayNumber}`,
		);
		process.exit(1);
	}

	const yearFolder = path.join(baseDir, year.toString());
	const folderName = path.join(yearFolder, `day${dayNumber}`);

	// Check if day folder already exists
	if (fs.existsSync(folderName)) {
		console.error(`Error: Folder already exists: ${folderName}`);
		process.exit(1);
	}

	// Create the year folder if it doesn't exist
	if (!fs.existsSync(yearFolder)) {
		fs.mkdirSync(yearFolder, { recursive: true });
		console.log(`Created year folder: ${yearFolder}`);
	}

	// Create the day folder
	fs.mkdirSync(folderName);

	// Read the template
	const templatePath = path.join(__dirname, "template", "dayx.ts");
	let templateContent = fs.readFileSync(templatePath, "utf8");

	// Replace placeholders with actual values
	templateContent = templateContent
		.replace(/__YEAR__/g, year.toString())
		.replace(/__DAY__/g, dayNumber.toString());

	// Create files in the new day folder
	fs.writeFileSync(path.join(folderName, "index.ts"), templateContent);
	fs.writeFileSync(path.join(folderName, "input.txt"), "");
	fs.writeFileSync(path.join(folderName, "example.txt"), "");

	console.log(`\n✅ Created Day ${dayNumber} for Year ${year}`);
	console.log(`   📁 ${folderName}`);
	console.log(`   📄 index.ts`);
	console.log(`   📄 input.txt`);
	console.log(`   📄 example.txt\n`);
};

// Main function to orchestrate the process
const main = () => {
	// Ensure base directory exists
	if (!fs.existsSync(baseDir)) {
		fs.mkdirSync(baseDir);
	}

	// Parse command line arguments
	const options = parseArgs();

	// Determine the year (default to current year)
	const year = options.year || new Date().getFullYear();

	// Determine the day number
	let dayNumber;
	if (options.day !== null) {
		dayNumber = options.day;
	} else {
		// Find the next day number for the given year
		const latestDay = getLatestDayForYear(year);
		dayNumber = latestDay + 1;
	}

	console.log(`\n🎄 Advent of Code - Day Generator`);
	console.log(`   Year: ${year}`);
	console.log(`   Day: ${dayNumber}`);

	// Create the day folder
	createDayFolder(year, dayNumber);
};

// Execute the main function
main();
