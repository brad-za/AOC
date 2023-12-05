const fs = require("fs");

console.clear();
console.log();
console.log("           ---------------------- NEW -------------------------");
console.log();

const part1 = input => {
	let answer = 0;
	for (let i = 0; i < input.length; i++) {
		const line = input[i].trim().replace(/\D+/g, "");
		const firstAndLastDigits = parseInt(line.slice(0, 1) + line.slice(-1));
		answer += firstAndLastDigits;

		console.log({ i, line, answer, firstAndLastDigits });
	}
};

const part2 = input => {
	const numberMap = {
		one: "1",
		two: "2",
		three: "3",
		four: "4",
		five: "5",
		six: "6",
		seven: "7",
		eight: "8",
		nine: "9",
	};

	let totalSum = 0;

	for (let line of input) {
		let replacedLine = line.replace(
			/(one|two|three|four|five|six|seven|eight|nine)/g,
			matched => numberMap[matched],
		);

		// Remove non-digit characters
		replacedLine = replacedLine.replace(/\D/g, "");

		if (replacedLine.length >= 2) {
			const firstDigit = parseInt(replacedLine.charAt(0), 10);
			const lastDigit = parseInt(
				replacedLine.charAt(replacedLine.length - 1),
				10,
			);

			totalSum += firstDigit + lastDigit;
		} else if (replacedLine.length === 1) {
			// If there's only one digit, add it twice
			totalSum += parseInt(replacedLine.charAt(0), 10) * 2;
		}

		// Log each line for debugging
		console.log(
			`Line: ${line}, Replaced: ${replacedLine}, Current Total Sum: ${totalSum}`,
		);
	}

	return totalSum;
};

// Call part2 function with your full dataset

const input = fs.readFileSync(`input.txt`, "utf-8").split("\n");
// const input = fs.readFileSync(`example.txt`, "utf-8").split("\n");
// const input = fs.readFileSync(`example2.txt`, "utf-8").split("\n");

// part1(input);
// part2(input);
console.log("Total Sum:", part2(input));
