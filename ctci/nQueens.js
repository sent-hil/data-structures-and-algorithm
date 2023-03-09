const { build2DMatrix } = require("../node/matrix.js")

const place = (queensLength) => {
  const board = build2DMatrix(queensLength)

  let results = []

  // keeps track of which positions are not longer valid
  const col = new Set
  // diagonoal move positions
  const [left, right] = [new Set, new Set]

  const _place = (r) => {
    if (r === queensLength) {
      return results.push(JSON.parse(JSON.stringify(board))) // deep copy
    }

    for (let c = 0; c < board.length; c++) {
      if (col.has(c) || left.has(r + c) || right.has(r - c)) continue

      col.add(c)
      left.add(r + c)
      right.add(r - c)
      board[r][c] = 'Q'

      _place(r + 1)

      col.delete(c)
      left.delete(r + c)
      right.delete(r - c)
      board[r][c] = null
    }
  }

  _place(0)

  return results
}

describe("NQueens", () => {
  it("returns board places of 4 queens in 4x4 board", () => {
    expect(place(4)).toEqual(
      [
        [
          [null, 'Q', null, null],
          [null, null, null, 'Q'],
          ['Q', null, null, null],
          [null, null, 'Q', null]
        ],
        [
          [null, null, 'Q', null],
          ['Q', null, null, null],
          [null, null, null, 'Q'],
          [null, 'Q', null, null]
        ]
      ]
    )
  })

  it("returns board places of 6 queens in 6x6 board", () => {
    expect(place(6)).toEqual(
      [
        [
          [null, 'Q', null, null, null, null],
          [null, null, null, 'Q', null, null],
          [null, null, null, null, null, 'Q'],
          ['Q', null, null, null, null, null],
          [null, null, 'Q', null, null, null],
          [null, null, null, null, 'Q', null]
        ],
        [
          [null, null, 'Q', null, null, null],
          [null, null, null, null, null, 'Q'],
          [null, 'Q', null, null, null, null],
          [null, null, null, null, 'Q', null],
          ['Q', null, null, null, null, null],
          [null, null, null, 'Q', null, null]
        ],
        [
          [null, null, null, 'Q', null, null],
          ['Q', null, null, null, null, null],
          [null, null, null, null, 'Q', null],
          [null, 'Q', null, null, null, null],
          [null, null, null, null, null, 'Q'],
          [null, null, 'Q', null, null, null]
        ],
        [
          [null, null, null, null, 'Q', null],
          [null, null, 'Q', null, null, null],
          ['Q', null, null, null, null, null],
          [null, null, null, null, null, 'Q'],
          [null, null, null, 'Q', null, null],
          [null, 'Q', null, null, null, null]
        ]
      ]
    )
  })

})
