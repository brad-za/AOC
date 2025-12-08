const fs = require("fs");

// const input = fs.readFileSync("input.txt", `utf-8`).split(`\n`);
const example = fs
  .readFileSync("src/2024/day1/example.txt", `utf-8`)
  .trim()
  .split(`\n`)
  .map((a) => a.split(" ").map(Number));

console.clear();
console.log();
console.log("           ---------------------- NEW -------------------------");
console.log();

// for (let i = 0; i < example.length; i++) {
//   const line = example[i].trim();
//   console.log(line);
// }

const part1 = (input) => {
  console.log(input);

  //   for (let i = 0; i < input.length; i++) {
  //     const line = input[i].trim();
  //     console.log(line);
  //   }
};
const part2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    const line = input[i].trim();
    console.log(line);
  }
};

part1(example);
// part2(input);
