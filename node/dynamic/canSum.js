const canSum1 = (target, numbers) => {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    let diff = target - num;
    if (canSum1(diff, numbers)) return true;
  }

  return false;
};

const canSum1Memo = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    let diff = target - num;
    if (canSum1(diff, numbers)) {
      memo[diff] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
};

const canSum = (target, numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    let newArr = numbers.filter((n) => n <= target);

    if (diff === 0) return true;
    if (newArr.length === 0) return false;

    if (canSum(diff, newArr)) return true;
  }

  return false;
};

const canSumMemo = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];

  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    let newArr = numbers.filter((n) => n <= target);

    if (diff === 0) {
      memo[diff] = true;
      return true;
    }
    if (newArr.length === 0) return false;

    if (canSum(diff, newArr)) {
      memo[diff] = true;
      return true;
    }
  }

  memo[target] = false;
  return memo[target];
};

describe("", () => {
  it("canSum", () => {
    expect(canSum(7, [5, 4, 3, 7])).toEqual(true);
    expect(canSum(7, [2, 4])).toEqual(false);
    expect(canSum(7, [5, 2, 3, 1])).toEqual(true);
  });

  it("canSumMemo", () => {
    expect(canSumMemo(7, [5, 4, 3, 7])).toEqual(true);
    expect(canSumMemo(7, [2, 4])).toEqual(false);
    expect(canSumMemo(7, [5, 2, 3, 1])).toEqual(true);
  });

  it("canSum1", () => {
    expect(canSum1(7, [5, 4, 3, 7])).toEqual(true);
    expect(canSum1(7, [2, 4])).toEqual(false);
    expect(canSum1(7, [5, 2, 3, 1])).toEqual(true);
  });

  it("canSum1Memo", () => {
    expect(canSum1Memo(7, [5, 4, 3, 7])).toEqual(true);
    expect(canSum1Memo(7, [2, 4])).toEqual(false);
    expect(canSum1Memo(7, [5, 2, 3, 1])).toEqual(true);
  });
});
