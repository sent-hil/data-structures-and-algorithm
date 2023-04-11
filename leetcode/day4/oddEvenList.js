const { build } = require("../../node/linkedList.js")

// oddEvenList takes a LinkedList head and returns new LinkedList that's
// rearranged so odd number indexes in original LinkedList are together
// in front, followed by even numbered indexes.
//
// https://leetcode.com/problems/odd-even-linked-list/?envType=study-plan&id=level-2
//
// Example:
//    l1 = build([1, 2, 3, 4, 5])
//    oddEvenList(l1) => [1, 3, 5, 2, 4]
const oddEvenList = (head) => {
  if (head === null) return null
  if (head.next === null) return head

  let [odd, even] = [head, head.next] // initialize two heads
  let evenHead = head.next // needed to set to end of odd list
  let node = head.next.next // start pointer at i = 2

  while (node !== null) {
    // add to odd list, move pointer
    odd.next = node
    odd = odd.next

    // add to even list, move pointer
    even.next = node.next
    even = even.next

    // if it's odd numbered list, there would be no node.next
    if (node.next === null) break

    // move node to after even
    node = node.next.next
  }

  // point end of odd list to start of even list
  odd.next = evenHead

  // since 1st entry wouldn't have changed, return head
  return head
}

describe("Leetcode Day5", () => {
  it("reorders linked list by even/odd sorting", () => {
    let l1

    l1 = build([1, 2, 3, 4, 5])
    expect(oddEvenList(l1).toA()).toEqual([1, 3, 5, 2, 4])

    l1 = build([2, 1, 3, 5, 6, 4, 7])
    expect(oddEvenList(l1).toA()).toEqual([2, 3, 6, 7, 1, 5, 4])
  })
})