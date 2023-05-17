function getCombinations(data, selectNumber) {
  const result = [];
  if (selectNumber === 1) return data.map((d) => [d]);

  data.forEach((fixed, i, origin) => {
    const rest = origin.slice(i + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(attached);
	});

	return result;
}

const example = [1, 2, 3, 4];
const result = getCombinations(example, 2);
console.log(result);
