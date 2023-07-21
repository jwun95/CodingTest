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

const [N, L, R] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const graph = [];

for (let i = 0; i < N; i++) {
  graph.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

function bfs(queue, visited) {
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let idx = 0;
  let rest = graph[queue[0][0]][queue[0][1]];

  while (queue.length > idx) {
    const [r, c] = queue[idx];

    for (const d of direction) {
      const nR = r + d[0];
      const nC = c + d[1];

      if (
        nR >= 0 &&
        nR < N &&
        nC >= 0 &&
        nC < N &&
        Math.abs(graph[r][c] - graph[nR][nC]) >= L &&
        Math.abs(graph[r][c] - graph[nR][nC]) <= R &&
        !visited[nR][nC]
      ) {
        visited[nR][nC] = true;
        queue.push([nR, nC]);
        rest += graph[nR][nC];
      }
    }
    idx++;
  }

  if (queue.length === 1) return false;

  const average = Math.floor(rest / queue.length);
  for (const q of queue) {
    graph[q[0]][q[1]] = average;
  }
  return true;
}

function solution() {
  let day = 0;

  while (2000 > day) {
    const visited = Array.from(Array(N), () => Array(N).fill(false));
    let flag = 0;
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (!visited[r][c]) {
          visited[r][c] = true;
          const result = bfs([[r, c]], visited);
          if (result) flag = 1;
        }
      }
    }
    if (flag === 0) return day;
    day++;
  }
  return day;
}

console.log(solution());
