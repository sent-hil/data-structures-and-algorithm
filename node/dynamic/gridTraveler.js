const gridTraveler = (n, m) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTraveler(n - 1, m) + gridTraveler(m - 1, n);
};

describe("", () => {
  it("", () => {
    expect(gridTraveler(1, 1)).toEqual(1);
    expect(gridTraveler(1, 2)).toEqual(1);
    expect(gridTraveler(2, 2)).toEqual(2);
    expect(gridTraveler(2, 3)).toEqual(3);
    expect(gridTraveler(2, 4)).toEqual(4);
    expect(gridTraveler(3, 3)).toEqual(6);
    expect(gridTraveler(3, 4)).toEqual(10);
  });
});
