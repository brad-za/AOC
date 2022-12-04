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
		console.log(firstValue);
		console.log(secondValue);
		console.log(
			firstValue[0] >= secondValue[0],
			firstValue[0] >= secondValue[0]
				? `${firstValue[0]} is greater than ${secondValue[0]}`
				: `${firstValue[0]} is not greater than ${secondValue[0]}`,
		);
		console.log(
			firstValue[1] <= secondValue[1],
			firstValue[1] <= secondValue[1]
				? `${firstValue[1]} is smaller than ${secondValue[1]}`
				: `${firstValue[1]} is not smaller than ${secondValue[1]}`,
		);
		console.log("                --- checking reverse --- ");
		console.log(
			secondValue[0] >= firstValue[0],
			secondValue[0] >= firstValue[0]
				? `${secondValue[0]} is greater than ${firstValue[0]}`
				: `${secondValue[0]} is not greater than ${firstValue[0]}`,
		);
		console.log(
			secondValue[1] <= firstValue[1],
			secondValue[1] <= firstValue[1]
				? `${secondValue[1]} is smaller than ${firstValue[1]}`
				: `${secondValue[1]} is not smaller than ${firstValue[1]}`,
		);

		if (
			(parseInt(firstValue[0]) >= parseInt(secondValue[0]) &&
				parseInt(firstValue[1]) <= parseInt(secondValue[1])) ||
			(parseInt(secondValue[0]) >= parseInt(firstValue[0]) &&
				parseInt(secondValue[1]) <= parseInt(firstValue[1]))
		) {
			accumulator++;
		}
	}
	return accumulator;
}, initialValue);

console.log(totalInRange);
