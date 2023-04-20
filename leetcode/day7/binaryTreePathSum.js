const Node = require("../../node/graph/trees/binary/node")
const { build } = require("../../node/graph/trees/binary/build")

// A path in a binary tree is a sequence of nodes where each pair of adjacent
// nodes in the sequence has an edge connecting them. A node can only appear in
// the sequence at most once. Note that the path does not need to pass through
// the root.
//
// The path sum of a path is the sum of the node's values in the path.
//
// Given the root of a binary tree, return the maximum path sum of any non -
// empty path.
//
// Since it's max path sum, we don't care about the nodes where node.val+subtrees < 0.
// Therefore we can dicard those subtrees.
//
// Example 1: Max sum is left+node+right from root.
//     1
//   2   3    => 2+1+3 = 6
//
// Example 2: Max sum is left+node+right from subtree of root.
//      -10
//   9        20
// n   n   15    7    => 20 + 15 + 7 = 42
//
// Example 3: Max sum is node+right, another alternate case is node+left.
//     1
//  -2   3    => 1 + 3 = 4
//
// Example 4: Max sum is the node itself.
//          -1
//     -2         10
//  -6    n    -3    -6   => 10
const maxPathSum = (root) => {
  if (root === null) return null

  let max = -Infinity

  const pathSum = (node) => {
    if (node === null) return 0

    const [lSum, rSum] = [pathSum(node.left), pathSum(node.right)]

    max = Math.max(max, lSum + node.val + rSum)

    // if node + subtree is < 0, return 0
    //
    // this prevents the cases of doing
    // max = Math.max(max, node.val)
    // max = Math.max(max, node.val+lSum)
    // max = Math.max(max, node.val+rSum)
    return Math.max(0, node.val + Math.max(lSum, rSum))
  }

  pathSum(root)

  return max
}

describe("Leetcode Day 7", () => {
  it("returns max path sum", () => {
    expect(maxPathSum(build([-3]))).toEqual(-3)
    expect(maxPathSum(build([1, -2, 3]))).toEqual(4)
    expect(maxPathSum(build([1, 2, 3]))).toEqual(6)
    expect(maxPathSum(build([-10, 9, 20, null, null, 15, 7]))).toEqual(42)
    expect(maxPathSum(build([-1, -2, 10, -6, null, -3, -6]))).toEqual(10)

    let a = build([9, 6, -3, null, null, -6, 2, null, null, null, null, null, null, 2, -6])
    a.right.right.left.left = new Node(-6)

    expect(maxPathSum(a)).toEqual(16)
  })
})