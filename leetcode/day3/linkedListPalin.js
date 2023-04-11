const { Node } = require("../../node/linkedList.js")

// isPalindrome returns Boolean to indicate if given LinkedList is a
// Palindrome or not.
const isPalindrome = (head) => {
  let front = []

  // find the middle of linkedlist using 2x pointer and add to fast
  let [slow, fast] = [head, head]
  while (fast !== null && fast.next !== null) {
    front.push(slow.value)
    slow = slow.next
    fast = fast.next.next
  }

  // now that we're in middle, add the rest of linked list to back
  let back = []
  while (slow !== null) {
    back.push(slow.value)
    slow = slow.next
  }

  // use stringify to compare arrays
  front = JSON.stringify(front)
  back = back.reverse()

  // compare if two arrays are the same
  // account for odd number linked lists, where we don't care about middle
  // ie 1 -> 2 -> 3 -> 2 -> 1 is still a palindrome
  if (front === JSON.stringify(back)) return true
  if (front === JSON.stringify(back.slice(0, back.length - 1))) return true

  return false
};

describe("LinkedList", () => {
  let n1 = null
  it("returns if linked list is palindrome", () => {
    n1 = new Node(1, 1)
    n1.next = new Node(2, 2)
    expect(isPalindrome(n1)).toEqual(false)

    n1.next.next = new Node(2, 2)
    n1.next.next.next = new Node(1, 1)
    expect(isPalindrome(n1)).toEqual(true)

    n1.next = new Node(0, 0)
    n1.next.next = new Node(1, 1)
    expect(isPalindrome(n1)).toEqual(true)

    n1.next = new Node(1, 1)
    expect(isPalindrome(n1)).toEqual(true)
  })
})