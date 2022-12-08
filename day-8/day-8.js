const fs = require("fs");

const input = fs
	.readFileSync("day-8/input.txt", `utf-8`)
	.replace(/(\r)/gm, "")
	.trim()
	.split(`\n`);

console.clear();
console.log();
console.log();
console.log("           ---------------------- NEW -------------------------");
console.log();

const createTwoDimArr = textInput => {
	const twoDimArr = [];
	for (let i = 0; i < textInput.length; i++) {
		const line = input[i];

		if (!twoDimArr[i]) {
			twoDimArr[i] = [];
		}
		for (let j = 0; j < line.length; j++) {
			// push values onto the array
			// console.log(textInput[i][j]);
			twoDimArr[i].push(textInput[i][j].split()[0]);
		}
	}

	return twoDimArr;
};

const updateVisArray = (visArray, r, c, val) => {
	visArray[r][c] = val;
};

const isVisible = (r, c, grid) => {
	const row = grid[r];
	if (r === 0) {
		// console.log("skip this one");
		return true;
	}
	if (c === 0) {
		// console.log("skip this one");
		return true;
	}
	if (r === grid.length - 1) {
		// console.log("skip this one");
		return true;
	}
	if (c === row.length - 1) {
		// console.log("skip this one");
		return true;
	}

	// for each column

	// add cases for if the input r / c === 0 in order to simplify the rest. I think you are clode boet, good luck fuck

	// steps up
	for (let i = r; i !== 0; i--) {
		const value = grid[r][c];
		const stepValue = grid[i - 1][c];

		if (value <= stepValue) {
			// console.log("break because the tree is being blocked");
			break;
		} else if (i === 1) {
			// console.log("up");
			return true;
		}
	}

	// steps down
	for (let i = r; i !== grid.length - 1; i++) {
		const value = grid[r][c];
		const stepValue = grid[i + 1][c];

		if (value <= stepValue) {
			break;
		} else if (i == grid.length - 2) {
			// console.log("down");

			return true;
		}
	}

	// steps right
	for (let i = c; i !== row.length - 1; i++) {
		const value = grid[r][c];
		const stepValue = grid[r][i + 1];

		if (value <= stepValue) {
			break;
		} else if (i == row.length - 2) {
			// console.log("right");
			return true;
		}
	}

	// steps left
	for (let i = c; i !== 0; i--) {
		const value = grid[r][c];
		const stepValue = grid[r][i - 1];

		// grid[r][c] = `(${value})`;
		// grid[r][i - 1] = `[${stepValue}]`;
		// console.log("step grid", grid);
		// grid[r][c] = value;
		// grid[r][i - 1] = stepValue;

		// compare the values
		if (value <= stepValue) {
			isBigger = false;
			break;
		} else if (i === 1) {
			// console.log("left");
			return true;
		}
	}
};

const getVisibilityScore = (r, c, grid) => {
	let visibilityScore = [];
	const row = grid[r];
	if (r === 0) {
		// console.log("skip this one");
		return 0;
		return true;
	}
	if (c === 0) {
		// console.log("skip this one");
		return 0;
		return true;
	}
	if (r === grid.length - 1) {
		// console.log("skip this one");
		return 0;
		return true;
	}
	if (c === row.length - 1) {
		// console.log("skip this one");
		return 0;
		return true;
	}

	// for each column

	// add cases for if the input r / c === 0 in order to simplify the rest. I think you are clode boet, good luck fuck

	// steps up
	for (let i = r; i !== 0; i--) {
		const value = grid[r][c];
		const stepValue = grid[i - 1][c];

		if (value <= stepValue) {
			// console.log("up", r - i + 1, "steps");
			// grid[r][c] = `(${value})`;
			// grid[i - 1][c] = `[${stepValue}]`;
			// console.log(grid);
			// grid[r][c] = value;
			// grid[i - 1][c] = stepValue;

			visibilityScore.push(r - i + 1);

			break;
		} else if (i === 1) {
			// console.log("up", r - i + 1, "steps");
			// grid[r][c] = `(${value})`;
			// grid[i - 1][c] = `[${stepValue}]`;
			// console.log(grid);
			// grid[r][c] = value;
			// grid[i - 1][c] = stepValue;

			visibilityScore.push(r - i + 1);

			// for part two
			break;
			// for part one
			// return true;
		}
	}

	// steps down
	for (let i = r; i !== grid.length - 1; i++) {
		const value = grid[r][c];
		const stepValue = grid[i + 1][c];

		if (value <= stepValue) {
			// console.log("down", i + 1 - r, "steps");

			// grid[r][c] = `(${value})`;
			// grid[i + 1][c] = `[${stepValue}]`;
			// console.log("step", i + 1 - r, grid);
			// grid[r][c] = value;
			// grid[i + 1][c] = stepValue;

			visibilityScore.push(i + 1 - r);

			break;
		} else if (i == grid.length - 2) {
			// console.log("down", i + 1 - r, "steps");

			// grid[r][c] = `(${value})`;
			// grid[i + 1][c] = `[${stepValue}]`;
			// console.log("step", i + 1 - r, grid);
			// grid[r][c] = value;
			// grid[i + 1][c] = stepValue;

			visibilityScore.push(i + 1 - r);

			// for part two
			break;
			// for part one
			// return true;
		}
	}

	// steps right

	for (let i = c; i !== row.length - 1; i++) {
		const value = grid[r][c];
		const stepValue = grid[r][i + 1];

		// console.log("column index", c);
		// console.log("index", i + 1);
		// console.log("steps", i + 1 - c);

		if (value <= stepValue) {
			// console.log("right", i + 1 - c, "steps");
			// grid[r][c] = `(${value})`;
			// grid[r][i + 1] = `[${stepValue}]`;
			// console.log(grid);
			// grid[r][c] = value;
			// grid[r][i + 1] = stepValue;

			// push value onto array

			visibilityScore.push(i + 1 - c);

			break;
		} else if (i == row.length - 2) {
			// console.log("right", i + 1 - c, "steps");
			// grid[r][c] = `(${value})`;
			// grid[r][i + 1] = `[${stepValue}]`;
			// console.log(grid);
			// grid[r][c] = value;
			// grid[r][i + 1] = stepValue;

			// push value onto array and then break instead of returning
			// because I need to go in all directions and not stop if a tree is visible / invisible

			visibilityScore.push(i + 1 - c);
			// for part two
			break;
			// for part one
			// return true;
		}
	}

	// steps left
	for (let i = c; i !== 0; i--) {
		const value = grid[r][c];
		const stepValue = grid[r][i - 1];

		// compare the values
		if (value <= stepValue) {
			// console.log("left", c - i + 1, "steps");
			// grid[r][c] = `(${value})`;
			// grid[r][i - 1] = `[${stepValue}]`;
			// console.log("step", c - i + 1, grid);
			// grid[r][c] = value;
			// grid[r][i - 1] = stepValue;

			visibilityScore.push(c - i + 1);

			break;
		} else if (i === 1) {
			// console.log("left");
			// console.log("left", c - i + 1, "steps");
			// grid[r][c] = `(${value})`;
			// grid[r][i - 1] = `[${stepValue}]`;
			// console.log("step", c - i + 1, grid);
			// grid[r][c] = value;
			// grid[r][i - 1] = stepValue;

			visibilityScore.push(c - i + 1);
			// for part two
			break;
			// for part one
			// return true;
		}
	}

	const visScore = visibilityScore.reduce((a, b) => a * b, 1);

	// console.log(visScore);
	return visScore;
};

const countVisible = visMap => {
	let count = 0;
	for (let i = 0; i < visMap.length; i++) {
		const element = visMap[i];
		element.forEach(tree => {
			if (tree === "x") {
				count++;
			}
		});
	}
	return count;
};

const findMostVisible = visMap => {
	let higestValue = 0;
	for (let i = 0; i < visMap.length; i++) {
		const element = visMap[i];
		element.forEach(treeVisScore => {
			if (treeVisScore > higestValue) {
				higestValue = treeVisScore;
			}
		});
	}
	console.log("final highest tree visiblility score =", higestValue);
};

const loopInput = (input, treeMap) => {
	for (let r = 0; r < input.length; r++) {
		const row = input[r];

		for (let c = 0; c < row.length; c++) {
			if (isVisible(r, c, input)) {
				updateVisArray(treeMap, r, c, "x");
				// console.log("can see this mf", r, c);
			} else updateVisArray(treeMap, r, c, "o");
		}
	}
};

const loopInputPart2 = (input, visTreeMap) => {
	for (let r = 0; r < input.length; r++) {
		const row = input[r];

		for (let c = 0; c < row.length; c++) {
			const visVal = getVisibilityScore(r, c, input);
			updateVisArray(visTreeMap, r, c, visVal);
		}
	}
};

const part1 = () => {
	const twoDimArr = createTwoDimArr(input);
	visibleTreeMap = JSON.parse(JSON.stringify(createTwoDimArr(twoDimArr)));
	loopInput(twoDimArr, visibleTreeMap);
	// console.log("vm", visibleTreeMap);
	console.log(
		"final amount of tree visible trees   =",
		countVisible(visibleTreeMap),
	);
};

const part2 = () => {
	const twoDimArr = createTwoDimArr(input);
	visibleTreeMap = JSON.parse(JSON.stringify(createTwoDimArr(twoDimArr)));
	loopInputPart2(twoDimArr, visibleTreeMap);
	findMostVisible(visibleTreeMap);

	// console.log("vm", visibleTreeMap);
};

part1();
part2();
