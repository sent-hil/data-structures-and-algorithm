// Implement Hash in using only Array and LinkedList.
const Node = require('./linkedList')

class Hash {
  constructor() {
    // initialize sized 4, empty array; 4 is a random number
    this.values = Array(4).fill(null);
  }

  get(key) {
    let cur = this.values[this.hashKey(key)];
    while (cur !== null) {
      if (cur.key === key) return cur.value;
    }

    return null;
  }

  set(key, value) {
    let node = new Node(key, value);

    let cur = this.values[this.hashKey(key)];
    if (cur !== null) {
      this.values[i] = node;
      node.append(cur);
    } else {
      this.values = node;
    }
  }

  hashKey(key) {
    return key.toString().length % this.values.size;
  }
}
