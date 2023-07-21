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

const [start, end] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const graph = Array(100001).fill(0);
const visited = Array(100001).fill(false);
visited[start] = true;


