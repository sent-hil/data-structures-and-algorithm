const Node = require("./node");

const A = new Node(0);
const B = new Node(1);
const C = new Node(2);
const D = new Node(3);
const E = new Node(4);
const F = new Node(5);
const G = new Node(6);
const H = new Node(7);
const I = new Node(8);
const J = new Node(9);

A.children = [B, C, D];
B.children = [E, F];
C.children = [G, H];
D.children = [I];
F.children = [J];

//       A
//   C      B   D
// G  H   E  F   I
//           J

const encode = (tree) => {
  if (tree.children.length === 0) return "()";

  // build up result of recursively encoding children
  let result = [];
  for (let child of tree.children) {
    result.push(encode(child));
  }

  // sort desc by size of item length
  result.sort((a, b) => b.length - a.length);

  // wrap the children result with () and return that as string joined
  return ["(", ...result, ")"].join("");
};

describe("Tree", () => {
  it("returns () encoding for given tree", () => {
    expect(encode(I)).toEqual("()");
    expect(encode(D)).toEqual("(())");
    expect(encode(B)).toEqual("((())())");
    expect(encode(A)).toEqual("(((())())(()())(()))");
  });
});
