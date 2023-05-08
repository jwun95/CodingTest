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

const N = parseInt(input().trim());
const infos = [];

/*
팀번호 1 or 2
분초 형식 한자리일 경우 0
0<=mm<=47
0<=ss<=59
득점 시간이 겹치는 경우는 없다.

팀 번호를 체크하면서 팀번호가 바뀔 때, 시간 갱신 시킨다.
*/

function timeCal(prev, curr) {
	const [prevMM, prevSS] = prev.split(":")
	const [currMM, currSS] = curr.split(":")

	const prevTime = parseInt(prevMM) * 60 + parseInt(prevSS)
	const currTime = parseInt(currMM) * 60 + parseInt(currSS);

	return prevTime - currTime
}

for (let i = 0; i < N; i++) {
  infos.push(input().trim().split(" "));
}

const winningTimes = { 1: "48:00", 2: "48:00" };

infos.forEach((info) => {

})