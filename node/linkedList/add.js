let SingleNode = require("./singleNode");

let n1 = new SingleNode(7);
n1.appendToTail(1);
n1.appendToTail(6);

let n2 = new SingleNode(5);
n2.appendToTail(9);
n2.appendToTail(2);

function add(l1, l2) {
  let findNValue = (l) => {
    let o = l;
    let accum = 0;
    let v = 1;

    while (o != null) {
      accum += o.value * v;
      v *= 10;
      o = o.next;
    }

    return accum;
  };

  return findNValue(l1) + findNValue(l2);
}

console.log(add(n1, n2));
