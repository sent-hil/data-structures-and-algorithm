const build2DMatrix = (n) => {
  const matrix = []
  for (let i = 0; i < n; i++) {
    matrix[i] = Array(n).fill(null)
  }

  return matrix
}

const build3DMatrix = (n) => {
  const matrix = []
  for (let i = 0; i < n; i++) {
    matrix[i] = []
    for (let j = 0; j < n; j++) {
      matrix[i][j] = Array(n).fill(null)
    }
  }

  return matrix
}

module.exports = { build2DMatrix, build3DMatrix }

describe("Matrix", () => {
  it("builds 2d matrix", () => {
    expect(build2DMatrix(1)).toEqual([[null]])
    expect(build2DMatrix(2)).toEqual([[null, null], [null, null]])
  })

  it("builds 3d matrix", () => {
    expect(build3DMatrix(1)).toEqual([[[null]]])
    expect(build3DMatrix(2)).toEqual(
      [[[null, null], [null, null]], [[null, null], [null, null]]]
    )
  })
})
