import * as fs from "fs";

// File paths
const inputPath = "src/2025/day2/input.txt";
const examplePath = "src/2025/day2/example.txt";

// Read input files
const input = fs.readFileSync(inputPath, "utf-8").trim().split("\n");
const example = fs.readFileSync(examplePath, "utf-8").trim().split("\n");

// Console setup
console.clear();
console.log();
console.log("🎄 Advent of Code 2025 - Day 2");
console.log("=====================================");
console.log();

interface Range {
  start: number;
  end: number;
}

// Parse input - customize based on puzzle format
const parseInput = (data: string[]): Range[] => {
  return data
    .join("")
    .split(",")
    .filter((s) => s.trim())
    .map((range) => {
      const [start, end] = range.split("-").map(Number);
      return { start, end };
    });
};

// Part 1 Solution
const part1 = (data: string[]) => {
  const parsed = parseInput(data);

  // Your solution here

  let count: number = 0

  for (const input of parsed) {
    console.log(input.start, input.end)

    for (let i = input.start; i < input.end + 1; i++) {
      // console.log(i)
      const str = String(i)
      const length = str.length
      const mid = length / 2

      const firstHalf = str.slice(0, mid)
      const secondHalf = str.slice(mid)
      // console.log({ firstHalf, secondHalf })

      if (firstHalf == secondHalf) {
        console.log(i)
        count += i
      }
    }

  }

  return count;
};

// Part 2 Solution
const part2 = (data: string[]) => {
  const parsed = parseInput(data);
  let sum = 0;

  for (const range of parsed) {
    for (let i = range.start; i <= range.end; i++) {
      const str = String(i);
      const len = str.length;

      // Try all pattern lengths from 1 to half the length
      for (let patternLen = 1; patternLen <= len / 2; patternLen++) {
        // Skip if pattern length doesn't divide evenly
        if (len % patternLen !== 0) continue;

        const pattern = str.slice(0, patternLen);
        const repeatCount = len / patternLen;

        // Check if repeating the pattern gives us the original number
        if (pattern.repeat(repeatCount) === str) {
          sum += i;
          break; // Found a match, no need to check other pattern lengths
        }
      }
    }
  }

  return sum;
};


// Run solutions
console.log("📋 Example:");
// console.log("   Part 1:", part1(example));
// console.log("   Part 2:", part2(example));

console.log();
console.log("🎯 Input:");
// console.log("   Part 1:", part1(input));
console.log("   Part 2:", part2(input));

export { };
