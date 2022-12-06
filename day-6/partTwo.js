const fs = require("fs");

const input = fs.readFileSync("example.txt", `utf-8`).split(`\n`);

input.forEach((element, index) => {
	let buffer = [];

	for (let i = 0; i < element.length; i++) {
		const letter = element[i];
		if (buffer.length < 14) {
			buffer.push(letter);
		}
		if (buffer.length === 14 && buffer.length === new Set(buffer).size) {
			console.log(`answer ${index} -> ${i + 1} ${element[i]} ${buffer}`);
			break;
			// buffer.shift();
		} else if (buffer.length === 14) {
			buffer.shift();
		}
	}
});
