const Node = require("./node");

//    7
//   2 4
// 1 3 5 6
const a = new Node(7);
const b = new Node(2);
const c = new Node(4);
const d = new Node(1);
const e = new Node(3);
const f = new Node(5);
const g = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function treeMinValue(root) {
  if (root === null) return Infinity;

  return Math.min(
    root.value,
    treeMinValue(root.left),
    treeMinValue(root.right)
  );
}

console.log(treeMinValue(a));

if (typeof describe === "function") {
  describe("Trees", () => {
    it("Returns minimum value in true", () => {
      expect(treeMinValue(a)).toEqual(1);
    });
  });
}
