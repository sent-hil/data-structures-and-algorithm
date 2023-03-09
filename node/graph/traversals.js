const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const dfRecursive = (graph, source) => {
  if (graph[source].length === 0) return [source]

  let children = []
  for (let v of graph[source]) {
    children.push(...dfRecursive(graph, v))
  }

  return [source, ...children]
};

const dfIterative = (graph, source) => {
  const [stack, accum] = [[source], []]

  while (stack.length !== 0) {
    const v = stack.pop()

    // since stack is LIFO, we want to push in reverse order
    // we call .slice(), since .reverse() will reverse in place
    // and we don't want to modify original graph
    for (let vs of graph[v].slice().reverse()) {
      stack.push(vs)
    }

    accum.push(v)
  }

  return accum
};

const breathFirst = (graph, source) => {
  const [queue, accum] = [[source], []]

  while (queue.length !== 0) {
    const v = queue.shift()
    for (let vs of graph[v]) {
      queue.push(vs)
    }

    accum.push(v)
  }

  return accum
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
