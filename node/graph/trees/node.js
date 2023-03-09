class Node {
  constructor(value) {
    this.children = [];
    this.value = value;
  }
}

module.exports = Node;

const A = new Node(5);
const B = new Node(4);
const C = new Node(3);
const D = new Node(1);
const E = new Node(0);
const F = new Node(7);
const G = new Node(4);
const H = new Node(-1);

A.children = [B, C];
B.children = [D];
C.children = [E, F, G];
F.children = [H];

//    5
//  4     3
// 1   0  7  4
//       -1

const leafSum = (node) => {
  if (node === null) return null;
  if (node.children.length === 0) return node.value;

  let totalChildSum = 0;
  for (let child of node.children) {
    totalChildSum += leafSum(child);
  }

  return totalChildSum;
};

describe("Tree", () => {
  it("leafSum", () => {
    expect(leafSum(A)).toEqual(4);
  });
});
