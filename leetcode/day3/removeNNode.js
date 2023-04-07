const Node = require("../../node/linkedList.js")

const removeNthFromEnd = (head, n) => {
  const iterate = (head) => {
    if (head === null) return null

    head.next = iterate(head.next)

    n--
    if (n === 0) return head.next

    return head
  }

  return iterate(head)
};

describe("LinkedList", () => {
  let cur = new Node(1, 1);
  let head = cur
  for (let i = 2; i < 6; i++) {
    next = new Node(i, i)
    cur.append(next)

    cur = next
  }

  it("removeNthFromEnd", () => {
    expect(head.toA()).toEqual([1, 2, 3, 4, 5])
    expect(removeNthFromEnd(head, 2).toA()).toEqual([1, 2, 3, 5])
  })
})