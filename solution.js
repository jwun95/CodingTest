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

// 아기 상어

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

const N = Number(input().trim());
const space = [];

for (let n = 0; n < N; n++) {
  space.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

const curr = [0, 0];

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (space[r][c] === 9) {
      space[r][c] = 0;
      curr[0] = r;
      curr[1] = c;
    }
  }
}

function bfs(curr, space, size) {
  const dir = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  const visited = Array.from(Array(N), () => Array(N).fill(false));

  visited[curr[0]][curr[1]] = true;
  const queue = [[...curr, 0]];
  while (queue.length) {
    const [r, c, num] = queue.shift();

    for (const d of dir) {
      const nR = r + d[0];
      const nC = c + d[1];

      if (
        nR >= 0 &&
        nR < N &&
        nC >= 0 &&
        nC < N &&
        !visited[nR][nC] &&
        space[nR][nC] <= size
      ) {
        if (space[nR][nC] < size && 0 < space[nR][nC]) return [nR, nC, num + 1];
        visited[nR][nC] = true;
        queue.push([nR, nC, num + 1]);
      }
    }
  }
  return false;
}

let sharkSize = 2;
let move = 0;
let count = 0;

while (true) {
  const response = bfs(curr, space, sharkSize);
  if (response === false) break;
  console.log(response);
  move += response[2];
  curr[0] = response[0];
  curr[1] = response[1];
  space[response[0]][response[1]] = 0;
  count++;
  if (count === sharkSize) {
    sharkSize++;
    count = 0;
  }
}
console.log(space);
console.log(move);
