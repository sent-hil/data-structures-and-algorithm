class Graph {
  constructor() {
    this.adjanceyList = {};
  }

  addVertex(v) {
    this.adjanceyList[v] ||= [];
  }

  addEdge(u, w, weight = 1) {
    this.addVertex(u);
    this.addVertex(w);

    this.adjanceyList[u].push({ vertex: w, weight: weight });
  }

  topologicalSort() {
    let verticesCount = Object.entries(this.adjanceyList).length;
    let [count, sorted] = [0, []];

    // initialize inDegree of every vertex to be 0
    let inDegree = {};
    for (let vertex in this.adjanceyList) {
      inDegree[vertex] = 0;
    }

    // increment inDegree of every vertex based on incoming edges
    for (let vertex in this.adjanceyList) {
      for (let edge of this.adjanceyList[vertex]) {
        inDegree[edge.vertex]++;
      }
    }

    // find vertexes that have no incoming edges
    let queue = Object.keys(inDegree).filter((v) => inDegree[v] === 0);

    while (queue.length > 0) {
      let vertex = queue.pop();
      count++;
      sorted.push(vertex);

      for (let edge of this.adjanceyList[vertex]) {
        inDegree[edge.vertex]--;
        if (inDegree[edge.vertex] === 0) queue.push(edge.vertex);
      }
    }

    // cycle detected
    if (count !== verticesCount) throw new Error("Cycle detected");

    return sorted;
  }

  shortestPath(src) {
    const sortedVertexes = this.topologicalSort();

    // initialize shortest distance for every vertex to be infinity, except src
    let shortest = {};
    for (let vertex of sortedVertexes) {
      shortest[vertex] = Infinity;
    }

    // src distance distance to itself is 0
    shortest[src] = 0;

    // populate shortest with shortest distances to its adjacent vertexes
    for (let v of sortedVertexes) {
      for (let edge of this.adjanceyList[v]) {
        this.relax(v, edge.vertex, edge.weight, shortest);
      }
    }

    return shortest;
  }

  relax(u, w, weight, shortest) {
    if (shortest[u] + weight < shortest[w]) {
      shortest[w] = shortest[u] + weight;
    }
  }

  weight(u, w) {
    for (let edge of this.adjanceyList[u]) {
      if (edge.vertex === w) return edge.weight;
    }

    throw new Error(`Weight of [${u},${w}] not found`);
  }
}

describe("Graph", () => {
  let g;

  beforeEach(() => {
    g = new Graph();

    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addVertex("D");

    g.addEdge("A", "B", 1);
    g.addEdge("A", "C", 2);
    g.addEdge("B", "D", 1);
    g.addEdge("C", "D", 2);
  });

  it("add vertexes and edges", () => {
    expect(Object.entries(g.adjanceyList).length).toEqual(4);

    let vertexA = g.adjanceyList["A"];

    expect(vertexA[0]).toEqual({ vertex: "B", weight: 1 });
    expect(vertexA[1]).toEqual({ vertex: "C", weight: 2 });
  });

  it("topologically sorts", () => {
    expect(g.topologicalSort()).toEqual(["A", "C", "B", "D"]);
  });

  it("returns shortest path from src to every other node", () => {
    expect(g.shortestPath("A")).toEqual({ A: 0, C: 2, B: 1, D: 2 });
  });
});
