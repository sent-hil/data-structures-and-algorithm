// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

const { buildListNode, ListNode } = require('../linkedList.js')

// mergeKLists1 returns a ASC sorted linked list given a Array of sorted
// linked lists.
//
// It first adds nodes in lists into an Array, then sorts that Array and
// then builds a linked list from it.
//
// According to leetcode, this is faster and uses less memory than the
// implementation below which is surprising.
//
// Time: O(n log n) where n is total number of nodes in lists.
// Space: O(n)
const mergeKLists1 = (lists) => {
  const arr = []

  // add all N items into array
  for (let i = 0; i < lists.length; i++) {
    let cur = lists[i]
    while (cur !== null) {
      arr.push(cur)
      cur = cur.next
    }
  }

  // sort the Array ASC
  arr.sort((a, b) => a.val - b.val)

  if (arr.length === 0) return null

  // build new list from sorted Array
  let head = new ListNode(null)
  let cur = head

  for (let i = 0; i < arr.length; i++) {
    cur.next = arr[i]
    cur = cur.next
  }

  return head.next
}

// mergeKLists returns a ASC sorted linked list given a Array of sorted
// linked lists.
//
// It does by taking the top entry for each of the k lists, adding the smallest
// one to new list.
//
// Time: O(kn) where k is number of lists and n is number of nodes in lists
// Space: O(1)
const mergeKLists = (lists) => {
  let newList = new ListNode(null)
  let head = newList

  while (true) {
    // get first value from all linkedLists in lists
    const arr = []
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] === undefined || lists[i] === null) {
        arr[i] = Infinity // null case
      }
      else arr[i] = lists[i].val
    }

    // find smallest entry among the 1st entry in the lists
    const v = Math.min(...arr)

    // no remaining items in lists
    if (v === Infinity) { return head.next }

    // index of smallest entry in arr, matches smallest entry in lists
    const lowIndx = arr.indexOf(v)

    // set newList tosmallest
    newList.next = lists[lowIndx]
    newList = newList.next

    // move pointer forward from linkedList we popped from
    lists[lowIndx] = lists[lowIndx].next
  }
}

describe("MergeKLists", () => {
  it("should merge k lists", () => {
    expect(mergeKLists1([])).toEqual(null)
    expect(mergeKLists1([buildListNode([])])).toEqual(null)

    expect(mergeKLists1([buildListNode([1])]).toA()).toEqual([1])

    const a = buildListNode([1, 4, 5])
    const b = buildListNode([1, 3, 4])
    const c = buildListNode([2, 6])
    expect(mergeKLists1([a, b, c]).toA()).toEqual([1, 1, 2, 3, 4, 4, 5, 6])
  })

  it("should merge k lists", () => {
    expect(mergeKLists([])).toEqual(null)
    expect(mergeKLists([buildListNode([])])).toEqual(null)

    expect(mergeKLists([buildListNode([1])]).toA()).toEqual([1])

    const a = buildListNode([1, 4, 5])
    const b = buildListNode([1, 3, 4])
    const c = buildListNode([2, 6])
    expect(mergeKLists([a, b, c]).toA()).toEqual([1, 1, 2, 3, 4, 4, 5, 6])
  })
})