const howSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let diff = target - num;
    let result = howSum(diff, numbers);
    if (result !== null) return [...result, num];
  }

  return null;
};

const howSumMemo = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let diff = target - num;
    let result = howSumMemo(diff, numbers, memo);

    if (result !== null) {
      memo[target] = [...result, num];
      return [...result, num];
    }
  }

  memo[target] = null;
  return null;
};

describe("", () => {
  it("howSum", () => {
    expect(howSum(7, [5, 3, 4])).toEqual([4, 3]);
    expect(howSum(7, [2, 4])).toEqual(null);
  });

  it("howSumMemo", () => {
    expect(howSumMemo(7, [5, 3, 4])).toEqual([4, 3]);
    expect(howSumMemo(7, [2, 4])).toEqual(null);
    expect(howSumMemo(300, [7, 14])).toEqual(null);
  });
});
