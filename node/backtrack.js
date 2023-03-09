// generatePowerBits returns an Array that represents all combinations for
// given number of bits.
//
// Example:
//    generatePowerBits(1) => [[0], [1]]
//    generatePowerBits(2) => [[0, 0], [1, 0], [0, 1], [1, 0]]
const generatePowerBits = (n) => {
  if (n === 1) return [[0], [1]]

  const results = generatePowerBits(n - 1)
  const output = []

  for (const r of results) {
    output.push([0, ...r])
    output.push([1, ...r])
  }

  return output
}

// powerSet returns all possible Array with all possible sets of given string.
const powerSet = (str) => {
  const sArr = str.split('')

  // bits represents various bit combinations where 1 indicates that char
  // should be turned on at position i
  const bits = generatePowerBits(sArr.length)

  const output = []
  for (const b of bits) {
    const subArray = []

    for (const [i, value] of b.entries()) {
      // indicates bit is turned on and we should replace with sArr[i]
      if (value === 1) subArray.push(sArr[i])
    }

    output.push(subArray.join(''))
  }

  return output
}

// generatePowerBits1 returns an Array that represents all combinations for
// given number of bits. It's same as generatePowerBits, but uses backtracking
// to generate the bits.
//
// This can be thought of as starting tree at 0 and setting left child to 0 and
// right to 1, till we reach height of n. Then we return the results.
//
// Even thought we use a common arr and modify that, since we use recursion, the
// values when do copy are accurate since it's DFS.
const generatePowerBits1 = (n) => {
  const output = []
  const arr = Array(n).fill(0)

  const generate = (i) => {
    // use copy arr or it'll be clobbered by other calls
    if (i === n) return output.push([...arr])

    arr[i] = 0
    generate(i + 1)

    arr[i] = 1
    generate(i + 1)
  }

  generate(0)

  return output
}

describe("Backtrack", () => {
  it("generates bits that correspond to powerset for various given n", () => {
    expect(generatePowerBits(1)).toEqual([[0], [1]])
    expect(generatePowerBits(2)).toEqual([[0, 0], [1, 0], [0, 1], [1, 1]])
  })

  it("generates bits that correspond to powerset for various given n using back track", () => {
    expect(generatePowerBits1(1)).toEqual([[0], [1]])
    expect(generatePowerBits1(2)).toEqual([[0, 0], [0, 1], [1, 0], [1, 1]])
  })

  it("generates power set for given set", () => {
    expect(powerSet('A')).toEqual(['', 'A'])
    expect(powerSet('AB')).toEqual(['', 'A', 'B', 'AB'])
    expect(powerSet('ABC')).toEqual(['', 'A', 'B', 'AB', 'C', 'AC', 'BC', 'ABC'])
  })
})
