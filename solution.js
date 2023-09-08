const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("./input.txt").toString()
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while (true) {
  const getData = input().trim();
  if (getData === "end") break;
  let xCount = 0;
  let oCount = 0;
  let dCount = 0;
  const bingo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let g = 0; g < getData.length; g++) {
    if (getData[g] === "X") xCount++;
    else if (getData[g] === "O") oCount++;
    else dCount++;
  }

  let count = 0;

  for (const b of bingo) {
    if (getData[b[0]] === getData[b[1]] && getData[b[0]] === getData[b[2]])
      count++;
  }
  if (count > 1 || xCount < oCount) {
    console.log("invalid");
  } else if (dCount && count === 0) {
    console.log("invalid");
  } else console.log("valid");
}
