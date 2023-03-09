// Directed graph
//      0
// 1    2     5
//      3   4   6
const graph1 = [
  [1, 2, 5], //
  [],
  [3],
  [],
  [],
  [4, 6],
  [],
];

const encode = (rootedGraph, root) => {
  const encode = (vertex) => {
    if (rootedGraph[vertex].length === 0) return "()";

    const childEncodings = [];
    for (const neighbor of rootedGraph[vertex]) {
      childEncodings.push(encode(neighbor));
    }

    childEncodings.sort((a, b) => b.length - a.length);

    return ["(", ...childEncodings, ")"].join("");
  };

  return encode(root);
};

module.exports = { encode };

describe("Graph", () => {
  it("returns encoding", () => {
    expect(encode(graph1, 4)).toEqual("()");
    expect(encode(graph1, 2)).toEqual("(())");
    expect(encode(graph1, 0)).toEqual("((()())(())())");
  });
});
