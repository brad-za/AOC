const fs = require("fs");

const input = fs.readFileSync("input.txt", `utf-8`).split(`\n`);

const testInput = input.map((pair, index) => {
	const splitPair = pair.split(",");
	return splitPair.map(range => range.split("-"));
});

let initialValue = 0;

const totalInRange = testInput.reduce((accumulator, currValue) => {
	if (currValue[0][0]) {
		const firstValue = currValue[0];
		const secondValue = currValue[1];

		if (
			// max1 >= min2 and max2 >= min1
			// max1 greater than min2 and max2 less than min1
			parseInt(firstValue[1]) >= parseInt(secondValue[0]) &&
			parseInt(secondValue[1]) >= parseInt(firstValue[0])
		) {
			accumulator++;
		}
	}
	return accumulator;
}, initialValue);

console.log(totalInRange);
