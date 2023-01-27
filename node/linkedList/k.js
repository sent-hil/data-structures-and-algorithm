let SingleNode = require("./singleNode");

function findKth1(head, k) {
  let length = 0,
    n = head;

  // get length of linkedlist
  while (n != null) {
    length += 1;
    n = n.next;
  }

  n = head;
  let l1 = 0;

  // stop when we get to kth element from end
  while (n != null) {
    if (length - l1 - 1 === k) return n.value;

    n = n.next;
    l1 += 1;
  }
}

let n1 = new SingleNode(1);
n1.appendToTail(2);
n1.appendToTail(3);
n1.appendToTail(4);
n1.appendToTail(5);

//console.log(findKth1(n1, 6));

function findKth2(head, k) {
  let p1 = head;

  // set p2 at k elements ahead of p1
  let p2 = head;
  for (i = 0; i < k; i++) {
    p2 = p2.next;
  }

  while (p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1.value;
}

console.log(findKth2(n1, 1));
