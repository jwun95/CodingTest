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

console.log(list);
