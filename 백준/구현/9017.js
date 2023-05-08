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
const teamNumbers = [];

for (let i = 0; i < N; i++) {
  const num = parseInt(input());
  teamNumbers.push(
    input()
      .trim()
      .split(" ")
      .map((v) => v)
  );
}

teamNumbers.forEach((teamNumber) => {
  const numbers = {};
  teamNumber.forEach((t, idx) => {
    if (t in numbers) {
      numbers[t][0] += 1;
      if (numbers[t][0] < 5) {
        numbers[t][1] += idx + 1;
      } else if (numbers[t][0] === 5) {
        numbers[t][2] = idx + 1;
      }
    } else {
      numbers[t] = [1, idx + 1, 0];
    }
  });
  const ranking = [];
  const keys = Object.keys(numbers);
  for (let i = 0; i < keys.length; i++) {
    numbers[keys[i]][0] === 6
      ? ranking.push([keys[i], ...numbers[keys[i]]])
      : undefined;
  }
  ranking.sort((x, y) => y[2] - x[2] || x[3] - y[3]);
  console.log(parseInt(ranking[0][0]));
});
