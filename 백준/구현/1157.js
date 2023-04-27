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

const word = String(input());

const alphabets = {};

[...word].forEach((element) => {
	if (element.toUpperCase() in alphabets) {
    alphabets[element.toUpperCase()] += 1;
  } else {
    alphabets[element.toUpperCase()] = 1;
  }
});

const aValues = Object.values(alphabets);
const maxValue = Math.max(...aValues);

answer = [];

Object.keys(alphabets).forEach((element) => {
  if (alphabets[element] === maxValue) {
    answer.push(element);
  }
});

if (answer.length !== 1) {
  console.log("?");
} else {
  console.log(answer[0]);
}
