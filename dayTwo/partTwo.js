const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split(`\n`);

// labels -> (A for Rock, B for Paper, C for Scissors)
// scores -> (1 for Rock, 2 for Paper, and 3 for Scissors) + (0 if you lost, 3 if the round was a draw, and 6 if you won)
// result -> (X for loss, Y for draw, Z for win)

const combatMap = {
	A: { X: "C", Y: "A", Z: "B" },
	B: { X: "A", Y: "B", Z: "C" },
	C: { X: "B", Y: "C", Z: "A" },
};

const resultMap = {
	X: "loss (0)",
	Y: "draw (3)",
	Z: "win (6)",
};

const resultScoreMap = {
	X: 0,
	Y: 3,
	Z: 6,
};

const shapeMap = {
	A: "rock (1)",
	B: "paper (2)",
	C: "scissors (3)",
};
const shapeScoreMap = {
	A: 1,
	B: 2,
	C: 3,
};

let initialValue = 0;
const totalScore = input.reduce((accumulator, current) => {
	const enemyShape = current.split(" ")[0];
	const roundResult = current.split(" ")[1];

	const myShape = combatMap[enemyShape][roundResult];

	console.log("enemy shape ->", shapeMap[enemyShape]);
	console.log("result      ->", resultMap[roundResult]);
	console.log("my shape    ->", shapeMap[myShape]);
	console.log(
		"round score ->",
		resultScoreMap[roundResult] + shapeScoreMap[myShape],
	);
	console.log("accumulator ->", accumulator);

	return accumulator + resultScoreMap[roundResult] + shapeScoreMap[myShape];
}, initialValue);

console.log(totalScore);
