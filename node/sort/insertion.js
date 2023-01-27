const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        [arr[j + 1], arr[j]] = [arr[j], temp];
      }
    }
  }

  return arr;
};

describe("", () => {
  it("insertionSort", () => {
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([1])).toEqual([1]);
    expect(insertionSort([2, 8])).toEqual([2, 8]);
    expect(insertionSort([8, 2])).toEqual([2, 8]);
    expect(insertionSort([8, 2, 4, -1, 3, 3])).toEqual([-1, 2, 3, 3, 4, 8]);
  });
});
