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

  getNodes() {
    let [accum, n] = [[this.value], this];

    while (n.next !== null) {
      n = n.next;
      accum.push(n.value);
    }

    return accum;
  }
}

const reverse = (node) => {
  let prev = null;
  while (node !== null) {
    next = node.next;

    node.next = prev;
    prev = node;

    node = next;
  }

  return prev;
};

describe("SingleNode", () => {
  it("builds linked list", () => {
    let n = new SingleNode(1);
    n.appendToTail(2);
    n.appendToTail(3);
    n.appendToTail(4);
    expect(n.getNodes()).toEqual([1, 2, 3, 4]);
  });

  it("remove node from linked list", () => {
    let n = new SingleNode(1);
    n.appendToTail(2);
    n.appendToTail(3);
    n.appendToTail(4);
    k = n.deleteNode(n, 3);
    expect(k.getNodes()).toEqual([1, 2, 4]);
  });

  it("reverses linked list", () => {
    let n = new SingleNode(1);
    n.appendToTail(2);
    n.appendToTail(3);
    n.appendToTail(4);
    expect(reverse(n).getNodes()).toEqual([4, 3, 2, 1]);
  });
});

module.exports = SingleNode;
