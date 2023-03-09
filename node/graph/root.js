// Undirected graph
//      0
// 1    2     5
//      3   4   6
const graph1 = [
  [1, 2, 5], //
  [0],
  [0, 3],
  [2],
  [5],
  [0, 4, 6],
  [5],
];

// root returns a DAG starting from given center given a undirected graph
const root = (graph, center) => {
  let rootedGraph = [];

  // Set to store visited vertexes. Since graph is undirected, edges for
  // vertices: u & v will be in graph[u] and graph[v], but we only want u.
  let set = new Set();

  // Does DFS and builds a directed graph at rootedGraph.
  const visit = (vert) => {
    // Add vert to set and set edges as [], we'll only add to edges if we
    // we haven't visited that neighbor before.
    set.add(vert);
    rootedGraph[vert] = [];

    for (let neighbor of graph[vert]) {
      if (!set.has(neighbor)) {
        rootedGraph[vert].push(neighbor);
        visit(neighbor);
      }
    }
  };

  visit(center);

  return rootedGraph;
};

module.exports = { root };

describe("Graph", () => {
  it("returns undirected graph starting at 0", () => {
    expect(root(graph1, 0)).toEqual([[1, 2, 5], [], [3], [], [], [4, 6], []]);
  });

  it("returns undirected graph starting at 1", () => {
    expect(root(graph1, 1)).toEqual([[2, 5], [0], [3], [], [], [4, 6], []]);
  });
});
