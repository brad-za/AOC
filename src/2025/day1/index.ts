import * as fs from "fs";

// File paths
const inputPath = "src/2025/day1/input.txt";
const examplePath = "src/2025/day1/example.txt";

// Read input files
const input = fs.readFileSync(inputPath, "utf-8").trim().split("\n");
const example = fs.readFileSync(examplePath, "utf-8").trim().split("\n");

// Console setup
console.clear();
console.log();
console.log("🎄 Advent of Code 2025 - Day 1");
console.log("=====================================");
console.log();

interface Instruction {
  direction: "L" | "R";
  distance: number
}

// Parse input - customize based on puzzle format
const parseInput = (data: string[]): Instruction[] => {
  return data.map((line) => {
    const trimmed = line.trim();
    return {
      direction: trimmed[0] as "L" | "R",      // First CHARACTER of the line
      distance: parseInt(trimmed.slice(1), 10) // Rest of the string (after first char)
    };
  });
};


// Part 1 Solution
const part1 = (data: string[]) => {
  const parsed = parseInput(data);

  let dial: number = 50
  let count: number = 0
  for (const input of parsed) {
    // For Right (adding)
    if (input.direction == "R") {
      dial = (dial + input.distance) % 100
    }

    // For Left (subtracting) - needs special handling for negative
    if (input.direction == "L") {
      dial = ((dial - input.distance) % 100 + 100) % 100
    }
    if (dial == 0) count++

  }

  return count;
};

// Part 2 Solution
const part2 = (data: string[]) => {
  const parsed = parseInput(data);
  let dial: number = 50
  let count: number = 0

  for (const input of parsed) {
    if (input.direction == "R") {
      for (let i = 0; i < input.distance; i++) {
        dial = dial + 1
        if (dial > 99) {
          dial = 0
        }
        if (dial == 0) {
          count++
        }
      }
    }

    if (input.direction == "L") {
      for (let i = 0; i < input.distance; i++) {
        dial = dial - 1
        if (dial < 0) {
          dial = 99
        }
        if (dial == 0) {
          count++
        }
      }
    }

  }

  return count;
};

// Run solutions
console.log("📋 Example:");
console.log("   Part 1:", part1(example));
// console.log("   Part 2:", part2(example));

// console.log();
console.log("🎯 Input:");
console.log("   Part 1:", part1(input));
console.log("   Part 2:", part2(input));
