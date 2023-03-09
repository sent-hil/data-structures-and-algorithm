const { center } = require("./center");
const { root } = require("./root");
const { encode } = require("./encode");

const graph1 = {
  0: [1, 2, 5],
  1: [0],
  2: [0, 3],
  3: [2],
  4: [5],
  5: [0, 4, 6],
  6: [5],
};

const graph2 = {
  0: [1, 2, 5],
  1: [0],
  2: [0, 3],
  3: [2],
  4: [5],
  5: [0, 4, 6],
  6: [5],
};

const graph3 = {
  0: [1],
  1: [2],
  2: [1],
}

const isomorphic = (adjList1, adjList2) => {
  const [centers1, centers2] = [
    center(Object.values(adjList1)),
    center(Object.values(adjList2)),
  ];

  const rooted1 = root(adjList1, centers1[0]);
  const encoding1 = encode(rooted1, centers1[0]);

  for (const c of centers2) {
    if (encoding1 === encode(root(adjList2, c), c)) return true;
  }

  return false;
};

describe("Graph", () => {
  it("returns if graph is isomorphic", () => {
    expect(isomorphic(graph1, graph2)).toEqual(true);
    expect(isomorphic(graph1, graph3)).toEqual(false);
  });
});
