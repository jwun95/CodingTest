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
const cranes = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));
const M = parseInt(input());
const boxes = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));
