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
1<=N<=100
분초 형식 한자리일 경우 0
0<=mm<=47
0<=ss<=59
득점 시간이 겹치는 경우는 없다.

팀 번호를 체크하면서 팀번호가 바뀔 때, 시간 갱신 시킨다.
*/

function timeCal(prev, curr, method = "m") {
  const [prevMM, prevSS] = prev.split(":");
  const [currMM, currSS] = curr.split(":");

  const prevTime = parseInt(prevMM) * 60 + parseInt(prevSS);
  const currTime = parseInt(currMM) * 60 + parseInt(currSS);

  const times = method === "m" ? currTime - prevTime : currTime + prevTime;
  const minuet = String(Math.floor(times / 60));
  const second = String(times % 60);

  const finalTime = [];

  minuet.length === 1 ? finalTime.push("0" + minuet) : finalTime.push(minuet);
  second.length === 1 ? finalTime.push("0" + second) : finalTime.push(second);

  return finalTime.join(":");
}

for (let i = 0; i < N; i++) {
  infos.push(input().trim().split(" "));
}

const scores = { 1: 0, 2: 0 };
const winningTimes = { 1: "00:00", 2: "00:00" };

let winningTeam = infos[0][0];
scores[winningTeam] += 1;
winningTimes[winningTeam] = infos[0][1];

for (let i = 1; i < N; i++) {

}
