// Given two integer arrays pushed and popped each with distinct values, return
// true if this could have been the result of a sequence of push and pop
// operations on an initially empty stack, or false otherwise.
//
// Example:
//    validateStackSequences([1,2,3,4,5], [4,5,3,2,1]) => true
//    validateStackSequences([1,2,3,4,5], [4,3,5,1,2]) => false
const validateStackSequences = (pushed, popped) => {
  const stack = []
  let i = 0

  for (const n of pushed) {
    stack.push(n)

    while (stack[stack.length - 1] === popped[i] && stack.length) {
      stack.pop()
      i++
    }
  }

  return stack.length === 0 && i === popped.length
}

describe("Stack", () => {
  it("returns if there's valid pushed, popped sequence", () => {
    expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toEqual(true)
    expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2])).toEqual(false)
    expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1, 2])).toEqual(false)
    expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toEqual(false)
  })
})