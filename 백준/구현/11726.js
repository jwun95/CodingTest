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
const sequence = [];
for (let i = 0; i < N; i++)
  sequence.push(
    input()
      .trim()
      .split(" ")
      .map((v) => v)
  );

let S = new Set();
const all = [];
for (let i = 1; i <= 20; i++) {
  all.push(i);
}

sequence.forEach((se) => {
  if (se[0] === "add") {
    S.add(parseInt(se[1]));
  } else if (se[0] === "remove") {
    S.delete(parseInt(se[1]));
  } else if (se[0] === "check") {
    console.log(S.has(parseInt(se[1])) ? 1 : 0);
  } else if (se[0] === "toggle") {
    S.has(parseInt(se[1])) ? S.delete(parseInt(se[1])) : S.add(parseInt(se[1]));
  } else if (se[0] === "all") {
    S = new Set(all);
  } else {
    S = new Set();
  }
});
