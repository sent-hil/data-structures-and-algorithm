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

module.exports = Node;
