class ThreeStackArrayNoEmpty {
  constructor() {
    this.pointers = [0, 0, 0];
    this.values = [];
  }

  push(item, i) {
    this.values = [
      this.values.slice(0, this.pointers[i]),
      item,
      this.values.slice(this.pointers[i]),
    ].flat();

    for (let n = i; n < 3; n++) {
      this.pointers[n] += 1;
    }
  }

  pop(i) {
    if (this.pointers[i] === 0) throw new Error("Empty");

    // if this stack pointer is same as previous, it means it's empty
    // only check for i != 0, since i = 0 is the first stack
    if (i !== 0 && this.pointers[i] - this.pointers[i - 1] === 0)
      throw new Error("Empty");

    // -1 since this.pointers represent the next location, since we are
    // deleting, we need to look once back
    let val = this.values[this.pointers[i] - 1];

    // remove the item at i
    this.values = [
      this.values.slice(0, this.pointers[i] - 1),
      this.values.slice(this.pointers[i]),
    ].flat();

    for (let n = i; n < 3; n++) {
      this.pointers[n] -= 1;
    }

    return val;
  }
}

describe("ThreeStackArray", () => {
  let a = null

  beforeEach(() => {
    a = new ThreeStackArrayNoEmpty();
    a.push(1, 0);
    a.push(2, 0);
    a.push("A", 1);
    a.push(3, 0);
    a.push("A1", 2);
    a.push("A2", 2);
  })

  it("pushes", () => {
    expect(a.pointers).toEqual([3, 4, 6])
    expect(a.values).toEqual([1, 2, 3, 'A', 'A1', 'A2'])
  })

  it("pops", () => {
    expect(a.pop(2), a).toEqual('A2');
    expect(a.pop(2), a).toEqual('A1');
    expect(a.pop(0), a).toEqual(3);
    expect(a.pop(1), a).toEqual('A');
  })
})
