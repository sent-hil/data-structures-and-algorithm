const Node = require("./node")
const { insert } = require("./binarySearchTree")

// check recursively checks if a given node is a binary search tree or not.
//
// It does by bubbling up all the left children and right children and
// checking if the all the left children are less than current node and all
// the right children are greater than the current node.
//
// Returns [[], false] if not a binary search tree.
// Returns [[in order node list], true] if it's a binary search tree.
const check = (node) => {
  if (node === null) return [[], true]

  const [leftValues, isTrue1] = check(node.left)
  const [rightValues, isTrue2] = check(node.right)

  if (isTrue1 === false || isTrue2 === false) return [[], false]

  for (const n of leftValues) {
    if (n > node.value) return [[], false]
  }
  for (const n of rightValues) {
    if (n < node.value) throw [[], false]
  }

  return [[...leftValues, node.value, ...rightValues], true]
}

// check recursively checks if a given node is a binary search tree or not.
//
// It keeps track of left and right bounds for each node and then recurisvely
// moves them for each call.
const check1 = (node, left = -Infinity, right = Infinity) => {
  if (node === null) return true
  if (left > node.value || right < node.value) return false

  return check1(node.left, left, node.value) &&
    check1(node.right, node.value, right)
}

describe("BinarySearchTree", () => {
  describe("check", () => {
    it("returns true if binary search tree", () => {
      const root1 = new Node(3)
      insert(root1, 1)
      insert(root1, 0)
      insert(root1, 2)

      const [r1, isBinary] = check(root1)

      expect(isBinary).toEqual(true)
      expect(r1).toEqual([0, 1, 2, 3])
    })

    it("returns false if not a binary search tree", () => {
      const root1 = new Node(1)
      const root2 = new Node(2)
      const root3 = new Node(3)
      const root4 = new Node(4)

      root1.right = root2
      root2.right = root3
      root3.left = root4

      const [r1, isBinary] = check(root1)

      expect(isBinary).toEqual(false)
      expect(r1).toEqual([])
    })
  })

  describe("check1", () => {
    it("returns true if binary search tree", () => {
      const root1 = new Node(3)
      insert(root1, 1)
      insert(root1, 0)
      insert(root1, 2)

      expect(check1(root1)).toEqual(true)
    })

    it("returns false if not a binary search tree", () => {
      const root1 = new Node(1)
      const root2 = new Node(2)
      const root3 = new Node(3)
      const root4 = new Node(4)

      root1.right = root2
      root2.right = root3
      root3.left = root4

      expect(check1(root1)).toEqual(false)
    })
  })
})
