function fibonaci(n) {
  if (n <= 1) {
    return 1;
  }

  return fibonaci(n - 1) + fibonaci(n - 2);
}

describe("Fibonnaci", () => {
  it("1", () => {
    expect(fibonaci(1)).toEqual(1)
  })

  it("2", () => {
    expect(fibonaci(2)).toEqual(2)
  })

  it("3", () => {
    expect(fibonaci(3)).toEqual(3)
  })

  it("4", () => {
    expect(fibonaci(4)).toEqual(5)
  })

  it("5", () => {
    expect(fibonaci(5)).toEqual(8)
  })
})
