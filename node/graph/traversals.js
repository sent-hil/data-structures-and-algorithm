const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const dfRecursive = (graph, source, accum = []) => {
  accum.push(source);

  if (graph[source].length === 0) return;

  for (let v of graph[source]) {
    dfRecursive(graph, v, accum);
  }

  return accum;
};

const dfIterative = (graph, source) => {
  let [stack, accum] = [[source], []];

  while (stack.length > 0) {
    let s = stack.pop();
    accum.push(s);
    for (let v of graph[s].slice().reverse()) {
      stack.push(v);
    }
  }

  return accum;
};

const breathFirst = (graph, source) => {
  let [queue, accum] = [[source], []];

  while (queue.length > 0) {
    let s = queue.shift();
    accum.push(s);

    for (let v of graph[s]) {
      queue.push(v);
    }
  }

  return accum;
};

describe("Traversals", () => {
  it("dfRecursive", () => {
    expect(dfRecursive(graph, "a")).toEqual(["a", "b", "d", "f", "c", "e"]);
  });

  it("dfIterative", () => {
    expect(dfIterative(graph, "a")).toEqual(["a", "b", "d", "f", "c", "e"]);
  });

  it("breathFirst", () => {
    expect(breathFirst(graph, "a")).toEqual(["a", "b", "c", "d", "e", "f"]);
  });
});

module.exports = {
  dfRecursive,
  dfIterative,
  breathFirst,
};
