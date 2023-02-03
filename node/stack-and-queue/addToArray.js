function addToArray(arr, item, i) {
  if (i < 0) {
    // arr.length + i returns specified position, +1 indicates where to add it
    i = arr.length + i + 1;
  }
  return [arr.slice(0, i), item, arr.slice(i)].flat();
}

describe("", () => {
  let arr = ["A", "B", "C"];

  it("0", () => {
    expect(addToArray(arr, "0", 0)).toEqual(["0", "A", "B", "C"]);
  });

  it("-1", () => {
    expect(addToArray(arr, "0", -1)).toEqual(["A", "B", "C", "0"]);
  });

  it("-2", () => {
    expect(addToArray(arr, "0", -2)).toEqual(["A", "B", "0", "C"]);
  });
});
