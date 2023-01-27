const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  // divide array length by 2, but only return quotient
  let il = arr.length >> 1;

  let left = mergeSort(arr.slice(0, il));
  let right = mergeSort(arr.slice(il));

  return merge(left, right);
};

// Given two sorted arrays, returns new sorted array.
const merge = (arr1, arr2) => {
  let newArr = [];

  // iterate through each array, copy over to new array in sorted position.
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.shift());
    } else if (arr1[0] > arr2[0]) {
      newArr.push(arr2.shift());
    } else {
      newArr.push(arr1.shift());
      newArr.push(arr2.shift());
    }
  }

  // copy over left over items to end of new array
  if (arr1.length !== 0) newArr = [...newArr, ...arr1];
  if (arr2.length !== 0) newArr = [...newArr, ...arr2];

  return newArr;
};

describe("", () => {
  it("merge", () => {
    expect(merge([], [])).toEqual([]);
    expect(merge([1], [])).toEqual([1]);
    expect(merge([], [2])).toEqual([2]);
    expect(merge([1], [2])).toEqual([1, 2]);
    expect(merge([2], [1])).toEqual([1, 2]);
    expect(merge([1, 2, 3], [1])).toEqual([1, 1, 2, 3]);
  });

  it("mergeSort", () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([1, 2])).toEqual([1, 2]);
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([3, 1, 1, -1, 2])).toEqual([-1, 1, 1, 2, 3]);
  });
});
