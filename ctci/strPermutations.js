const permutation = (str) => {
  if (str.length <= 1) return [str];

  let results = permutation(str.substring(1));
  let output = [];


  for (const item of results) {
    for (let s = 0; s < str.length; s++) {
      output.push(
        item.substring(0, s) + str[0] + item.substring(s, s.length)
      );
    }
  }

  return output;
}

// permutation1 returns Array of String representing all the permutations of
// given String.
//
// It iterates by 1 char, call permutation on combined string except current char
// then add the current char to the permutation results in front
//
// Example: abc
//    * on first iteration, we get permutation of bc which is bc and cb
//      then we add a to front like abc and acb.
//    * on second iteration, we get permutation of ac which is ac and ca
//      then we add b to front like bac and bca
//    * on second iteration, we get permutation of ab which is ab and ba
//      then we add c to front like cab and cba
const permutation1 = (str) => {
  if (str.length <= 1) return [str]
  if (str.length === 2) return [str[0] + str[1], str[1] + str[0]]

  const output = []

  for (let c = 0; c < str.length; c++) {
    // if past bounds, .substring returns ''
    const [prefix, suffix] = [str.substring(0, c), str.substring(c + 1)]
    const current = str[c]

    const perms = permutation1(prefix + suffix)

    for (const item of perms) {
      output.push(current + item)
    }
  }

  return output
}

describe("String Permutations", () => {
  it("returns all possible string permutations", () => {
    expect(permutation("a")).toEqual(['a'])
    expect(permutation("ab")).toEqual(['ab', 'ba'])
    expect(permutation("abc")).toEqual(['abc', 'bac', 'bca', 'acb', 'cab', 'cba'])
    expect(permutation("abcd").length).toEqual(24)
  })

  it("returns all possible string permutations using backtracking", () => {
    expect(permutation1("a")).toEqual(['a'])
    expect(permutation1("ab")).toEqual(['ab', 'ba'])
    expect(permutation1("abc")).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
    expect(permutation1("abcd").length).toEqual(24)
  })
})