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
const stack = [];

list.sort((a, b) => a[0] - b[0]);

let count = 0;

for (let i = 0; i < N; i++) {
  if (stack.slice(-1) < list[i][1]) {
		stack.push(list[i][1]);
	} else {
    while (stack.slice(-1) >= list[i][1]) {
      stack.pop();
      count += 1;
    }
  }
}
console.log(count);
