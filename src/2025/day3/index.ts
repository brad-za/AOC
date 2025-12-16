import * as fs from "fs";

// File paths
const inputPath = "src/2025/day3/input.txt";
const examplePath = "src/2025/day3/example.txt";

// Read input files
const input = fs.readFileSync(inputPath, "utf-8").trim().split("\n");
const example = fs.readFileSync(examplePath, "utf-8").trim().split("\n");

// Console setup
console.clear();
console.log();
console.log("🎄 Advent of Code 2025 - Day 3");
console.log("=====================================");
console.log();

// Parse input - customize based on puzzle format
const parseInput = (data: string[]) => {
  return data.map((line) => line.trim());
};

// Part 1 Solution
const part1 = (data: string[]) => {
  const parsed = parseInput(data);

  // Your solution here
  console.log("Sample data:", parsed.slice(0, 3));

  let total: number = 0

  for (const input of parsed) {
    let maxJoltage = 0;

    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        // i is the tens digit position, j is the ones digit position
        // j must be > i to maintain order
        const twoDigitNumber = parseInt(input[i] + input[j]);
        if (twoDigitNumber > maxJoltage) {
          maxJoltage = twoDigitNumber;
        }
      }
    }
    total += maxJoltage
  }
  return total
}

// Part 2 Solution
// Part 2 Solution
const part2 = (data: string[]) => {
  const parsed = parseInput(data);
  let totalJoltage = BigInt(0);  // Use BigInt for large numbers

  for (const line of parsed) {
    const digitsToSelect = 12;
    let result = "";
    let currentPos = 0;

    for (let selected = 0; selected < digitsToSelect; selected++) {
      const remainingToSelect = digitsToSelect - selected;
      const remainingLength = line.length - currentPos;
      const searchRange = remainingLength - remainingToSelect + 1;

      // Find the max digit in the range [currentPos, currentPos + searchRange)
      let maxDigit = "";
      let maxPos = currentPos;

      for (let i = currentPos; i < currentPos + searchRange; i++) {
        if (line[i] > maxDigit) {
          maxDigit = line[i];
          maxPos = i;
        }
      }

      result += maxDigit;
      currentPos = maxPos + 1;  // Move past the selected digit
    }

    console.log(`${line} -> ${result}`);
    totalJoltage += BigInt(result);
  }

  return totalJoltage.toString();
};


// Run solutions
// console.log("📋 Example:");
// console.log("   Part 1:", part1(example));
// console.log("   Part 2:", part2(example));

// console.log();
console.log("🎯 Input:");
// console.log("   Part 1:", part1(input));
console.log("   Part 2:", part2(input));

export { };
