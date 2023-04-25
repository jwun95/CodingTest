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
const list = [];
for (let i = 0; i < N; i++) {
  list.push(
    input()
      .trim()
      .split(" ")
      .map((v) => +v)
  );
}

list.sort((a, b) => a[0] - b[0]);

let count = 0;
let start = 0;

for (let k = 0; k < N; k++) {
  if (list[k][1] > start) {
    count += 1;
    if (start === 0) {
      count += 1;
    }
  }
  start = list[k][1];
}

console.log(count + 1);
