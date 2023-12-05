const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split(`\n`);

// console.log(input);

const resultMap = {
	A: "rock",
	X: "rock",
	B: "paper",
	Y: "paper",
	C: "scissors",
	Z: "scissors",
};

const scores = {
	win: 6,
	draw: 3,
	loss: 0,
	rock: 1,
	paper: 2,
	scissors: 3,
};

// scores -> (1 for Rock, 2 for Paper, and 3 for Scissors) + (0 if you lost, 3 if the round was a draw, and 6 if you won)

const initialValue = 0;

const scoreTotal = input.reduce((accumulator, currentValue) => {
	const valuesForRound = currentValue.split(" ");

	if (resultMap[valuesForRound[0]] == resultMap[valuesForRound[1]]) {
		// console.log(resultMap[valuesForRound[0]], resultMap[valuesForRound[1]]);
		// console.log("player draws");
		if (resultMap[valuesForRound[0]] == "rock") {
			// console.log("adding to accumulator", "3 + 1");
			// console.log("last accumulator value", accumulator);
			// console.log("new accumulator value", accumulator + 3 + 1);
			// console.log("--------------------next round--------------------");
			return (
				accumulator + scores.draw + scores[resultMap[valuesForRound[1]]]
			);
		}
		if (resultMap[valuesForRound[0]] == "paper") {
			// console.log("adding to accumulator", "3 + 2");
			// console.log("last accumulator value", accumulator);
			// console.log("new accumulator value", accumulator + 3 + 2);
			// console.log("--------------------next round--------------------");
			return (
				accumulator + scores.draw + scores[resultMap[valuesForRound[1]]]
			);
		}
		if (resultMap[valuesForRound[0]] == "scissors") {
			// console.log("adding to accumulator", "3 + 3");
			// console.log("last accumulator value", accumulator);
			// console.log("new accumulator value", accumulator + 3 + 3);
			// console.log("--------------------next round--------------------");
			return (
				accumulator + scores.draw + scores[resultMap[valuesForRound[1]]]
			);
		}
	}
	if (
		resultMap[valuesForRound[0]] == "rock" &&
		resultMap[valuesForRound[1]] == "paper"
	) {
		// console.log(resultMap[valuesForRound[0]], resultMap[valuesForRound[1]]);
		// console.log("player wins");
		// console.log("adding to accumulator", "2 + 6");
		// console.log("last accumulator value", accumulator);
		// console.log("accumulator value", accumulator + 2 + 6);
		// console.log("--------------------next round--------------------");
		return accumulator + scores.win + scores[resultMap[valuesForRound[1]]];
	}
	if (
		resultMap[valuesForRound[0]] == "paper" &&
		resultMap[valuesForRound[1]] == "rock"
	) {
		// console.log(resultMap[valuesForRound[0]], resultMap[valuesForRound[1]]);
		// console.log("player loses");
		// console.log("adding to accumulator", "1");
		// console.log("last accumulator value", accumulator);
		// console.log("new accumulator value", accumulator + 1);
		// console.log("--------------------next round--------------------");
		return accumulator + scores.loss + scores[resultMap[valuesForRound[1]]];
	}
	if (
		resultMap[valuesForRound[0]] == "paper" &&
		resultMap[valuesForRound[1]] == "scissors"
	) {
		// console.log(resultMap[valuesForRound[0]], resultMap[valuesForRound[1]]);
		// console.log("player wins");
		// console.log("adding to accumulator", "3 + 6");
		// console.log("last accumulator value", accumulator);
		// console.log("accumulator value", accumulator + 3 + 6);
		// console.log("--------------------next round--------------------");
		return accumulator + scores.win + scores[resultMap[valuesForRound[1]]];
	}
	if (
		resultMap[valuesForRound[0]] == "scissors" &&
		resultMap[valuesForRound[1]] == "paper"
	) {
		// console.log(resultMap[valuesForRound[0]], resultMap[valuesForRound[1]]);
		// console.log("player loses");
		// console.log("adding to accumulator", "3");
		// console.log("last accumulator value", accumulator);
		// console.log("accumulator value", accumulator + 3);
		// console.log("--------------------next round--------------------");
		return accumulator + scores.loss + scores[resultMap[valuesForRound[1]]];
	}
	if (
		resultMap[valuesForRound[0]] == "scissors" &&
		resultMap[valuesForRound[1]] == "rock"
	) {
		// console.log(resultMap[valuesForRound[0]], resultMap[valuesForRound[1]]);
		// console.log("player wins");
		// console.log("adding to accumulator", "1 + 6");
		// console.log("last accumulator value", accumulator);
		// console.log("accumulator value", accumulator + 1 + 6);
		// console.log("--------------------next round--------------------");
		return accumulator + scores.win + scores[resultMap[valuesForRound[1]]];
	}
	if (
		resultMap[valuesForRound[0]] == "rock" &&
		resultMap[valuesForRound[1]] == "scissors"
	) {
		// console.log(resultMap[valuesForRound[0]], resultMap[valuesForRound[1]]);
		// console.log("player loses");
		// console.log("adding to accumulator", "3");
		// console.log("last accumulator value", accumulator);
		// console.log("accumulator value", accumulator + 3);
		// console.log("--------------------next round--------------------");
		return accumulator + scores.loss + scores[resultMap[valuesForRound[1]]];
	}
}, initialValue);

console.log("grand total", scoreTotal);
