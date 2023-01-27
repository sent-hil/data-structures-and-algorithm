class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  appendToTail(value) {
    let n = this;
    while (n.next !== null) n = n.next;

    n.next = new DoubleNode(value);
    n.next.prev = n;
  }
}

function deleteNode(head, value) {
  if (head === null || typeof head === "undefined") {
    return null;
  }

  // head is the node we're looking for
  if (head.value === value) {
    // guard for only 1 node in linked list
    // if not, set it to new head
    if (head.next !== null) head.next.prev = null;

    return head.next;
  }

  let n = head;
  while (n.next !== null) {
    if (n.next.value === value) {
      n.next = n.next.next;
      if (n.next !== null) n.next.prev = n; // guard for node being at end of list
    }

    // since we skipped 1 node in l:34, if at end of this list, without this, it'll error
    if (n.next === null) {
      return n;
    }

    n = n.next;
  }

  return n;
}

const n = new DoubleNode(1);
n.appendToTail(2);
n.appendToTail(3);

let o = deleteNode(n, 3);
console.log(o);
