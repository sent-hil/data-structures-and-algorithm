//isPrime returns Boolean to indicate if given n is a prime number or not.
const isPrime = (n) => {
  if (n <= 3) return true

  // iterate from 2 till n/2, only n/2 since there can't be a factor
  // higher than n/2 for n
  //
  // anything % 1 is 0, so we start from 2
  //
  // i<=n needs to be <= for n = 2, if not loop will never run
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) { return false }
  }

  return true
}

// primeAdders return an Array of prime numbers that adds to n.
const primeAdders = (n) => {
  if (n <= 1) return [1]

  for (let j = n - 1; j > 0; j--) {
    if (isPrime(j)) {
      let r = n - j
      let s = primeAdders(r)

      return [j, ...s]
    }
  }
}

describe("Primes", () => {
  describe("isPrime", () => {
    it("return true if prime", () => {
      expect(isPrime(1)).toEqual(true)
      expect(isPrime(5)).toEqual(true)
      expect(isPrime(11)).toEqual(true)
      expect(isPrime(17)).toEqual(true)
    })

    it("returns false if not prime", () => {
      expect(isPrime(4)).toEqual(false)
      expect(isPrime(6)).toEqual(false)
      expect(isPrime(10)).toEqual(false)
    })
  })

  describe("primeAdders", () => {
    it("returns prime adders", () => {
      expect(primeAdders(1)).toEqual([1])
      expect(primeAdders(2)).toEqual([1, 1])
      expect(primeAdders(3)).toEqual([2, 1])
      expect(primeAdders(4)).toEqual([3, 1])
      expect(primeAdders(17)).toEqual([13, 3, 1])
    })
  })
})
