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

const [H, W] = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const skies = [];

// 1 ≦ H ≦ 100, 1 ≦ W ≦ 100
// c인 경우 0
// c가 앞에 있고 .일 경우 '현재 위치 - c위치'
// 앞에 c가 없고 .일 경우 -1

for (let i = 0; i < H; i++) {
  const temp = input().trim();
  skies.push([...temp]);
}

skies.forEach((sky) => {
  const answer = [];
  let cloudLocation = 0;
  sky.forEach((s, idx) => {
    if (s === "c") {
      cloudLocation = idx + 1;
      answer.push(0);
    } else if (cloudLocation !== 0 && s === ".") {
      answer.push(idx + 1 - cloudLocation);
    } else {
      answer.push(-1);
    }
  });
  console.log(answer.join(" "));
});
