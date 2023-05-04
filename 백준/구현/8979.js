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

const [N, K] = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const nations = [];

for (let i = 0; i < N; i++) {
  nations.push(
    input()
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

nations.sort((a, b) => b[1] - a[1] || b[2] - a[2] || b[3] - a[3]);
// 멀티 정렬은 ||을 이용해서 정렬한다. 양수면 자리가 바뀌고 음수면 바뀌지 않는다.

nations[0].push(1);
let count = 1;

for (let i = 1; i < N; i++) {
  if (
    nations[i].slice(1, 4).toString() === nations[i - 1].slice(1, 4).toString()
    // slice는 start부터 end까지 배열을 반환한다. 배열을 비교할 때에는 toString()을 사용해서 문자열로 바꾼다음 비교해준다.
  ) {
    nations[i].push(nations[i - 1][4]);
    count += 1;
  } else {
    nations[i].push(count + nations[i - 1][4]);
    count = 1;
  }
}

for (const nation of nations) {
  if (nation[0] === K) {
    console.log(nation[4]);
    break;
  }
}
