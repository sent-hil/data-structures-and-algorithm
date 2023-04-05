// sprialMatrix returns all elements of given m x n matrix in spiral order.
//
// Example:
//    [1,2,3]
//    [4,5,6] => [1,2,3,6,9,8,7,4,5]
//    [7,8,9]
//
// https://leetcode.com/problems/spiral-matrix/?envType=study-plan&id=level-2
const spiralMatrix = (mArr) => {
  const result = []
  while (mArr.length > 0) {
    result.push(...mArr.shift())
    mArr = flipMatrix(mArr)
  }

  return result
}

// flipMatrix flips the given m * n matrix 90 degrees to the left and returns
// new Array that's flipped.
//
// Example:
//    [4,5,6]    [6,9]
//    [7,8,9] => [5,8]
//               [4,7]
const flipMatrix = (mArr) => {
  // need this since for loop is looking at [0] below
  if (mArr.length === 0) return []

  const result = []

  for (let i = mArr[0].length - 1; i >= 0; i--) {
    const inner = []
    for (let j = 0; j < mArr.length; j++) {
      inner.push(mArr[j][i])
    }
    result.push(inner)
  }

  return result
}

describe("Matrix", () => {
  describe("Flip Matrix", () => {
    it("should flip the matrix 90", () => {
      let m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      let n = [[4, 5, 6], [7, 8, 9]]

      expect(flipMatrix(m)).toEqual([[3, 6, 9], [2, 5, 8], [1, 4, 7]])
      expect(flipMatrix(n)).toEqual([[6, 9], [5, 8], [4, 7]])
    })
  })

  describe("Sprial Matrix", () => {
    it("should results of sprial matrix traversal", () => {
      let m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      let n = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

      expect(spiralMatrix(m)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
      expect(spiralMatrix(n)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
    })
  })
})