const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n < 2) return n;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

describe("", () => {
  it("", () => {
    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(3)).toEqual(2);
    expect(fib(4)).toEqual(3);
    expect(fib(5)).toEqual(5);
  });
});
