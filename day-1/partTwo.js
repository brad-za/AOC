const totalCaloriesPerElf = require("./input.json");

let first;
let second;
let third;

for (let i = 0; i < totalCaloriesPerElf.length; i++) {
	if (i == 0) {
		first = totalCaloriesPerElf[i];
	}
	if (totalCaloriesPerElf[i] > first) {
		third = second;
		second = first;
		first = totalCaloriesPerElf[i];
	} else if (totalCaloriesPerElf[i] > second) {
		third = second;
		second = totalCaloriesPerElf[i];
	} else if (totalCaloriesPerElf[i] > third) {
		third = totalCaloriesPerElf[i];
	}
}

console.log(first, second, third);
console.log(first + second + third);
