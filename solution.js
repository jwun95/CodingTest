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

// 미세먼지

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

const [R, C, T] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const routes = [];

for (let r = 0; r < R; r++) {
  routes.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const airClear = [];

for (let i = 0; i < R; i++) {
  if (routes[i][0] === -1) airClear.push(i);
}

function diffusion(queue) {
  while (queue.length) {
    const [r, c] = queue.shift();
    if (routes[r][c] > 0) {
      let count = 0;
      for (const d of directions) {
        const nextR = r + d[0];
        const nextC = c + d[1];

        if (
          nextR >= 0 &&
          nextR < R &&
          nextC >= 0 &&
          nextC < C &&
          routes[r][c] !== -1
        ) {
          count++;
          routes[nextR][nextC] += Math.floor(routes[r][c] / 5);
        }
      }
      routes[r][c] = routes[r][c] - Math.floor(routes[r][c] / 5) * count;
    }
  }
}

function airBlowing() {
  //위
  let condition = 0;
  for (let y = 1; y < C; y++) {
    const temp = routes[airClear[0]][y];
    routes[airClear[0]][y] = condition;
    condition = temp;
  }
  for (let x = routes[airClear[0]][y]; x >= 0; x--) {
    const temp = routes[x][C - 1];
    routes[x][C - 1] = condition;
    condition = temp;
  }
  for (let y = C - 1; y >= 0; y--) {
    const temp = routes[0][y];
    routes[0][y] = condition;
    condition = temp;
  }
  for (let x = 0; x < airClear[0]; x++) {
    const temp = routes[x][0];
    routes[x][0] = condition;
    condition = temp;
  }
  // 아래
  condition = 0;
  for (let y = 1; y < C; y++) {
    const temp = routes[airClear[1]][y];
    routes[airClear[1]][y] = condition;
    condition = temp;
  }
  for (let x = airClear[0]; x < R; x++) {
    const temp = routes[x][C - 1];
    routes[x][C - 1] = condition;
    condition = temp;
  }
  for (let y = C - 1; y >= 0; y--) {
    const temp = routes[R - 1][y];
    routes[R - 1][y] = condition;
    condition = temp;
  }
  for (let x = R - 1; x > airClear[1]; x--) {
    const temp = routes[x][0];
    routes[x][0] = condition;
    condition = temp;
  }
}

let count = 0;

while (count < T) {
  const queue = [];
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (routes[r][c] > 0) queue.push([r, c]);
    }
  }
  diffusion(queue);
  console.log(routes);
  airBlowing();
  console.log(routes);
  count++;
}
