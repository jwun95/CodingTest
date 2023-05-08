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

const [N, newScore, P] = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

/*
10 <= P <= 50
0 <= N <= P
0 <= score <= 2,000,000,000
*/

function solution(N, newScore, P) {
  if (N === 0) {
    return 1;
  }

  const scores = input()
    .trim()
    .split(" ")
    .map((v) => parseInt(v));

  scores.sort((x, y) => x - y);

  let answer = 0;
  let count = 0;
  let temp = 0;
  const stack = [];

  while (scores.length !== 0) {
    temp = scores.pop();
    count += 1;
		if (temp < newScore) {
			if (answer === 0) answer = count;
      break;
    } else if (temp === newScore && answer === 0) {
      answer = count;
    }
    stack.push(temp);
	}

  if (stack.length + 1 > P) {
    return -1;
  } else if (answer) {
    return answer;
  } else {
    return count + 1;
  }
}

console.log(solution(N, newScore, P));
