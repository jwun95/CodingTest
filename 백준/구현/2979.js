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

const [A, B, C] = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

times = [];

for (let i = 0; i < 3; i++) {
  times.push(
    input()
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

const parkArea = new Array(101).fill(0);

times.forEach((element) => {
  for (let i = element[0]; i < element[1]; i++) {
    parkArea[i] += 1;
  }
});

let answer = 0;

parkArea.forEach((element) => {
  if (element === 1) {
    answer += A;
  } else if (element === 2) {
    answer += B * element;
  } else {
    answer += C * element;
  }
});

console.log(answer);
