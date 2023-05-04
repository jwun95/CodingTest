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

const people = [];

for (let i = 0; i < N; i++) {
  people.push(
    input()
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

const answer = []

for (let i = 0; i < N; i++) {
	count = 1;
	for (let k = 0; k < N; k++) {
		if (people[i][0] < people[k][0] && people[i][1] < people[k][1]) {
			count += 1
		}
	}
	answer.push(count)
}

console.log(answer.join(" "));
