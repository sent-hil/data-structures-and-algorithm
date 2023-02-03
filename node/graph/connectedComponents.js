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

const connectedComponents = (graph) => {
  let [count, visited] = [0, new Set()];

  for (let v in graph) {
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
  it("", () => {
    expect(connectedComponents(graph)).toEqual(3);
  });
});
