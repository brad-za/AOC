const fs = require("fs");

const inpu = fs.readFileSync("input.txt", `utf-8`).split(`\n`);

let input = [];

inpu.forEach(element => input.push(element.trim()));

console.clear();
console.log();
console.log();
console.log("           ---------------------- NEW -------------------------");
console.log();

const createTree = lines => {
	const tree = {
		name: "/",
		isDirectory: true,
		children: [],
	};
	let currentNode = tree;
	let currentCommand = null;

	// lines.shift(l); // ignore the first command

	for (const line of lines) {
		if (line[0] === "$") {
			// command
			currentCommand = line.slice(2, 4);
			if (currentCommand === "cd") {
				let target = line.slice(5, 6);
				if (target === "/") {
					currentNode = tree;
				} else if (target === ".") {
					// there is only one parent per currentNode.

					currentNode = currentNode.parent;
				} else {
					target = line.slice(5);
					currentNode = currentNode.children.find(
						// find will itterate through each child in currentNode
						// if the child is a directory and its name matches target
						// return folder
						folder => folder.isDirectory && folder.name === target,
					);
				}
			}
		} else {
			const lineArray = line.split(" ");
			if (lineArray[0] === "dir") {
				// DIR
				// because this is a dir, it needs to have a children attribute.
				// this allows more directories and folders to be referenced here.
				// node is created and then pushed into the children of currentNode
				const node = {
					isDirectory: true,
					name: lineArray[1],
					children: [],
					parent: currentNode,
				};
				currentNode.children.push(node);
			} else {
				// FILE
				// there can be no children of a file
				// size is found and set instead of children being set to an empty array
				// again the node is pushed onto currentNode.children.
				const node = {
					isDirectory: false,
					name: lineArray[1],
					size: parseInt(lineArray[0]),
					parent: currentNode,
				};
				currentNode.children.push(node);
			}
		}
	}

	return tree;
};

const printTree = (node, depth = 0) => {
	console.log(
		`${" ".repeat(depth * 2)}- ${node.name} (${
			node.isDirectory ? "dir" : `file, size=${node.size}`
		})`,
	);
	if (node.isDirectory) {
		for (const child of node.children) {
			printTree(child, depth + 1);
		}
	}
};

const getSize = (node, directoryCallback = () => {}) => {
	if (!node.isDirectory) {
		return node.size;
	}
	const directorySize = node.children
		.map(child => getSize(child, directoryCallback))
		.reduce((a, b) => a + b, 0);

	directoryCallback(node.name, directorySize);

	return directorySize;
};

const part1 = () => {
	const thresholdSize = 100000;
	const tree = createTree(input);

	// printTree(tree);

	let sumSmallFolder = 0;

	getSize(tree, (name, size) => {
		console.log({ name, size });
		if (size < thresholdSize) {
			sumSmallFolder += size;
		}
	});

	console.log(sumSmallFolder);
};
function part2() {
	const totalDiskSpace = 70000000;
	const requiredSpace = 30000000;

	const tree = createTree(input);

	const usedSpace = getSize(tree);
	const availableSpace = totalDiskSpace - usedSpace;
	if (availableSpace > requiredSpace) {
		throw new Error("There is already enough space");
	}
	const minimumFolderSize = requiredSpace - availableSpace;

	const candidates = [];

	getSize(tree, (name, size) => {
		if (size >= minimumFolderSize) {
			candidates.push({
				name,
				size,
			});
		}
	});

	candidates.sort((a, b) => a.size - b.size);

	console.log(candidates[0].size);
}

part1();
part2();
