// center returns the centers(s) of given undirected Graph, as Array. The
// resulting Array will contain at most 2 entries.
//
// It works by keep track of leaf nodes and then figuratively removing them
// till you're left with 1 or 2 nodes of the same in degree.
//
// NOTE: if any of vertices doesn't have an edge, this never finishes running
// due to `while (seen < verticesCount)` condition.
const center = (adjList) => {
  let verticesCount = adjList.length;
  let degrees = new Array(verticesCount).fill(0);

  let leaves = [];

  // build array with incoming vertices for each vertex at index i
  // Ex: [2, 1 ... 1] for graphArray above
  for (const [vert, edges] of adjList.entries()) {
    degrees[vert] = edges.length;

    // if it has 0 degress, then it's a leaf
    if (degrees[vert] === 1) leaves.push(vert);
  }

  let seenCount = leaves.length;

  while (seenCount < verticesCount) {
    let newLeaves = [];
    for (let leaf of leaves) {
      for (let neighbor of adjList[leaf]) {
        degrees[neighbor]--;
        if (degrees[neighbor] === 1) newLeaves.push(neighbor);
      }
    }

    seenCount += newLeaves.length;
    leaves = newLeaves;
  }

  return leaves;
};

// minSpanningTree is same as finding center of a given graph. This problem
// is originally from Leetcode and uses adjacency pair as input, so we convert
// that to adjacency list and call `center`.
const minSpanningTree = (adjPair) => {
  const adjList = []

  for (const pairs of adjPair) {
    adjList[pairs[0]] ||= []
    adjList[pairs[1]] ||= []

    adjList[pairs[0]].push(pairs[1])
    adjList[pairs[1]].push(pairs[0])
  }

  return center(adjList)
}

module.exports = { center };

describe("Graph", () => {
  it("returns center of strongly connected, undirected graph given adjacency list", () => {
    // Undirected graph
    //    0
    //  1   2
    //      3
    const graph1 = [
      [1, 2], //
      [0],
      [0, 3],
      [2],
    ];

    expect(center(graph1)).toEqual([0, 2]);
  });

  it("minimum list of minimum spanning height root tables", () => {
    const graph2 = [[1, 0], [1, 2], [1, 3]]
    expect(minSpanningTree(graph2)).toEqual([1])

    const graph3 = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]
    expect(minSpanningTree(graph3)).toEqual([3, 4])
  })
});
