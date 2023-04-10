// build creates LinkedList from given array using first entry in array as head.
//
// Example
//    build([]) => null
//    build([1]) => Node(1)
const build = (arr) => {
  if (arr.length === 0) return null

  const head = new Node(arr[0])
  let node = head

  for (let i = 1; i < arr.length; i++) {
    node.next = new Node(arr[i])
    node = node.next
  }

  return head
}

// Node for LinkedList
class Node {
  constructor(value) {
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

  it("builds linked list from Array", () => {
    expect(build([])).toEqual(null)
    expect(build([1]).toA()).toEqual([1])
    expect(build([1, 2, 3]).toA()).toEqual([1, 2, 3])
  })
})