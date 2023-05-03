// 삽입 정렬
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
  const sortedClass = [students[1]];
  let count = 0;
  let arrLength = 0;

  for (let i = 2; i < 21; i++) {
    arrLength = sortedClass.length;
    if (sortedClass[arrLength - 1] > students[i]) {
      while (arrLength && sortedClass[arrLength - 1] > students[i]) {
        sortedClass[arrLength] = sortedClass[arrLength - 1];
        sortedClass[arrLength - 1] = students[i];
        count += 1;
        arrLength -= 1;
      }
    } else {
      sortedClass.push(students[i]);
    }
  }
  console.log(`${students[0]} ${count}`);
});
