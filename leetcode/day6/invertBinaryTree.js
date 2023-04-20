const Node = require("../../node/graph/trees/binary/node")
const { build } = require("../../node/graph/trees/binary/build")

// Given the root of a binary tree, invert the tree, and return its root.
//
// https://leetcode.com/problems/invert-binary-tree/?envType=study-plan&id=level-2
//
// Example:
//    1         1
//   2 3   =>  3 2
// 4 5 6 7   7 6 5 4
const invertTree = (root) => {
  if (root === null) return null

  const left = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(left)

  return root
};

describe("Leetcode Day 6", () => {
  it("inverts binary tree", () => {
    expect(invertTree(build([1, 2, 3, 4, 5, 6, 7])).bfs()).toEqual([1, 3, 2, 7, 6, 5, 4])
  })
})