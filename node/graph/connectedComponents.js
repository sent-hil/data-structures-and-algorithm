const graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
};

// dfIterative does depth first traversal of graph while being mindful of
// cycles in the graph
const dfIterative = (graph, source) => {
  let [stack, accum, visited] = [[source], [], new Set()];

  while (stack.length > 0) {
    let s = stack.pop();
    if (visited.has(s)) continue;

    visited.add(s);
    accum.push(s);
    for (let v of graph[s].slice().reverse()) {
      stack.push(v);
    }
  }

  return accum;
};

// connectedComponents returns number of strongly connected components of graph.
// We define strongly connected as having path between the vertices.
const connectedComponents = (graph) => {
  // count tracks number of strongly connected components
  // visited tracks already visited vertices
  let [count, visited] = [0, new Set()];

  for (let v in graph) {
    // since keys in Object are stored as strings, we need to ensure we do
    // same type comparison.
    if (visited.has(String(v))) continue;

    count++;

    const visitedEntries = dfIterative(graph, v);
    for (let w of visitedEntries) {
      visited.add(String(w));
    }
  }

  return count;
};

describe("connectedComponents", () => {
  it("returns number of connected components in graph", () => {
    expect(connectedComponents({})).toEqual(0);
    expect(connectedComponents(graph)).toEqual(3);
  });
});
