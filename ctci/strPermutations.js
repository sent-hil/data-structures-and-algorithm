const permutation = (str) => {
  if (str.length <= 1) return [str];
  else {
    let results = permutation(str.substring(1));
    let output = [];

    for (const item of results) {
      for (let s = 0; s < str.length; s++) {
        output.push(
          [
            item.substring(0, s), str[0], item.substring(s, s.length)
          ].join("")
        );
      }
    }

    return output;
  }
}

const permutation1 = (str) => {
  const [output, arr] = [[], str.split('')]

  const permutate = (i) => {
    if (i === arr.length) output.push(arr.join(''))

    // swap the characters starting j with every subsequent char;
    // i is height of recursion stack, also indicates for which char you want
    // to branch off
    for (let j = i; j < arr.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      permutate(i + 1)
    }
  }

  permutate(0)

  return output
}

describe("String Permutations", () => {
  it("returns all possible string permutations", () => {
    expect(permutation("a")).toEqual(['a'])
    expect(permutation("ab")).toEqual(['ab', 'ba'])
    expect(permutation("abc")).toEqual(['abc', 'bac', 'bca', 'acb', 'cab', 'cba'])
  })

  it("returns all possible string permutations using backtracking", () => {
    //expect(permutation1("a")).toEqual(['a'])
    //expect(permutation1("ab")).toEqual(['ab', 'ba'])
    expect(permutation1("abc")).toEqual(['abc', 'acb', 'cab', 'cba', 'abc', 'acb'])
  })
})
