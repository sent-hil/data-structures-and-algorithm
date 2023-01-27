class SingleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  appendToTail(value) {
    let n = this;
    while (n.next !== null) {
      n = n.next;
    }

    n.next = new SingleNode(value);
  }

  deleteNode(head, value) {
    if (head.value === value) return head.next;
    let n = head;
    while (n.next !== null) {
      if (n.next.value === value) n.next = n.next.next;
      n = n.next;
    }

    return head;
  }
}

//let n = new SingleNode(1);
//n.appendToTail(2);
//n.appendToTail(3);
//n.appendToTail(4);
//console.log(n);
//
//console.log(n.deleteNode(n, 3));

module.exports = SingleNode;
