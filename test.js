const types = {
  BOOL: 1,
  SHORT: 2,
  FLOAT: 4,
  INT: 8,
  LONG: 16,
};

const data = ["INT", "INT", "BOOL", "SHORT", "LONG"];
const answer = [];
let str = "";

data.reduce((x, y) => {
  if (y === "INT") {
    x += ".".repeat(8 - x.length);
    answer.push(x);
    answer.push("#".repeat(8));
    return "";
  } else if (y === "LONG") {
    x += ".".repeat(8 - x.length);
    answer.push(x);
    answer.push("#".repeat(8));
    answer.push("#".repeat(8));
    return "";
	} else {
		if (x.length !== types[y]) {
			const gap = 8 - types[y] - x.length;
			if (gap < 0) {
				x += ".".repeat(8 - x.length);
				answer.push(x);
				return "#".repeat(types[y]);
			} else {
				x += '.'.repeat(gap);
				x += "#".repeat(types[y]);
				return x;
			}
		}
  }
});

console.log(answer);