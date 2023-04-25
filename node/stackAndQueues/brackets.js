const matchingPairs = {
  '}': '{',
  ']': '[',
  ')': '(',
}

// isValid returns Boolean to indicate if given string has properly matched
// brackets.
const isValid = (inputStr) => {
  const input = inputStr.split('')
  const stack = []

  const isOpening = (char) => {
    return Object.values(matchingPairs).includes(char)
  }

  for (const item of input) {
    if (isOpening(item)) stack.push(item)
    else {
      const p = stack.pop()
      if (p !== matchingPairs[item]) return false
    }
  }

  return true
}

describe("Stacks", () => {
  it("should return true if valid", () => {
    expect(isValid('[{}]')).toEqual(true)
    expect(isValid('(()())')).toEqual(true)
    expect(isValid('[]{}({})')).toEqual(true)
  })

  it("should return false if not valid", () => {
    expect(isValid('{]')).toEqual(false)
    expect(isValid('[()]))()')).toEqual(false)
  })
})
