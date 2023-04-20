const subSets = (arr) => {
  const results = []

  for (const item of arr) {
    const members = [...results]

    for (const s_item of members) {
      if (s_item !== null) results.push(item + s_item)
    }

    results.push(item)
  }

  return results
}

module.exports = { subSets }

describe("Set", () => {
  it("adds subsets", () => {
    expect(subSets([1])).toEqual([1])
    expect(subSets([1, 2]).sort()).toEqual([1, 2, 3].sort())
    expect(subSets([1, 2, 3]).sort()).toEqual([1, 2, 3, 3, 4, 5, 6].sort())
  })
})