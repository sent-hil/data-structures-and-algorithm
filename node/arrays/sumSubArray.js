// sumSubArray returns sum of sliding windows of k in given Array.
// This is the naive version and doesn't use sliding windows technique.
//
// Example:
//    sumSubArray([1,2,3,4,5,6], 2)
//    => ∑ [1,2,3] + [2,3,4] + ... [4,5,6] => 42
const sumSubArray = (arr, k) => {
  let sum = 0

  for (let i = 0; i < arr.length - k + 1; i++) { // i = 0; i < (6 - 3 + 1) or 4 => [0,1,2,3]
    let lSum = 0
    for (let j = 0; j < k; j++) {
      lSum += arr[i + j]
    }

    sum += lSum
  }

  return sum
}

// fixedSlidingWindow uses sliding window technique to return sum of k in a
// given Array
//
// Example:
//    fixedSlidingWindow([1,2,3,4,5,6], 2)
//    => ∑ [1,2,3] + [2,3,4] + ... [4,5,6] => 42
const fixedSlidingWindow = (arr, k) => {
  // example arr = [1,2,3,4,5,6], k = 3
  let initial = 0
  for (let i = 0; i < k; i++) { // i = 0, i < 3 => [0,1,2]
    initial += arr[i] // 1+2+3 = 6
  }

  let sum = initial // 6
  for (let i = 1; i < arr.length - k + 1; i++) { // i = 1, i < 4 => [1,2,3]
    initial = initial - arr[i - 1] + arr[i + k - 1] // 6 - arr[0] + arr[3]
    sum += initial
  }

  return sum
}

const _sum = (arr) => {
  return arr.reduce((acc, v) => acc + v)
}

// minSumSubArray uses sliding window to return minimium size of Array whose
// sum is greater or equal to given sum.
//
// Example:
//    minSumSubArray([1,2,3,4], 7) => [3,4] => 2 length
const minSumSubArray = (arr, sum) => {
  let arrSum = 0
  let [i, j] = [0, 0]
  let len = Infinity

  // example: [1,2,3,4,5,6]
  while (j < arr.length) { // j = 0, j < 6 => [0,1,2,3,4,5]
    // move j to right, till we find subarray whose sum is >= to given sum
    while (arrSum < sum) {
      j++
      arrSum = _sum(arr.slice(i, j)) // arr.slice(0, 1) => [1], sum = 1 ... arr.slice(0, 4), sum = [1,2,3,4] => 10
    }

    while (arrSum >= sum) {
      // set len to global minimum
      len = Math.min(len, j - i)

      // move right and see if sum is >= given sum
      i++ // i = 1; j = 3, len = 4; i = 2, j = 3, len = 3
      arrSum = _sum(arr.slice(i, j)) // arr.slice(1,4) => [2,3,4] ... arr.slice(3,4) => [4] => false
    }
  }

  return len
}

// kadane returns the maximum sum possible in subarray in given Array.
//
// Example:
//    kadane([1,-3,2,1-1]) => [2,1] => 3
const kadane = (arr) => {
  let [local, global] = [0, -Infinity]

  for (let i = 0; i < arr.length; i++) {
    local = Math.max(arr[i], arr[i] + local)
    global = Math.max(local, global)
  }

  return global
}

describe("Array", () => {
  it("returns sum of k subarrays where k = 3", () => {
    expect(sumSubArray([1, 2, 3, 4, 5, 6], 3)).toEqual(42)
  })

  it("returns sum of k subarrays where k = 3", () => {
    expect(fixedSlidingWindow([1, 2, 3, 4, 5, 6], 3)).toEqual(42)
  })

  it("returns sum of array", () => {
    expect(_sum([1, 2, 3])).toEqual(6)
  })

  it("returns minimum size of subarray whose sum is 7", () => {
    expect(minSumSubArray([1, 2, 3, 4, 5, 6], 7)).toEqual(2)
  })

  it("returns maximum sum of subarray", () => {
    expect(kadane([1, -3, 2, 1, -1])).toEqual(3)
    expect(kadane([1, -3, 2, 1, -1, 2])).toEqual(4)
    expect(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
  })
})