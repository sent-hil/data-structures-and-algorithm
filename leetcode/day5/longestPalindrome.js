const longestPalindrome = (words) => {
  const all = {}
  for (const w of words) {
    all[w] ||= 0
    all[w]++
  }

  let [counter, special] = [0, 0]
  const done = {}

  for (const [w, count] of Object.entries(all)) {
    if (typeof done[w] !== 'undefined') continue

    const aw = w.slice(1) + w.slice(0, 1)
    if (w === aw) {
      if (count % 2 !== 0) {
        special = true
        counter += (count - 1) * 2
      } else counter += count * 2
      continue
    }

    const altCount = all[aw]
    if (typeof altCount === 'undefined' || altCount === 0) continue

    counter += Math.min(count, altCount) * 4
    done[aw] = true
  }

  if (special) return counter + 2

  return counter
}

describe("Leetcode Day 5", () => {
  it("returns length of longest palindrome possible in given arr", () => {
    expect(longestPalindrome(["bb", "bb"])).toEqual(4)
    expect(longestPalindrome(["lc", "cl", "gg"])).toEqual(6)
    expect(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"])).toEqual(8)
    expect(longestPalindrome(["cc", "ll", "xx"])).toEqual(2)
    expect(longestPalindrome(["ab", "bc", "de"])).toEqual(0)
    expect(longestPalindrome(["ll", "lb", "bb", "bx", "xx", "lx", "xx", "lx", "ll", "xb", "bx", "lb", "bb", "lb", "bl", "bb", "bx", "xl", "lb", "xx"])).toEqual(26)
    expect(longestPalindrome(["dd", "aa", "bb", "dd", "aa", "dd", "bb", "dd", "aa", "cc", "bb", "cc", "dd", "cc"])).toEqual(22)
    expect(longestPalindrome(["qo", "fo", "fq", "qf", "fo", "ff", "qq", "qf", "of", "of", "oo", "of", "of", "qf", "qf", "of"])).toEqual(14)
    expect(longestPalindrome(["mt", "lt", "tt", "lt", "tm", "lm", "ml", "mt", "tl", "mm", "lt", "tt", "mt", "ml", "tt", "tl", "tl", "mm", "tm", "ll", "ml", "lt", "ll", "ml", "tl", "ll", "tt", "tl", "lm", "ll", "mt", "tl", "tt", "lt", "tm", "tm", "mt", "tl", "lm", "tt", "lt", "lt", "ml", "lt", "tl", "mm", "lt", "ll", "ll", "tm", "lm", "tm", "mt", "tm", "tt", "tl", "ml", "tt", "ml", "mt", "tm", "tm", "mt", "mm"])).toEqual(120)
  })
})