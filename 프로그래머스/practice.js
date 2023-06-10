function solution(keyinput, board) {
  var answer = [0, 0];
  const limited = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  keyinput.forEach((v) => {
    if (answer[0] < limited[0] && -limited[0] < answer[0]) {
      if (v === "left") {
        answer[0] -= 1;
      } else if (v === "right") {
        answer[0] += 1;
      }
    }
    if (answer[1] < limited[1] && -limited[1] < answer[1]) {
      if (v === "up") {
        answer[1] += 1;
      } else if (v === "down") {
        answer[1] -= 1;
      }
    }
  });

  return answer;
}

const board = [5, 5];
const keyinput = [
  "left",
  "left",
  "left",
  "left",
  "right",
  "right",
  "right",
  "right",
];
const 기대값 = [2, 0];
console.log(solution(keyinput, board));