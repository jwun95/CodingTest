const { dir } = require("console");
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("../input.txt").toString()
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
//const visited = Array.from(Array(N), () => Array(N).fill(false));
const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const area = [];

for (let i = 0; i < N; i++) {
  area.push(Number(input()));
}

// y + d[0] >= 0 && y + d[0] < N && x + d[1] >= 0 && x + d[1] < M;

// function dfs(y, x, color, v) {
//   for (const d of direction) {
//     if (
//       y + d[0] >= 0 &&
//       y + d[0] < N &&
//       x + d[1] >= 0 &&
//       x + d[1] < N &&
//       !v[y + d[0]][x + d[1]] &&
//       color.includes(area[y + d[0]][x + d[1]])
//     ) {
//       v[y + d[0]][x + d[1]] = true;
//       dfs(y + d[0], x + d[1], color, v);
//     }
//   }
// }

const answer = Array.from({ length: N + 1 }, () => 0);
const visited = Array.from({ length: N + 1 }, () => false);

function dfs(idx, origin, c) {
  if (idx === origin && visited[origin]) {
    answer[origin] = c;
    return;
  }
  if (!visited[idx]) {
    tracking.push(idx);
    dfs(area[idx], origin, c + 1);
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    visited[i] = true;
    dfs(area[i], i, 1);
  }
}

console.log(answer);
