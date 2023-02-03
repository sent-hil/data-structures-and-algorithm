const graph1 = {
  0: [1],
  1: [2, 4],
  2: [],
  3: [1],
  4: [],
  5: [4],
};

const graph2 = {
  0: [1],
  1: [2],
  2: [0],
};

const topological = (graph) => {
  // assumes number of nodes in graph is same as length of it
  let verticesCount = Object.entries(graph).length;
  let [count, sorted] = [0, []];

  let inDegree = [...new Array(verticesCount).fill(0)];

  // count how many edges point to each vertices, stored in inDegree[i]
  for (let vs in graph) {
    for (let v of graph[vs]) {
      inDegree[v]++;
    }
  }
  // find vertices with no incoming edges, ie has 0 inDegree
  let queue = Object.keys(graph).filter((x) => inDegree[x] === 0);

  while (queue.length > 0) {
    let s = queue.shift();
    count++;
    sorted.push(Number(s));

    for (let v of graph[s]) {
      inDegree[v]--;

      // this means there are no more edges coming to v, so we can add it to queue
      if (inDegree[v] === 0) queue.push(v);
    }
  }

  // cycle detected
  if (count !== verticesCount) return false;

  return sorted;
};

describe("", () => {
  it("", () => {
    expect(topological(graph1)).toEqual([0, 3, 5, 1, 2, 4]);
    expect(topological(graph2)).toEqual(false);
  });
});
