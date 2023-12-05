const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split(`\n`);

let elfCount = 0;
let condencedInput = [0];
let currentElfCount = 0;

for (let i = 0; i < input.length; i++) {
	// for each amount of calories
	// if there is a blank entry in the array move onto the next elf
	if (input[i] == "") {
		// console.log("missed one")
		elfCount++;
		condencedInput[elfCount] = 0;
		currentElfCount = 0;
		continue;
	}

	// console.log("index", i, input[i], " - ", condencedInput[elfCount]);
	condencedInput[elfCount] += parseInt(input[i]);
}

console.log("max number", Math.max(...condencedInput));
