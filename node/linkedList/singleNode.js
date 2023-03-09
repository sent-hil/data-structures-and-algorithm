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
    let [accum, n] = [[], this];

    while (n !== null) {
      accum.push(n.value);
      n = n.next;
    }

    return accum;
  }
}

const reverse = (node) => {
  let prev = null;
  while (node !== null) {
    let next = node.next;

    node.next = prev;
    prev = node;

    node = next;
  }

  return prev;
};

const reverse1 = (head) => {
  let cur = head;
  let prev = null;

  while (cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

const sumList = (node) => {
  let sum = 0;
  let cur = node;

  while (cur !== null) {
    sum += cur.value;
    cur = cur.next;
  }

  return sum;
};

const sumListRecursive = (node, sum = 0) => {
  if (node === null) return sum;
  sum += node.value;
  return sumListRecursive(node.next, sum);
};

const sumListRecursive1 = (node) => {
  if (node === null) return 0;
  return node.value + sumListRecursive1(node.next);
};

const find = (head, target) => {
  let cur = head;
  while (cur !== null) {
    if (cur.value === target) return true;
    cur = cur.next;
  }

  return false;
};

const findRecursive = (head, target) => {
  if (head === null) return false;
  if (head.value === target) return true;

  return findRecursive(head.next, target);
};

const indexRecursive = (head, index, cur = 0) => {
  if (head === null) return null;
  if (index === cur) return head.value;

  return indexRecursive(head.next, index, cur + 1);
};

// removes deletes node with given value if exists.
//
// Return false if given head is null.
// Returns the linked list without given value node otherwise.
const remove = (head, value) => {
  if (head === null) return false
  if (head.value === value) return head.next

  let n = head
  while (n.next !== null) {
    if (n.next.value === value) {
      n.next = n.next.next
    }
    n = n.next
  }

  return head
}

describe("SingleNode", () => {
  beforeEach(() => {
    this.subject = new SingleNode(1);
    this.subject.appendToTail(2);
    this.subject.appendToTail(3);
    this.subject.appendToTail(4);
  });

  it("builds linked list", () => {
    expect(this.subject.getNodes()).toEqual([1, 2, 3, 4]);
  });

  it("remove node from linked list", () => {
    k = this.subject.deleteNode(this.subject, 3);
    expect(k.getNodes()).toEqual([1, 2, 4]);
  });

  it("remove node from linked list", () => {
    expect(remove(this.subject, 3)).toEqual(this.subject);
    expect(this.subject.getNodes()).toEqual([1, 2, 4]);
  });

  it("reverses linked list", () => {
    expect(reverse(this.subject).getNodes()).toEqual([4, 3, 2, 1]);
  });

  it("sums list", () => {
    expect(sumList(this.subject)).toEqual(10);
  });

  it("sums list recursive", () => {
    expect(sumListRecursive(this.subject)).toEqual(10);
  });

  it("sums list recursive 1", () => {
    expect(sumListRecursive1(this.subject)).toEqual(10);
  });

  it("finds target", () => {
    expect(find(this.subject, 9)).toEqual(false);
    expect(find(this.subject, 3)).toEqual(true);
  });

  it("finds target recursive", () => {
    expect(findRecursive(this.subject, 9)).toEqual(false);
    expect(findRecursive(this.subject, 3)).toEqual(true);
  });

  it("returns value at index", () => {
    expect(indexRecursive(this.subject, 2)).toEqual(3);
  });

  it("reverses list in place", () => {
    expect(reverse1(this.subject).getNodes()).toEqual([4, 3, 2, 1]);
  });
});

module.exports = SingleNode;
