// inserts adds given value to given heapArr and returns an array that
// satisfies the min heap invariant.
const insert = (heapArr, value) => {
  heapArr.push(value)

  // heapArr.length-1 points to the newly added value which is what is
  // out of place
  return swim(heapArr, heapArr.length - 1)
}

// swim pushes the node up till it's in the right position in given heapArr.
const swim = (heapArr, node) => {
  let parentI = Math.floor((node - 1) / 2)

  while (parentI >= 0 && heapArr[parentI] > heapArr[node]) {
    [heapArr[parentI], heapArr[node]] = [heapArr[node], heapArr[parentI]]

    node = parentI
    parentI = Math.floor((node - 1) / 2)
  }

  return heapArr
}

// poll returns the first entry from given heapApp and ensure the result
// array still satisfies the min heap variant.
const poll = (heapArr) => {
  const returnValue = heapArr[0]

  heapArr[0] = heapArr[heapArr.length - 1]
  heapArr.pop()

  heapArr = sink(heapArr, 0)

  return [returnValue, heapArr]
}

// sinks pushes down the given node in the heapArr till it satisifes the min
// heap variant.
const sink = (heapArr, node) => {
  const lastI = heapArr.length - 1

  while (true) {
    let [left, right] = [[node * 2 + 1], [node * 2 + 2]]

    // assume left child is smallest
    // also since it's balanced binary tree, entries will always be
    // added to left first
    let smallest = left

    // left is already out of bounds, no need to check for right
    if (left > lastI) break

    // switch to right, if it exists && its value smaller than left
    // this also implies that if left and right nodes are equal,
    // we'll use left node
    if (right < lastI && heapArr[right] < heapArr[left]) {
      smallest = right
    }

    // stop if can't sink anymore, ie node is in the right place
    if (heapArr[node] < heapArr[smallest]) break

    [heapArr[smallest], heapArr[node]] = [heapArr[node], heapArr[smallest]]
    node = smallest
  }

  return heapArr
}

describe("Heap", () => {
  it("Inserts value into Heap and returns new Heap", () => {
    expect(insert([], 0)).toEqual([0])
    expect(insert([0], 1)).toEqual([0, 1])
    expect(insert([1], 0)).toEqual([0, 1])
    expect(insert([1, 2, 3, 4], 0)).toEqual([0, 1, 3, 4, 2])
    expect(insert([1, 2, 3, 4], 1)).toEqual([1, 1, 3, 4, 2])
    expect(insert([5, 6, 12, 8, 7, 14, 19, 13, 12, 11], 1)).toEqual([1, 5, 12, 8, 6, 14, 19, 13, 12, 11, 7])
  })

  it("Pops last value from Heap, also returns new Heap", () => {
    expect(poll([])).toEqual([undefined, []])
    expect(poll([0])).toEqual([0, []])
    expect(poll([0, 1])).toEqual([0, [1]])
    expect(poll([1, 2, 3, 4])).toEqual([1, [2, 4, 3]])
    expect(poll([1, 5, 1, 8, 6, 2, 2, 13, 12, 11, 7, 2, 15, 3, 10])).toEqual([1, [1, 5, 2, 8, 6, 2, 2, 13, 12, 11, 7, 10, 15, 3]])
  })
})
