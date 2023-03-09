const graph1 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// hasPathRecursive return Boolean to indicate if there's a path between source
// and dest; it only works with DAG.
const hasPathRecursive = (graph, source, dest) => {
  if (source === dest) return true;
  if (graph[source].length === 0) return false;

  for (let v of graph[source]) {
    if (hasPathRecursive(graph, v, dest)) return true;
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

// hasPathUndirectIterative return Boolean to indicate if there's a path
// between source and dest; it works with unordered and cyclic graphs
const hasPathUndirectIterative = (graph, source, dest) => {
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

const hasPathUndirectRecursive = (graph, source, dest, visited = new Set()) => {
  if (source === dest) return true;
  if (visited.has(source)) return false;
  visited.add(source);

  for (let v of graph[source]) {
    if (hasPathUndirectRecursive(graph, v, dest, visited)) {
      return true;
    }
  }

  return false;
};

describe("Path", () => {
  it("hasPathRecursive", () => {
    expect(hasPathRecursive(graph1, "f", "k")).toEqual(true);
  });

  it("hasPathUndirectIterative", () => {
    expect(hasPathUndirectIterative(graph1, "f", "k")).toEqual(true);
    expect(hasPathUndirectIterative(graph2, "i", "m")).toEqual(true);
    expect(hasPathUndirectIterative(graph2, "i", "n")).toEqual(false);
  });

  it("hasPathUndirectRecursive", () => {
    expect(hasPathUndirectRecursive(graph1, "f", "k")).toEqual(true);
    expect(hasPathUndirectRecursive(graph2, "i", "m")).toEqual(true);
    expect(hasPathUndirectRecursive(graph2, "i", "n")).toEqual(false);
  });
});
