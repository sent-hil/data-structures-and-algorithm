addToArray = (arr, item, i) => {
  if (i < 0) {
    // arr.length + i returns specified position, +1 indicates where to add it
    i = arr.length + i + 1;
  }

  return [...arr.slice(0, i), item, ...arr.slice(i)]
}

removeFromArray = (arr, i) => {
  if (i < 0) {
    i = arr.length + i; // arr.length + i returns position for negative i
  }

  return [...arr.slice(0, i), ...arr.slice(i + 1)]
}

describe("Array", () => {
  let arr = null

  beforeEach(() => {
    arr = ['A', 'B', 'C']
  })

  describe("addToArray", () => {
    it("0", () => {
      expect(addToArray(arr, "0", 0)).toEqual(["0", "A", "B", "C"]);
    });

    it("1", () => {
      expect(addToArray(arr, "0", 1)).toEqual(["A", "0", "B", "C"]);
    });

    it("-1", () => {
      expect(addToArray(arr, "0", -1)).toEqual(["A", "B", "C", "0"]);
    });

    it("-2", () => {
      expect(addToArray(arr, "0", -2)).toEqual(["A", "B", "0", "C"]);
    });
  })

  describe("removeFromArray", () => {
    it("0", () => {
      expect(removeFromArray(arr, 0)).toEqual(["B", "C"]);
    });

    it("1", () => {
      expect(removeFromArray(arr, 1)).toEqual(["A", "C"]);
    });

    it("-1", () => {
      expect(removeFromArray(arr, -1)).toEqual(["A", "B"]);
    });

    it("-2", () => {
      expect(removeFromArray(arr, -2)).toEqual(["A", "C"]);
    });
  })
});
