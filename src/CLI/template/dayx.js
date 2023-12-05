const fs = require("fs");

const input = fs.readFileSync("input.txt", `utf-8`).split(`\n`);
const example = fs.readFileSync("example.txt", `utf-8`).split(`\n`);

console.clear();
console.log();
console.log("           ---------------------- NEW -------------------------");
console.log();

for (let i = 0; i < example.length; i++) {
	const line = example[i].trim();
	console.log(line);
}

const part1 = input => {
	for (let i = 0; i < input.length; i++) {
		const line = input[i].trim();
		console.log(line);
	}
};
const part2 = input => {
	for (let i = 0; i < input.length; i++) {
		const line = input[i].trim();
		console.log(line);
	}
};

part1();
part2();
