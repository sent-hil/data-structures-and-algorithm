function removeFromArray(arr, i) {
  // Since arr.slice(-1+1) == arr.slice(0) which returns the entire array.
  if (i == -1) {
    return [arr.slice(0, i)].flat();
  }

  return [arr.slice(0, i), arr.slice(i + 1)].flat();
}

let b = [1, 2, 3, 4, 5];
console.log(removeFromArray(b, 0)); // [2,3,4,5]

console.log(removeFromArray(b, -1)); // [1,2,3,4]
console.log(removeFromArray(b, -2)); // [1,2,3,4]
console.log(removeFromArray(b, -6)); // [1,2,3,4]
