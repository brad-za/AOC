import * as fs from "fs";

// File paths
const inputPath = "src/__YEAR__/day__DAY__/input.txt";
const examplePath = "src/__YEAR__/day__DAY__/example.txt";

// Read input files
const input = fs.readFileSync(inputPath, "utf-8").trim().split("\n");
const example = fs.readFileSync(examplePath, "utf-8").trim().split("\n");

// Console setup
console.clear();
console.log();
console.log("🎄 Advent of Code __YEAR__ - Day __DAY__");
console.log("=====================================");
console.log();

// Helper functions
const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
const min = (arr: number[]) => Math.min(...arr);
const max = (arr: number[]) => Math.max(...arr);

// Parse input - customize based on puzzle format
const parseInput = (data: string[]) => {
  return data.map((line) => line.trim());
};

// Part 1 Solution
const part1 = (data: string[]) => {
  const parsed = parseInput(data);

  // Your solution here
  console.log("Sample data:", parsed.slice(0, 3));

  return 0;
};

// Part 2 Solution
const part2 = (data: string[]) => {
  const parsed = parseInput(data);

  // Your solution here

  return 0;
};

// Run solutions
console.log("📋 Example:");
console.log("   Part 1:", part1(example));
// console.log("   Part 2:", part2(example));

// console.log();
// console.log("🎯 Input:");
// console.log("   Part 1:", part1(input));
// console.log("   Part 2:", part2(input));

export { };
