const Node = require("./node");

//    7
//   2 4
// 1 3 5 6
const a = new Node(7);
const b = new Node(2);
const c = new Node(4);
const d = new Node(1);
const e = new Node(3);
const f = new Node(5);
const g = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

const bfs = (root) => {
  const [queue, output] = [[root], []]

  while (queue.length > 0) {
    let queueSize = queue.length
    const tempOutput = []

    while (queueSize > 0) {
      const n = queue.shift()
      tempOutput.push(n.value)

      if (n.left !== null) queue.push(n.left)
      if (n.right !== null) queue.push(n.right)

      queueSize--
    }

    output.push(tempOutput)
  }

  return output
}

// bfsArr returns Array of order traversal given an input Array that represents
// a Binary tree.
const bfsArr = (bArr) => {
  const output = [[bArr[0]]]
  let i = 1

  while (i < bArr.length - 1) {
    const tempOutput = []

    // size of last array in output * 2, since each node has 2 children
    const childrenLength = output[output.length - 1].length * 2

    for (let j = 0; j < childrenLength; j++) {
      tempOutput.push(bArr[i])
      i++
    }

    output.push(tempOutput)
  }

  return output
}

const build = (bArr) => {
  const recursiveBuild = (i) => {
    if (i >= bArr.length) return null

    const [c1, c2] = [i * 2 + 1, i * 2 + 2]

    const n = new Node(bArr[i])
    const [cv1, cv2] = [recursiveBuild(c1), recursiveBuild(c2)]

    if (cv1 !== null) n.left = cv1
    if (cv2 !== null) n.right = cv2

    return n
  }

  return recursiveBuild(0)
}

describe("Binary Tree", () => {
  describe("bfs", () => {
    it("Returns in order nodes", () => {
      expect(bfs(a)).toEqual([[7], [2, 4], [1, 3, 5, 6]])
    })
  })

  describe("bfsArr", () => {
    it("Returns in order nodes", () => {
      expect(bfsArr([7, 2, 4, 1, 3, 5, 6])).toEqual([[7], [2, 4], [1, 3, 5, 6]])
    })
  })

  describe("build", () => {
    it("Returns Root node after building Binary Search from Array", () => {
      const root = build([7, 2, 4, 1, 3, 5, 6])
      expect(bfs(root)).toEqual([[7], [2, 4], [1, 3, 5, 6]])
    })
  })
})
