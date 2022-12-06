const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split(`\n`);

// console.log(input);

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let totalPriority = 0;
let addedToPriority = false;
input.forEach((contents, index) => {
	for (let i = 0; i < contents.length / 2; i++) {
		const firstLetter = contents[i];
		// console.log(firstLetter, firstPriority, "first half");
		for (let j = contents.length - 1; j > (contents.length - 1) / 2; j--) {
			const secondLetter = contents[j];
			const priorityOfLetter = priorities.indexOf(secondLetter) + 1;
			if (firstLetter == secondLetter) {
				if (!addedToPriority) {
					console.log("letter", firstLetter, secondLetter);
					console.log("add to priority count", priorityOfLetter);
					console.log("previous priority count", totalPriority);
					console.log(
						"next priority count",
						totalPriority + priorityOfLetter,
					);
					totalPriority += priorityOfLetter;
					addedToPriority = true;
				}
			}
		}
	}

	console.log("   ---   ");
	console.log("backpack number ->", index);
	addedToPriority = false;
});

console.log(totalPriority);

// wrong answers
// // 8072
// // 1243
// // 7493
// // 9706
// // 12112
