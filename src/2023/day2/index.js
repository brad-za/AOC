const fs = require("fs");

console.clear();
console.log();
console.log("           ---------------------- NEW -------------------------");
console.log();

const part1 = input => {
	let parsedInput = [];

	for (let i = 0; i < input.length; i++) {
		// console.log(input[i].trim());
		const gameNumber = input[i].trim().split(":")[0].split(" ")[1];
		// Initialize the JSON structure
		const jsonObject = {
			number: gameNumber,
			games: [],
		};
		const gameScenarios = input[i]
			.split(":")[1]
			.split(";")
			.map(s => s.trim());
		// Process each game scenario
		gameScenarios.forEach(scenario => {
			const pairs = scenario.split(", ");
			const gameData = {};
			pairs.forEach(pair => {
				const [number, color] = pair.split(" ");
				gameData[color] = parseInt(number);
			});
			jsonObject.games.push(gameData);
		});
		parsedInput.push(jsonObject);
	}

	const rules = {
		red: 12,
		green: 13,
		blue: 14,
	};

	let total = 0;

	// parsedInput.forEach(elem => {
	for (let k = 0; k < parsedInput.length; k++) {
		const elem = parsedInput[k];
		console.log("game number -", elem.number);
		let result = true;
		for (let i = 0; i < elem.games.length; i++) {
			const game = elem.games[i];
			console.log("round number -", i);
			console.log(game);
			if (rules.blue < game.blue) {
				console.log(
					`game ${elem.number} does not work because of blue`,
				);
				result = false;
				break;
				// total += elem.number
			} else if (rules.red < game.red) {
				console.log(`game ${elem.number} does not work because of red`);
				result = false;
				break;
				// total += elem.number
			} else if (rules.green < game.green) {
				console.log(
					`game ${elem.number} does not work because of green`,
				);
				result = false;
				break;
				// total += elem.number
			}
		}

		console.log("game number", elem.number, result);
		console.log("old total -", total);
		if (result) {
			total += parseInt(elem.number);
		}
		console.log("new total -", total);
		console.log();
		console.log();
		console.log();
	}
};
const part2 = () => {};

const input = fs.readFileSync("input.txt", `utf-8`).split(`\n`);
// const input = fs.readFileSync("example.txt", `utf-8`).split(`\n`);

part1(input);
part2();
