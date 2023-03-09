const Node = require("./node");

// insert recursively adds a new node with given value while maintaining
// BST constraint.
//
// If a node with the given value already exists, it returns that node.
const insert = (node, value) => {
  if (node === null) node = new Node(value)

  if (node.value < value) node.right = insert(node.right, value)
  if (node.value > value) node.left = insert(node.left, value)

  // we do nothing if node.value === value

  return node
}

// find recursively finds node with given value.
//
// Returns false if no node with given value is found, else it returns the node
// with given value.
const find = (node, value) => {
  if (node === null) return false
  if (node.value === value) return node

  if (node.value < value) return find(node.right, value)

  return find(node.left, value)
}

// remove recursively removes node with given value.
const remove = (node, value) => {
  if (node === null) return false

  if (node.value < value) node.right = remove(node.right, value)
  if (node.value > value) node.left = remove(node.left, value)

  // findMin returns the left most mode node for the given node, which by
  // definition of BST will be the minimum.
  const findMin = (n) => {
    while (n.left !== null) n = n.left
    return n
  }

  if (node.value === value) {
    // if right node is empty, then return the left node, ie it's a single
    // node tree
    //
    // in case of leaf, this case will also be true, which then will return
    // node.right, which is also null
    if (node.right === null) return node.left
    if (node.left === null) return node.right

    // in case were node to be removed has both left and right nodes, we
    // want to replace it with the smallest node from the right tree.
    //
    // biggest node from the left tree will also work in this scenario
    const tmp = findMin(node.right)
    node.value = tmp.value

    // now that we updated the node with the min node value, we can remove
    // that min node
    node.right = remove(node.right, tmp.value)
  }

  return node
}

module.exports = { insert };

describe("Binary Search Tree", () => {
  describe("find", () => {
    const node = new Node(7);

    it("returns false if value does not exist", () => {
      expect(find(null, 1)).toEqual(false)
      expect(find(null, node)).toEqual(false)
    })

    it("returns true if value is found", () => {
      insert(node, 5);
      insert(node, 9);
      insert(node, 11);

      expect(find(node, 5).value).toEqual(5)
      expect(find(node, 9).value).toEqual(9)
      expect(find(node, 11).value).toEqual(11)
    })
  })

  describe("insert", () => {
    it("insert node for empty tree", () => {
      expect(insert(null, 1).value).toEqual(1);
    });

    it("inserts to the left of node node if value is less than node", () => {
      const node = new Node(7);
      insert(node, 5);

      expect(node.left.value).toEqual(5);
    });

    it("inserts to the right of node node if value is less than node", () => {
      const node = new Node(7);
      insert(node, 20);

      expect(node.right.value).toEqual(20);
    });

    it("does nothing if node value is the same as insert value", () => {
      const node = new Node(7);
      const returnNode = insert(node, 7);

      expect(returnNode).toEqual(node)
    });

    it("returns result of breath first traversal", () => {
      const node = new Node(7);
      insert(node, 5);
      insert(node, 20);
      insert(node, 4);
      insert(node, 6);
      insert(node, 15);
      insert(node, 33);
      insert(node, 2);
      insert(node, 10);
      insert(node, 25);

      expect(node.bfs()).toEqual([7, 5, 20, 4, 6, 15, 33, 2, 10, 25]);
    });
  })

  describe("remove", () => {
    it("returns false if given value is not found", () => {
      expect(remove(null, 1)).toEqual(false)
    })

    it("removes node", () => {
      const node = new Node(7);
      insert(node, 5);
      insert(node, 20);
      insert(node, 4);
      insert(node, 6);
      insert(node, 15);
      insert(node, 33);

      const returnNode = remove(node, 7)
      expect(returnNode.value).toEqual(15)

      expect(returnNode.bfs()).toEqual([15, 5, 20, 4, 6, 33])
    })
  })
});
