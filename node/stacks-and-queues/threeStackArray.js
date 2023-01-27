class ThreeStackArray {
  constructor() {
    this.arr = new Array(null, null, null);
  }

  push(item, i) {
    let nullCount = 0;

    for (let n = 0; n < this.arr.length; n++) {
      if ((this.arr[n] === null) & (nullCount === i)) {
        this.arr = [
          this.arr.slice(0, Math.max(0, n)),
          item,
          null,
          this.arr.slice(n + 1),
        ].flat();

        break;
      }

      if (this.arr[n] === null) {
        nullCount += 1;
      }
    }

    console.log();
  }
}

let a = new ThreeStackArray();
a.push(1, 0);
a.push(2, 0);
a.push("A", 1);
a.push(3, 0);
a.push("A1", 2);
a.push("A2", 2);
console.log(a);
