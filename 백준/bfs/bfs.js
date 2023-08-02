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

const [N, M] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const graph = [];
const visited = Array.from(Array(N), () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  graph.push(
    input()
      .trim()
      .split("")
      .map((v) => Number(v))
  );
}

function solution() {
  const queue = [[0, 0, 1, 0]];
  let idx = 0;
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  visited[0][0] = true;

  while (queue.length > idx) {
    const [row, column, count, smash] = queue[idx];

    for (const d of direction) {
      const nR = row + d[0];
      const nC = column + d[1];

      if (nR >= 0 && nR < N && nC >= 0 && nC < M && !visited[nR][nC]) {
        visited[nR][nC] = true;

        if (nR === N - 1 && nC === M - 1) return count + 1;

        if (graph[nR][nC] === 0) queue.push([nR, nC, count + 1, smash]);
        else if (smash === 0 && graph[nR][nC] === 1)
          queue.push([nR, nC, count + 1, 1]);
      }
    }
    idx++;
  }
  return -1;
}

console.log(solution());
