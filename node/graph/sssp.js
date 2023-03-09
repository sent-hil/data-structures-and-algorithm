const { topological } = require("./topological1")

const weightedGraph1 = {
  A: { B: 3, C: 6 },
  B: { C: 4, D: 4, E: 11 },
  C: { D: 8, G: 11 },
  D: { E: -4, F: 5, G: 2 },
  E: { H: 9 },
  F: { H: 1 },
  G: { H: 2 },
  H: [] // leaf node; need this since JS does like undefined when iterating
}

// convertWGraphToAdjObject converts given weighted graph to adj object so it
// can be passed to `topological` function.
//
// Example:
//    convertwGraphToAdjObject({ A : { B : 1, C: 2 } }) => { A: [B, C] }
const convertWGraphToAdjObject = (wGraph) => {
  const adjObject = {}

  for (const [v, neigbors] of Object.entries(wGraph)) {
    adjObject[v] = Object.keys(neigbors)
  }

  return adjObject
}

// sssp returns paths (and weights) from given source to every other vertex in
// given a weighted, directed Graph in O(V + E) time.
const sssp = (wGraph, source) => {
  const adjObject = convertWGraphToAdjObject(wGraph)
  const topSorted = topological(adjObject)

  // initialize path weights for every vertex as Infinity; this is used to store
  // shortest path weight from source to every other vertex
  const pathWeights = {}
  for (let v of topSorted) pathWeights[v] = Infinity

  // setting pathWeights[source] = 0 is what make source the starting point
  pathWeights[source] = 0

  // initialize path of every vertex
  // this is used to determine shortest path from source to every other vertex
  const paths = {}
  for (let v of topSorted) paths[v] = null

  // relax updates weight and previous path if new path weight is less;
  // at the beginning most weights will be Infinity, so the first path we see
  // will be updated first;
  // pathWeights is guaranteed to be best by the time we relax all edges
  //
  // think two points: start, end, with distances to get there already
  //    if dist(prev, start) + dist(start, end) < dist(prev, end)
  //    then we pick the former since it's shorter
  const relax = (start, end) => {
    const newWeight = pathWeights[start] + wGraph[start][end]
    if (newWeight < pathWeights[end]) {
      pathWeights[end] = newWeight

      // set path to arrive to end to begin with start, since this route is shortest
      paths[end] = start
    }
  }

  for (let v of topSorted) {
    for (let n of adjObject[v]) {
      relax(v, n)
    }
  }

  return { pathWeights, paths }
}

describe("Graph", () => {
  it("returns single source shortest path from source", () => {
    const { pathWeights, paths } = sssp(weightedGraph1, 'A')

    expect(paths).toEqual({ A: null, B: 'A', C: 'A', D: 'B', E: 'D', F: 'D', G: 'D', H: 'G' })
    expect(pathWeights).toEqual({ A: 0, B: 3, C: 6, D: 7, E: 3, F: 12, G: 9, H: 11 })
  })

  it("returns adjacency list given weight graph object", () => {
    expect(convertWGraphToAdjObject(weightedGraph1)).toEqual({
      A: ['B', 'C'],
      B: ['C', 'D', 'E'],
      C: ['D', 'G'],
      D: ['E', 'F', 'G'],
      E: ['H'],
      F: ['H'],
      G: ['H'],
      H: []
    })
  })
})
