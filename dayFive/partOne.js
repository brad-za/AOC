const fs = require("fs");

const input = fs
	.readFileSync("input.txt", `utf-8`)
	.split(`\n`)
	.map(val => val.split(" "))
	.map(val => {
		return { move: val[1], from: val[3], to: val[5] };
		// return [val[1], val[3], val[5]];
	});

let currentStack = [
	["B", "L", "D", "T", "W", "C", "F", "M"],
	["N", "B", "L"],
	["J", "C", "H", "T", "L", "R"],
	["S", "P", "J", "W"],
	["Z", "S", "C", "F", "T", "L", "R"],
	["W", "D", "G", "B", "H", "N", "Z"],
	["F", "M", "S", "P", "V", "G", "C", "N"],
	["W", "Q", "R", "J", "F", "V", "C", "Z"],
	["R", "P", "M", "L", "H"],
];

input.forEach((element, index) => {
	for (let i = 0; i < element.move; i++) {
		currentStack[element.to - 1].push(
			currentStack[element.from - 1].pop()[0],
		);
	}
});

let answer = "";

currentStack.forEach((element, index) => {
	answer += element[element.length - 1];
});
console.log("");
console.log("   --- answer ---");
console.log("");

console.log(answer);
