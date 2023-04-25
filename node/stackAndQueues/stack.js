const SingleNode = require("../linkedList/singleNode");

class Stack {
  constructor() {
    this.list = null;
  }

  pop() {
    if (this.list === null) throw new Error("empty stack");

    let value = this.list.value;
    this.list = this.list.next;

    return value;
  }

  push(item) {
    let oldNode = this.list;
    let newNode = new SingleNode(item);
    this.list = newNode;

    // set new node to point to last node
    if (oldNode !== null) newNode.next = oldNode;
  }

  peek() {
    return this.list.value;
  }

  isEmpty() {
    return this.list === null;
  }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log("STACK: ", s);
console.log("PEEK:", s.peek());

while (!s.isEmpty()) {
  console.log(s.pop());
}
