const Node = require("./node");

//     5
//   11  3
// 4   2    6
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

function maxSumRoot(root) {
  if (root === null) return 0;

  let left = maxSumRoot(root.left);
  let right = maxSumRoot(root.right);

  return root.value + Math.max(left, right);
}

if (typeof describe === "function") {
  describe("Trees", () => {
    it("Returns max sum in path from Tree to Leaf", () => {
      expect(maxSumRoot(a)).toEqual(20);
    });
  });
}
