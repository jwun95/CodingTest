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

const N = +input();
const cranes = input()
  .trim()
  .split(" ")
  .map((v) => +v);
const M = +input();
const boxes = input()
  .trim()
  .split(" ")
  .map((v) => +v);
