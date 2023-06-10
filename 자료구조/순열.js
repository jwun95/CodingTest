const getPermutations = (arr, selectNumber) => {
	const results = [];
	if (selectNumber === 1) return arr.map((el) => [el]);

	arr.forEach((fixed, index, origin) => {
		const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
		const permutations = getPermutations(rest, selectNumber - 1);
		const attached = permutations.map((el) => [fixed, ...el]);
		results.push(...attached);
	});

	return results;
}

console.log(getPermutations([1, 2, 3, 4], 4));

const getCombinations = function (arr, selectNumber) {
	const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};
