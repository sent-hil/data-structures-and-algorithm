// Example:
//    rotate([1, 2, 3, 4, 5, 6, 7], 3) => [5, 6, 7, 1, 2, 3, 4]
const rotate = (arr, k) => {
  const tempA = []

  k = k % arr.length

  // i = 0, i < 3; => [0,1,2]
  for (let i = 0; i < k; i++) {
    tempA.unshift(arr[arr.length - 1 - i]) // arr[7-1-0] = arr[6] = 7, arr[5] = 6, arr[4] = 5
  }

  // tempA = [5,6,7]

  // m = 0, l = 7-1-3 = 3
  for (let m = 0, l = arr.length - 1 - k; l >= 0; l--, m++) {
    arr[arr.length - 1 - m] = arr[l] // arr[7-1] or arr[6] = arr[3]
  }

  // arr = [1,2,3,1,2,3,4]

  // i = 0; i < 3 => [0,1,2]
  for (let i = 0; i < tempA.length; i++) {
    arr[i] = tempA[i]
  }

  return arr
}

describe("Array", () => {
  it("rotates Array k times", () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
    expect(rotate([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
    expect(rotate([-1], 2)).toEqual([-1])
    expect(rotate([1, 2], 3)).toEqual([2, 1])
  })
})