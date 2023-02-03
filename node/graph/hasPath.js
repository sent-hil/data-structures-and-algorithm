const graph1 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// hasPath return Boolean to indicate if there's a path between source and dest;
// it only works with DAG.
const hasPath = (graph, source, dest) => {
  if (source === dest) return true;
  if (graph[source].length === 0) return false;

  for (let v of graph[source]) {
    if (hasPath(graph, v, dest)) return true;
  }

  return false;
};

const graph2 = {
  i: ["j", "k"],
  j: ["i"],
  k: ["i", "m", "l"],
  m: ["k"],
  l: ["k"],
  o: ["n"],
  n: ["o"],
};

// hasPath return Boolean to indicate if there's a path between source and dest;
// it works with unordered and cyclic graphs
const hasPath2 = (graph, source, dest) => {
  let [stack, set] = [[source], new Set()];

  while (stack.length > 0) {
    let s = stack.pop();
    if (s === dest) return true;

    for (let v of graph[s]) {
      if (!set.has(v)) {
        set.add(v);
        stack.push(v);
      }
    }
  }

  return false;
};

describe("Path", () => {
  it("hasPath", () => {
    expect(hasPath(graph1, "f", "k")).toEqual(true);
  });

  it("hasPath1", () => {
    expect(hasPath2(graph2, "i", "m")).toEqual(true);
    expect(hasPath2(graph2, "i", "n")).toEqual(false);
  });
});
