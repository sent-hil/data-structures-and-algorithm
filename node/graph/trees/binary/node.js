class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  dfsRecursive() {
    const accum = [];
    const iter = (n) => {
      if (n === null) return;

      accum.push(n.value);

      iter(n.left);
      iter(n.right);
    };

    iter(this);

    return accum;
  }

  dfsIterative() {
    const [accum, stack] = [[], []];
    stack.push(this);

    while (stack.length > 0) {
      // remove from end
      const s = stack.pop();
      accum.push(s.value);

      // push right and then left to end, since [].pop is LIFO
      if (s.right !== null) stack.push(s.right);
      if (s.left !== null) stack.push(s.left);
    }

    return accum;
  }

  bfs() {
    const [accum, queue] = [[], []];
    queue.push(this);

    while (queue.length > 0) {
      // remove from beginning
      const s = queue.shift();
      accum.push(s.value);

      // push to end, hence FIFO
      if (s.left !== null) queue.push(s.left);
      if (s.right !== null) queue.push(s.right);
    }

    return accum;
  }

  toArr() {
    const output = []
    const setOutput = (node, i) => {
      if (node === null) return

      output[i] = node.value

      setOutput(node.left, i * 2 + 1)
      setOutput(node.right, i * 2 + 2)
    }

    setOutput(this, 0)

    // set to null since it's easier to check for that
    for (let i = 0; i < output.length; i++) {
      if (typeof output[i] === 'undefined') output[i] = null
    }

    return output
  }
}

module.exports = Node;

//    A
//   B C
// D E F G
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
const g = new Node("G");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

describe("Trees", () => {
  it("does DFS recursively and returns node values", () => {
    expect(a.dfsRecursive()).toEqual(["A", "B", "D", "E", "C", "F", "G"]);
  });

  it("does DFS iteratively with stack and returns node values", () => {
    expect(a.dfsIterative()).toEqual(["A", "B", "D", "E", "C", "F", "G"]);
  });

  it("does BFS iteratively with queue and returns node values", () => {
    expect(a.bfs()).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
  });

  it("does DFS recursively adn returns node values including null", () => {
    expect(a.bfs()).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
  })
});
