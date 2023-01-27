// Node for LinkedList
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }

  append(node) {
    this.next = node;
  }
}

let node1 = new Node(1, "A");
let node2 = new Node(2, "B");
let node3 = new Node(3, "C");

node1.append(node2);
node2.append(node3);

let cur = node1;
while (cur !== null) {
  console.log(cur.key, cur.value);
  cur = cur.next;
}

module.exports = Node;
