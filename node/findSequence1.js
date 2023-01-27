function findSequence(goal) {
  function find(start, history) {
    if (start === goal) return history;
    else if (start > goal) return null;
    else
      return (
        find(start + 5, `( ${history} + 5 )`) ||
        find(start * 3, `( ${history} * 3 )`)
      );
  }

  return find(1, "1");
}

console.log(findSequence(3)); //  ( 1 * 3)
console.log(findSequence(6)); //  ( 1 + 5)
console.log(findSequence(18)); // ( ( 1 + 5 ) * 3 )
console.log(findSequence(24)); // ( ( ( 1 * 3 ) + 5 ) * 3 ) )
