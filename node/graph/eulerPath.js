// Directed, cyclical graph
const graph1 = [
  [], //
  [2, 3],
  [2, 4, 4],
  [1, 2, 5],
  [3, 6],
  [6],
  [3],
];

// Directed, cyclical graph
//       2
//      / \
// 0 ->  1  -> 3 -> 4
const graph2 = [
  [1], //
  [2, 3],
  [1],
  [4],
  [],
];

// Returns two arrays, former representing number of incoming edges and latter
// representing number of outgoing edges from given graph.
//
// Extra outgoing edge representing starting vertex, extra incoming represent
// ending vertex.
const buildInOutTable = (adjList) => {
  const length = adjList.length;
  const inTable = new Array(length).fill(0);
  const outTable = new Array(length).fill(0);

  for (const [v, neighbors] of adjList.entries()) {
    outTable[v] = neighbors.length;
    for (const n of neighbors) {
      inTable[n]++;
    }
  }

  return [inTable, outTable];
};

// Returns if given graph has a Eulerian path, ie visit all edges in graph
// exactly once.
//
// NOTE: edges, not same as vertex, it can visit sames vertex multiple times,
// as long as the vertex's edges are unique.
const hasEulerPath = (adjList) => {
  const [inTable, outTable] = buildInOutTable(adjList);
  let [inCount, outCount] = [0, 0];

  for (let i = 0; i < inTable.length; i++) {
    if (inTable[i] - outTable[i] > 1) return false;
    if (outTable[i] - inTable[i] > 1) return false;

    if (inTable[i] - outTable[i] === 1) inCount++;
    if (outTable[i] - inTable[i] === 1) outCount++;
  }

  return (inCount === 0 && outCount === 0) || (inCount === 1 && outCount === 1);
};

// Returns index location of possible start vertex from given graph.
//
// If adjList has extra outgoing edge, then it return that, if not, it returns
// the last i since any i will do.
const findStartVertex = (adjList) => {
  const [inTable, outTable] = buildInOutTable(adjList);

  let anyI = 0;
  for (let i = 0; i < inTable.length; i++) {
    // extra outgoing edge, so it's the start
    if (outTable[i] - inTable[i] === 1) return i;

    // if no outgoing, then set i as possible start, and keep looking
    if (outTable[i] - inTable[i] === 0) anyI = i;
  }

  return anyI;
};

// Returns array containing Eulerian path of given adjList.
// If no Eulerian path exists for given adjList, it returns false.
const eulerPath = (adjList) => {
  if (!hasEulerPath(adjList)) return false;

  const [_, outTable] = buildInOutTable(adjList);
  const startVertex = findStartVertex(adjList);

  // DFS starting at vertex, returns itself and its children as array.
  const dfs = (vertex) => {
    const children = [];

    while (outTable[vertex] != 0) {
      // this returns current value, and not decremented value;
      // since arrays are 0 indexed, we always care about -1 value
      outTable[vertex]--;

      // access the next vertex in adjaceny list
      // ie we start from end and decrement till 0
      next = adjList[vertex][outTable[vertex]];
      children.unshift(...dfs(next));
    }

    return [vertex, ...children];
  };

  return dfs(startVertex);
};

describe("Euler path", () => {
  it("returns in and count degree count", () => {
    expect(buildInOutTable(graph1)).toEqual([
      [0, 1, 3, 3, 2, 1, 2],
      [0, 2, 3, 3, 2, 1, 1],
    ]);

    expect(buildInOutTable(graph2)).toEqual([
      [0, 2, 1, 1, 1],
      [1, 2, 1, 1, 0],
    ]);
  });

  it("returns if graph has eulerian path", () => {
    expect(hasEulerPath(graph1)).toEqual(true);
    expect(hasEulerPath(graph2)).toEqual(true);
  });

  it("returns start vertex", () => {
    expect(findStartVertex(graph1)).toEqual(1);
    expect(findStartVertex(graph2)).toEqual(0);
  });

  it("returns euler path", () => {
    expect(eulerPath(graph1)).toEqual([
      1, 3, 5, 6, 3, 2, 4, 3, 1, 2, 2, 4, 6,
    ]);
    expect(eulerPath(graph2)).toEqual([0, 1, 2, 1, 3, 4]);
  });
});
