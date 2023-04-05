// https://leetcode.com/problems/where-will-the-ball-fall/?envType=study-plan&id=level-2
const findBall = (grid) => {
  const isStuck = (row, col) => {
    // outside of grid bounds, so the ball fell through
    if (row < 0 || row > grid.length - 1) return col
    if (col < 0 || col > grid[row].length - 1) return col

    // check if adjacent values are the same
    const cv = grid[row][col]
    const nv = grid[row][col + cv]
    if (cv !== nv) return -1

    // move left or right diagnoal based on cv
    // if cv is 1, it moves right, down
    // if cv is -1, it moves left, down
    return isStuck(row + 1, col + cv)
  }

  const output = []
  for (let i = 0; i < grid[0].length; i++) {
    // check for every column in row 0
    output.push(isStuck(0, i))
  }

  return output
}

describe("FindBall", () => {
  it("returns Array of outcomes", () => {
    let grid = [
      [1, 1, 1, -1, -1],
      [1, 1, 1, -1, -1],
      [-1, -1, -1, 1, 1],
      [1, 1, 1, 1, -1],
      [-1, -1, -1, -1, -1]
    ]
    expect(findBall(grid)).toEqual([1, -1, -1, -1, -1])

    grid = [[-1]]
    expect(findBall(grid)).toEqual([-1])

    grid = [
      [1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1]
    ]
    expect(findBall(grid)).toEqual([0, 1, 2, 3, 4, -1])
  })
})