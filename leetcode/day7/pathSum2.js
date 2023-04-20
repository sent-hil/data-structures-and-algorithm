const { build } = require("../../node/graph/trees/binary/build")

// Given the root of a binary tree and an integer targetSum, return the number
// of paths where the sum of the values along the path equals targetSum.
//
// The path does not need to start or end at the root or a leaf, but it must
// go downwards (i.e., traveling only from parent nodes to child nodes).
//
// Since we care about all paths, we can't discard any paths since some
// combination of path might equal to targetSum. In example below, there are
// 2 paths which equal target sum: 2 and [2,1,-1]
//    2
//  -1
// 1
//
// If we care only about smallest path, then we can ignore the latter.
const pathSum = (root, targetSum) => {
  let count = 0

  const sum = (node) => {
    if (node === null) return []
    if (node.val === targetSum) count++; // path of single node counts as well

    // get all possible path sums from left and right subtrees
    const [lArr, rArr] = [sum(node.left), sum(node.right)]

    const cArr = []
    cArr.push(node.val) // don't forget current node

    const iterate = (arr) => {
      for (const item of arr) {
        // increment count if any previous path sum +current node val is target sum
        if (item + node.val === targetSum) count++
        cArr.push(item + node.val)
      }
    }

    // iterate left and right subtrees to see if any paths match the target sum
    iterate(lArr)
    iterate(rArr)

    // return only this and not lArr or rArr since we want paths to be reachable
    return cArr
  }

  sum(root)

  return count
}

describe("Leetcode Day 7", () => {
  it("returns count of paths that macthes sum", () => {
    expect(pathSum(build([1]), 1)).toEqual(1)
    expect(pathSum(build([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8)).toEqual(3)
    expect(pathSum(build([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)).toEqual(3)

    // there's subtle nuance here, where if you use Set, this will return only 3 paths
    //            1
    //        -2          -3
    //    1      3     -2    null
    // -1
    //
    // -1+1 = 0, -2+0 == -2, and so does -2
    // if we use only set here, the -2+1-1 path won't be recorded
    expect(pathSum(build([1, -2, -3, 1, 3, -2, null, -1]), -1)).toEqual(4)
  })
})