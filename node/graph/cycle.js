const graph1 = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const graph2 = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: ["a"],
  f: [],
};

const graph3 = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};


// hasCycle returns if given adjacency list has cycle or not using depth first
// search
const hasCycle = (graph) => {
  // traversed stores visited of graph so we don't have to depth first
  // search on them again. This is an optimization.
  const traversed = new Set()

  // dfs does depth first search on given vertex of graph and returns Boolean
  // to indicate if there's cycle in that graph or not
  const dfs = (v, visited) => {
    if (visited.has(v)) return true
    visited.add(v)

    // no need to look further since we know there's no cycle here
    if (traversed.has(v)) return false

    for (let vs of graph[v].slice().reverse()) {
      if (dfs(vs, visited) === true) return true
    }

    return false
  }

  // iterate through each item in graph and see if there's cycle in there
  for (let v in graph) {
    // use new Set for each iteration of depth first search
    const visited = new Set()

    if (dfs(v, visited) === true) return true

    // store all visited vertices so we don't traverse them again, since
    // we already know there are no cycles in there
    for (let n of Array.from(visited)) {
      traversed.add(n)
    }
  }

  return false
}

describe("Graph", () => {
  it("returns false if graph does not have cycle", () => {
    expect(hasCycle(graph1)).toEqual(false)
  })

  it("returns true if graph has cycle", () => {
    expect(hasCycle(graph2)).toEqual(true)
    expect(hasCycle(graph3)).toEqual(true)
  })
})
