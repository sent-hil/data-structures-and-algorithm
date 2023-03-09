const Node = require("./node");

//     5
//   11  3
// 4   2    6
// 9
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(2);
const g = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = g;

const treeHeight = (node) => {
  if (node === null) return -1

  let height = 0;
  const queue = [[node, height]];

  while (queue.length !== 0) {
    let [node, nodeHeight] = queue.pop();
    height = nodeHeight;

    if (node.left !== null) queue.unshift([node.left, nodeHeight + 1]);
    if (node.right !== null) queue.unshift([node.left, nodeHeight + 1]);
  }

  return height;
};

const treeHeightRecursive = (node) => {
  if (node === null) return -1;

  const lHeight = treeHeightRecursive(node.left)
  const rHeight = treeHeightRecursive(node.right)

  return Math.max(lHeight, rHeight) + 1
};

module.exports = { treeHeightRecursive }

describe("Trees", () => {
  it("it calculates tree height (0 indexed)", () => {
    expect(treeHeight(null)).toEqual(-1);
    expect(treeHeight(g)).toEqual(0);
    expect(treeHeight(b)).toEqual(1);
    expect(treeHeight(a)).toEqual(2);
  });

  it("it calculates tree height (0 indexed) recursively", () => {
    expect(treeHeightRecursive(null)).toEqual(-1);
    expect(treeHeightRecursive(g)).toEqual(0);
    expect(treeHeightRecursive(b)).toEqual(1);
    expect(treeHeightRecursive(a)).toEqual(2);
  });
});
