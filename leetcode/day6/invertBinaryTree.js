const Node = require("../../node/graph/trees/binary/node")

const invertTree = (root) => {
  if (root === null) return null

  const left = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(left)

  return root
};

//    1
//   2 3
// 4 5 6 7
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

describe("Leetcode Day 6", () => {
  it("inverts binary tree", () => {
    expect(a.bfs()).toEqual([1, 2, 3, 4, 5, 6, 7])
    expect(invertTree(a).bfs()).toEqual([1, 3, 2, 7, 6, 5, 4])
  })
})