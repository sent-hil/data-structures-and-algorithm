// topological returns vertex of given adjList in Array in linear order.
//
// If there's a cycle in the graph, it returns false.
const topological = (adjList) => {
  // assumes number of nodes in adjList is same as length of it
  let verticesCount = Object.keys(adjList).length;
  let topSorted = [];

  let inDegree = {}

  // count how many edges point to each vertices, stored in inDegree[i]
  // Ex (graph1): [0, 2 ... 0]
  //    0 vertex has 0 incoming edges, while 1 vertex has 2 incoming
  for (const [i, neighbors] of Object.entries(adjList)) {
    inDegree[i] ||= 0
    for (let n of neighbors) {
      inDegree[n] ||= 0
      inDegree[n]++;
    }
  }

  // find vertices with no incoming edges, ie has 0 inDegree
  //
  // NOTE: we use index since that's the vertex id and not inDegree[i] which
  // be the count of incoming edges.
  const queue = Object.keys(adjList).filter((n) => inDegree[n] === 0)

  while (queue.length > 0) {
    // remove item from queue and add to topSorted since only way it can be
    // added to this queue is if it has no incoming vertices
    let s = queue.shift();

    topSorted.push(s);

    // iterate through all the vertices that point to this vertex and decrement
    // the incoming degree, ie like removing the vertex from the graph
    for (let v of adjList[s]) {
      inDegree[v]--;

      // there are no more edges coming to v, so add it to queue
      if (inDegree[v] === 0) queue.push(v);
    }
  }

  // cycle detected
  if (topSorted.length !== verticesCount) return false;

  return topSorted;
};

module.exports = { topological }

describe("Graph", () => {
  it("returns topological sort", () => {
    const graph1 = {
      0: ["1"],
      1: ["2", "4"],
      2: [],
      3: ["1"],
      4: [],
      5: ["4"],
    };

    expect(topological(graph1)).toEqual(['0', '3', '5', '1', '2', '4']);
  });

  it("returns false if there's a cycle in the graph", () => {
    const graph2 = {
      0: [1],
      1: [2],
      2: [0],
    };

    expect(topological(graph2)).toEqual(false);
  })
});
