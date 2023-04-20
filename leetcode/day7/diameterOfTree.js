const Node = require("../../node/graph/trees/binary/node")
const { build } = require("../../node/graph/trees/binary/build")

// The diameter of a binary tree is the length of the longest path between any
// two nodes in a tree. This path may or may not pass through the root.
//
// The last sentence was a hint.
//
// The length of a path between two nodes is represented by the number of edges
// between them.
//
// Example 1:
//      1
//    2   3
//  4   5    => [4213] or [5213]
//
// Example 2:
//  1
// 2    => [21]
//
// Example 3:
//       1
//     2
//   4   5
// 9   6   7
//           8  => [875249]
const diameterOfBinaryTree = (root) => {
  let result = 0

  const height = (node) => {
    if (node === null) return 0

    const lHeight = height(node.left)
    const rHeight = height(node.right)

    result = Math.max(result, lHeight + rHeight)

    return Math.max(lHeight, rHeight) + 1
  }

  height(root)

  return result
}

describe("Leetcode Day 7", () => {
  it("returns diameter of binary tree", () => {
    expect(diameterOfBinaryTree(build([1, 2]))).toEqual(1)
    expect(diameterOfBinaryTree(build([1, 2, 3, 4, 5]))).toEqual(3)
  })
})