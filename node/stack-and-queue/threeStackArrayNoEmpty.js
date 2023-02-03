class ThreeStackArrayNoEmpty {
  constructor() {
    this.pointers = [0, 0, 0];
    this.arr = [];
  }

  push(item, i) {
    this.arr = [
      this.arr.slice(0, this.pointers[i]),
      item,
      this.arr.slice(this.pointers[i]),
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

    let val = this.arr[this.pointers[i] - 1];

    // remove the item at i
    this.arr = [
      this.arr.slice(0, this.pointers[i] - 1),
      this.arr.slice(this.pointers[i]),
    ].flat();

    for (let n = i; n < 3; n++) {
      this.pointers[n] -= 1;
    }

    return val;
  }
}

let a = new ThreeStackArrayNoEmpty();
a.push(1, 0);
a.push(2, 0);
a.push("A", 1);
a.push(3, 0);
a.push("A1", 2);
a.push("A2", 2);

console.log(a);

console.log(a.pop(2), a); // A2
console.log(a.pop(2), a); // A1

console.log(a.pop(0), a); // 3
console.log(a.pop(1), a); // A
