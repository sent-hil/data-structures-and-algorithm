  describe("Object Iteration", () => {
    const o = {A: 1}

    it("Iterates with Object.entries", () => {
      for (const [key, item] of Object.entries(o)) {
        expect(key).toEqual('A')
        expect(item).toEqual(1)
      }
    })

    it("Iterates with `in`", () => {
      for (const key in o) {
        expect(key).toEqual('A')
        expect(o[key]).toEqual(1)
      }
    })

    it("Iterates with Object.keys", () => {
      Object.keys(o).forEach((key) => {
        expect(key).toEqual('A')
        expect(o[key]).toEqual(1)
      })
    })
  })

  describe("Array iteration", () => {
    it("Iterates with `of`", () => {
      const arr = ['A']

      for (const item of arr) {
        expect(item).toEqual('A')
      }
    })

    it("Iterates with `in`", () => {
      const arr = ['A']

      for (const i in arr) {
        expect(arr[i]).toEqual('A')
      }
    })

    it("Iterates with Array#entries()", () => {
      const arr = ['A']

      for (const [i, item] in arr.entries()) {
        expect(i).toEqual(0)
        expect(item).toEqual('A')
      }
    })

    it("Iterates with for", () => {
      const arr = ['A']

      for (let i = 0; i < arr.length; i++) {
        expect(i).toEqual(0)
        expect(arr[i]).toEqual('A')
      }
    })

    it("Iterates with forEach", () => {
      const arr = ['A']
      arr.forEach((item, i) => {
        expect(i).toEqual(0)
        expect(item).toEqual('A')
      })
    })
  })
