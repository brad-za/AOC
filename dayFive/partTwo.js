const fs = require("fs");

const input = fs
	.readFileSync("input.txt", `utf-8`)
	.split(`\n`)
	.map(val => val.split(" "))
	.map(val => {
		return { move: val[1], from: val[3], to: val[5] };
		// return [val[1], val[3], val[5]];
	});

// example stack
// let currentStack = [["Z", "N"], ["M", "C", "D"], ["P"]];

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
let tempStack = [];

input.forEach((element, index) => {
	for (let i = 0; i < element.move; i++) {
		tempStack.push(currentStack[element.from - 1].pop());
	}
	while (tempStack.length) {
		currentStack[element.to - 1].push(tempStack.pop());
	}
});

let answer = "";

currentStack.forEach((element, index) => {
	answer += element[element.length - 1];
});

console.log("\n", "--- answer ---", "\n\n", "  ", answer, "\n");
