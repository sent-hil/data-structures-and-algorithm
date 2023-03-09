const bubble = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // only go till 2nd last, since you're comparing +1
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

describe("Sort", () => {
  it("Returns result of Bubble Sort", () => {
    expect(bubble([])).toEqual([]);
    expect(bubble([1])).toEqual([1]);
    expect(bubble([3, 1, 1, 3])).toEqual([1, 1, 3, 3]);
    expect(bubble([4, 2, 1])).toEqual([1, 2, 4]);
    expect(bubble([11, 4, 2, 9, 3, 1])).toEqual([1, 2, 3, 4, 9, 11]);
  });
});
