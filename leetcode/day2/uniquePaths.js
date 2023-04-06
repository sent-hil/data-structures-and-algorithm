const uniquePathRecursive = (row, col) => {
  let count = 0
  const visit = (r, c) => {
    if (r === row && c === col) return count += 1
    if (r > row || c > col) return

    visit(r, c + 1)
    visit(r + 1, c)
  }

  visit(1, 1)

  return count
}

// uniquePaths returns number of unique ways you can move in a given
// row * col grid assuming you can only move right or down.
//
// It does by building a matrix that calculates how many ways you can get to
// current grid based on aggregrate of top and below grid.
//  [
//    1 1 1 1
//    1 2 3 4
//    1 3 6 10
//  ]
const uniquePaths = (row, col) => {
  // build row * col matrix
  const c = Array(col + 1).fill(1)
  const matrix = Array(row + 1).fill([...c])

  // start from 1, so we never run out of bounds
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      // set m(i,j), equal to count of ways you can get to top up
      // and left, ie two ways you can move
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
    }
  }

  // look at the -1 since we're doing +1 when building the matrix
  return matrix[row - 1][col - 1]
}

describe("Unique Paths", () => {
  it("returns number of unique paths from start to end", () => {
    expect(uniquePaths(7, 3)).toEqual(28)
    expect(uniquePaths(3, 2)).toEqual(3)
  })

  it("returns number of unique paths from start to end", () => {
    expect(uniquePathRecursive(7, 3)).toEqual(28)
    expect(uniquePathRecursive(3, 2)).toEqual(3)
  })
})