const bestSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;

  let accum = [];

  for (let num of numbers) {
    let diff = target - num;
    let result = bestSum(diff, numbers);
    if (result !== null) {
      accum.push([num, ...result]);
    }
  }

  if (accum.length === 0) return null;

  return accum.sort((a, b) => a.length - b.length)[0];
};

const bestSumMemo = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];

  if (target === 0) return [];
  if (target < 0) return null;

  let accum = [];

  for (let num of numbers) {
    let diff = target - num;
    let result = bestSumMemo(diff, numbers, memo);
    if (result !== null) accum.push([num, ...result]);
  }

  if (accum.length === 0) {
    memo[target] = null;
    return null;
  }

  memo[target] = accum.sort((a, b) => a.length - b.length)[0];
  return memo[target];
};

describe("", () => {
  it("bestSum", () => {
    expect(bestSum(8, [2, 3, 5])).toEqual([3, 5]);
    expect(bestSum(7, [5, 3, 4, 7])).toEqual([7]);
    expect(bestSum(7, [2, 4])).toEqual(null);
  });

  it("bestSumMemo", () => {
    expect(bestSumMemo(8, [2, 3, 5])).toEqual([3, 5]);
    expect(bestSumMemo(7, [5, 3, 4, 7])).toEqual([7]);
    expect(bestSumMemo(7, [2, 4])).toEqual(null);
    expect(bestSumMemo(100, [1, 2, 5, 25])).toEqual([25, 25, 25, 25]);
    expect(bestSumMemo(300, [7, 14])).toEqual(null);
  });
});
