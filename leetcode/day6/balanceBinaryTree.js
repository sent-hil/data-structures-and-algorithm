const Node = require("../../node/graph/trees/binary/node")
const { build } = require("../../node/graph/trees/binary/build")

// https://leetcode.com/problems/balanced-binary-tree/?envType=study-plan&id=level-2
const isBalanced = (root) => {
  const height = (node) => {
    if (node === null) return 0

    const lh = height(node.left)
    const rh = height(node.right)
    const df = Math.abs(lh - rh)

    if (df > 1 || df < 0) return Infinity

    return Math.max(lh, rh) + 1
  }

  return height(root) !== Infinity
}

describe("Leetcode Day 6", () => {
  it("returns true if given empty tree", () => {
    expect(isBalanced(null)).toEqual(true)
  })

  it("returns true if given a single node", () => {
    head = build([1])
    expect(isBalanced(head)).toEqual(true)
  })

  it("returns true if tree is balanced", () => {
    //          3
    //     9        20
    // null null  15   7
    let head = build([3, 9, 20, null, null, 15, 7])
    expect(isBalanced(head)).toEqual(true)
  })

  it("returns false if tree is not isBalanced", () => {
    let head = null

    //      1
    // null   2
    //     null 3
    head = build([1, null, 2, null, null, 3])
    expect(isBalanced(head)).toEqual(false)

    head = build([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, null, null, 5, 5])
    expect(isBalanced(head)).toEqual(true)

    //                  1
    //        2                  2
    //   3       null      null     3
    //4 null  null null  null null    4
    //
    // this is not balanced because even though at root, height of left & right are the same,
    // at node 2, left height is 0 and right height is 2
    head = build([1, 2, 2, 3, null, null, 3, 4, null, null, null, null, null, 4])
    expect(isBalanced(head)).toEqual(false)
  })
})