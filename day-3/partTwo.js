const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split(`\n`);

let groupedInput = [];

let tempArray = [];

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let totalPriority = 0;
let addedToPriority = false;

for (let i = 0; i < input.length; i++) {
	if (i == 0) {
		tempArray.push(input[i]);
		continue;
	} else if (i % 3 == 0) {
		groupedInput.push(tempArray);
		tempArray = [];
	}
	tempArray.push(input[i]);
}

// console.log(groupedInput);

groupedInput.forEach((group, index) => {
	// console.log(group, index);
	for (let i = 0; i < group[0].length; i++) {
		const firstLetter = group[0][i];
		// console.log(group[0][i]);
		for (let j = 0; j < group[1].length; j++) {
			const secondLetter = group[1][j];
			// console.log(group[1][j]);
			for (let k = 0; k < group[2].length; k++) {
				const thirdLetter = group[2][k];
				// console.log(group[2][k]);
				// console.log(firstLetter, secondLetter, thirdLetter);
				if (firstLetter == secondLetter && firstLetter == thirdLetter) {
					const priority = priorities.indexOf(secondLetter) + 1;
					if (!addedToPriority) {
						addedToPriority = true;
						totalPriority += priority;
					}
				}
			}
		}
	}
	console.log("group", index);
	addedToPriority = false;
});

console.log(totalPriority);

// wrong answers
// // 2534
