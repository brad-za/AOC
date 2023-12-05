const fs = require("fs");

const input = fs.readFileSync("input.txt", `utf-8`).split(`\n`);

console.log(input);

input.forEach((element, index) => {
	console.log(`input ${index}`);

	let buffer = [];

	for (let i = 0; i < element.length; i++) {
		const letter = element[i];
		if (buffer.length < 4) {
			buffer.push(letter);
			console.log(
				`${i} buffer less than 4 -> [${buffer.slice(
					0,
					3,
				)}  ] + ${letter} = [${buffer}]`,
			);
		}
		if (buffer.length === 4 && buffer.length === new Set(buffer).size) {
			console.log(`all values unique ${i + 1} ${element[i]} ${buffer}`);
			break;
			// buffer.shift();
		} else if (buffer.length === 4) {
			console.log(
				`${i} buffer not unique  -> [${buffer}] - ${buffer.shift()} = [${buffer}]`,
			);
		}
	}

	// console.log(buffer);
});
