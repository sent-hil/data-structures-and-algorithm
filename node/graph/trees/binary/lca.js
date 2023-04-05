const Node = require('./node')

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const E = new Node('D');
const F = new Node('E');
const H = new Node('F');

A.left = B
A.right = C
B.left = E
B.right = F
F.right = H;

//       A
//   C       B
//         E   F
//               H

// lca returns the least common ancestor Node of given n1 and n2 Nodes in
// root Binary Tree.
const lca = (root, n1, n2) => {
  let result = null

  const _lca = (node) => {
    if (node === null) return false

    const [l, r] = [_lca(node.left), _lca(node.right)]

    if (node === n1 || node === n2) {
      // check for cases where current Node itself is the LCA since
      // n1 or n2 is a child node
      if (l == true || r === true) return result = node
      return true
    }

    // if both child nodes return true, then this is LCA
    if (l === true && r === true) return result = node

    // if only 1 child node returns true, then we have to move up
    if (l === true || r === true) return true

    return false
  }

  _lca(root)

  return result
}

describe("Binary Tree", () => {
  it("returns LCA of two nodes", () => {
    expect(lca(A, E, F)).toEqual(B)
    expect(lca(A, E, H)).toEqual(B)
    expect(lca(A, C, B)).toEqual(A)
    expect(lca(A, B, H)).toEqual(B)
  })
})