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

const classes = [];

for (let i = 0; i < N; i++) {
  classes.push(
    input()
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

classes.forEach((students) => {
  let count = 0;
  let sor = [];
  for (let i = 1; i < 21; i++) {}
});
