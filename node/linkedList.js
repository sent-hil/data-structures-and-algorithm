// Node for LinkedList
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }

  append(node) {
    this.next = node;
  }

  toA() {
    const output = []
    let node = this

    while (node !== null) {
      output.push(node.value)
      node = node.next
    }

    return output
  }
}

module.exports = Node;

describe("Node", () => {
  let cur = new Node(1, 1);
  let head = cur

  for (let i = 2; i < 6; i++) {
    next = new Node(i, i)
    cur.append(next)

    cur = next
  }

  it("returns values in Array", () => {
    expect(head.toA()).toEqual([1, 2, 3, 4, 5])
  })
})