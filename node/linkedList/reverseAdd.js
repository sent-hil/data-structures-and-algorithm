let SingleNode = require("./singleNode");

let n1 = new SingleNode(6);
n1.appendToTail(1);
n1.appendToTail(7);

let n2 = new SingleNode(2);
n2.appendToTail(9);
n2.appendToTail(5);

function reverseAdd(l1, l2) {
  let findNValue = (l) => {
    let o = l,
      accum = 0;

    while (o !== null) {
      accum = accum * 10 + o.value;
      o = o.next;
    }

    return accum;
  };

  return findNValue(l1) + findNValue(l2);
}

console.log(reverseAdd(n1, n2));
