const Node = require('./node')
const { treeHeightRecursive: height } = require('./height')

const A = new Node(0);
const B = new Node(1);
const C = new Node(2);
const E = new Node(4);
const F = new Node(5);
const H = new Node(7);

A.left = B
A.right = C
B.left = E
B.right = F
F.right = H;

// Example of unbalanced Binary Tree.
//       A
//   C       B
//         E   F
//               H

// balanced returns Boolean to indicate if a Binary Tree is balanced or not.
// A tree is balanced if height of left and right subtrees differs by just 1.
const balanced = (root) => {
  const height = (node) => {
    if (node === null) return 0

    const lHeight = height(node.left)
    const rHeight = height(node.right)
    const h = Math.abs(lHeight - rHeight)

    if (!(h === 0 || h === 1)) return Infinity

    return Math.max(lHeight, rHeight) + 1
  }

  return height(root) != Infinity
}

const balanced1 = (root) => {
  if (root === null) return true

  const lHeight = height(root.left)
  const rHeight = height(root.right)

  return Math.abs(lHeight - rHeight) <= 1
}

describe("Balanced Binary Tree", () => {
  it("returns true if given empty tree", () => {
    expect(balanced(null)).toEqual(true)
    expect(balanced1(null)).toEqual(true)
  })

  it("returns true if given a single node", () => {
    expect(balanced(H)).toEqual(true)
    expect(balanced1(H)).toEqual(true)
  })

  it("returns true if tree is balanced", () => {
    expect(balanced(B)).toEqual(true)
    expect(balanced1(B)).toEqual(true)
  })

  it("returns false if tree is not balanced", () => {
    expect(balanced(A)).toEqual(false)
    expect(balanced1(A)).toEqual(false)
  })
})
