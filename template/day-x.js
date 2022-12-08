const fs = require("fs");

const input = fs.readFileSync("day-x(e).txt", `utf-8`).split(`\n`);

console.clear();
console.log("day - x | time started - xx:xx");
console.log();
console.log("           ---------------------- NEW -------------------------");
console.log();

for (let i = 0; i < input.length; i++) {
	const line = input[i].trim();
	console.log(line);
}

const part1 = () => {};
const part2 = () => {};

part1();
part2();
