const Node = require("./node")

// build returns head of Binary Tree built using given Array.
const build = (arr) => {
  if (arr.length === 0) return null

  const head = new Node(arr[0])
  arr[0] = head

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === null) continue

    // don't forget -1
    // to go to child, it's i*2+1 or i*2+2
    const prnt = Math.floor((i - 1) / 2)
    const node = new Node(arr[i])

    if (arr[prnt] === null) console.log(prnt, i, arr[9])

    // if i = 1, then p = 0, and it's left node
    // if i = 2, then p = 0, and it's right node
    if (i % 2 !== 0) arr[prnt].left = node
    else arr[prnt].right = node

    // child node of `i` will look this up
    arr[i] = node
  }

  return head
}

module.exports = { build }

describe("Binary Tree", () => {
  it("builds binary tree from given Array", () => {
    expect(build([])).toEqual(null)
    expect(build([0]).bfs()).toEqual([0])
    expect(build([0, 1, 2, 3]).toArr()).toEqual([0, 1, 2, 3])
    expect(build([0, 1, null, 3]).toArr()).toEqual([0, 1, null, 3])
    expect(build([1, null, 2, null, null, 3]).toArr()).toEqual([1, null, 2, null, null, 3])
    let a = build([9, 6, -3, null, null, -6, 2, null, null, null, null, null, null, 2, -6])
    a.right.right.left.left = new Node(-6)

    expect(a.toArr()).toEqual(
      [
        9, 6, -3, null, null, -6,
        2, null, null, null, null, null,
        null, 2, -6, null, null, null,
        null, null, null, null, null, null,
        null, null, null, -6
      ])
  })
})