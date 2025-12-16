import * as fs from "fs";

// File paths
const inputPath = "src/2025/day4/input.txt";
const examplePath = "src/2025/day4/example.txt";

// Read input files
const input = fs.readFileSync(inputPath, "utf-8").trim().split("\n");
const example = fs.readFileSync(examplePath, "utf-8").trim().split("\n");

// Console setup
console.clear();
console.log();
console.log("🎄 Advent of Code 2025 - Day 4");
console.log("=====================================");
console.log();

// Parse input - customize based on puzzle format
const parseInput = (data: string[]) => {
  return data.map((line) => line.trim());
};

// Part 1 Solution
const part1 = (data: string[]) => {
  const grid = parseInput(data);
  let accessible: number = 0
  for (let col = 0; col < grid[0].length; col++) {
    for (let row = 0; row < grid.length; row++) {
      let rolls: number = 0
      // only check cells that ARE an @
      if (grid[row][col] !== "@") continue
      // up left
      if (col - 1 >= 0 && row - 1 >= 0) { // if we are not at the left edge
        if (grid[row - 1][col - 1] == "@") rolls++
      }
      // up
      if (row - 1 >= 0) { // if we are not on the top row
        if (grid[row - 1][col] == "@") rolls++
      }
      // up right
      if (row - 1 >= 0 && col + 1 < grid[0].length) { // if we are not on the top row
        if (grid[row - 1][col + 1] == "@") rolls++
      }
      // right
      if (col + 1 < grid[0].length) {
        if (grid[row][col + 1] == "@") rolls++
      }
      // down right
      if (row + 1 < grid.length && col + 1 < grid[0].length) {
        if (grid[row + 1][col + 1] == "@") rolls++
      }
      // down 
      if (row + 1 < grid.length) {
        if (grid[row + 1][col] == "@") rolls++
      }
      // down left
      if (row + 1 < grid.length && col - 1 >= 0) {
        if (grid[row + 1][col - 1] == "@") rolls++
      }
      // left
      if (col - 1 >= 0) {
        if (grid[row][col - 1] == "@") rolls++
      }
      // sum up the count of @ symbols above, if above for continue
      if (rolls >= 4) continue
      else accessible++
    }
  }
  return accessible;
};


// Part 2 Solution
const part2 = (data: string[]) => {
  let grid = parseInput(data).map(line => line.split(''));
  let totalRemoved: number = 0;

  while (true) {
    let accessible: number = 0
    for (let col = 0; col < grid[0].length; col++) {
      for (let row = 0; row < grid.length; row++) {
        let rolls: number = 0
        // only check cells that ARE an @
        if (grid[row][col] !== "@") continue
        // up left
        if (col - 1 >= 0 && row - 1 >= 0) { // if we are not at the left edge
          if (grid[row - 1][col - 1] == "@") rolls++
        }
        // up
        if (row - 1 >= 0) { // if we are not on the top row
          if (grid[row - 1][col] == "@") rolls++
        }
        // up right
        if (row - 1 >= 0 && col + 1 < grid[0].length) { // if we are not on the top row
          if (grid[row - 1][col + 1] == "@") rolls++
        }
        // right
        if (col + 1 < grid[0].length) {
          if (grid[row][col + 1] == "@") rolls++
        }
        // down right
        if (row + 1 < grid.length && col + 1 < grid[0].length) {
          if (grid[row + 1][col + 1] == "@") rolls++
        }
        // down 
        if (row + 1 < grid.length) {
          if (grid[row + 1][col] == "@") rolls++
        }
        // down left
        if (row + 1 < grid.length && col - 1 >= 0) {
          if (grid[row + 1][col - 1] == "@") rolls++
        }
        // left
        if (col - 1 >= 0) {
          if (grid[row][col - 1] == "@") rolls++
        }
        // sum up the count of @ symbols above, if above for continue
        if (rolls < 4) {  // Changed from >= 4
          grid[row][col] = '.';
          accessible++;
        }
      }
    }
    totalRemoved += accessible
    if (accessible === 0) break
  }
  return totalRemoved;
};

// Run solutions
// console.log("📋 Example:");
// console.log("   Part 1:", part1(example));
// console.log("   Part 2:", part2(example));

console.log();
// console.log("🎯 Input:");
// console.log("   Part 1:", part1(input));
console.log("   Part 2:", part2(input));

export { };
