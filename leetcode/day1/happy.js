// isHappy returns if a given Number is 'happy' as defined by
//    * Sum square of digits of Integer.
//    * If they ultimately end up in 1, then it's happy.
//
//  Example:
//    isHappy(19) => true
//      1^2 + 9^2 = 82
//      8^2 + 2^2 = 68
//      6^2 + 8^2 = 100
//      1^2 + 0^2 + 0^2 = 1
//
// https://leetcode.com/problems/happy-number/?envType=study-plan&id=level-2
const isHappy = (n) => {
  const calculated = new Set

  let sArr = String(n).split('')

  while (true) {
    let result = 0
    for (let i = 0; i < sArr.length; i++) {
      const n = Number(sArr[i])
      result += n ** 2
    }

    if (result === 1) return true
    if (calculated.has(result)) return false // loop detected

    calculated.add(result)
    sArr = String(result).split('') // start again with new result
  }
}

describe("LeetCode 75", () => {
  it("returns if number is 'happy' or not", () => {
    expect(isHappy(1)).toEqual(true)
    expect(isHappy(19)).toEqual(true)
    expect(isHappy(2)).toEqual(false)
  })
})