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


function solution(n, cranes, m, boxes) {
  cranes.sort((a, b) => b - a);
  boxes.sort((a, b) => b - a);
  boxes.sort(function (a, b) {
    return b - a;
  });
  cranes.sort(function (a, b) {
    return b - a;
  });

  if (parseInt(cranes[0]) < parseInt(boxes[0])) {
    return -1;
  }

  let answer = 0;

  while (boxes.length > 0) {
    for (let c = 0; c < N; c++) {
      for (let b = 0; b < boxes.length; b++) {
        if (parseInt(boxes[b]) <= parseInt(cranes[c])) {
          boxes.splice(b, 1);
          break;
        }
      }
    }
    answer++;
  }

  return answer;
}

console.log(solution(N, cranes, M, boxes));
