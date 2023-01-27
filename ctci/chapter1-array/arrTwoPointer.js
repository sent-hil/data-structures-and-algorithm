function arrTwoPointer(arr) {
  for (i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (i == j) console.log(arr[i]);
    else console.log(arr[i], arr[j]);
  }

  console.log;
}

console.log(arrTwoPointer([1]));
console.log(arrTwoPointer([1, 2]));
console.log(arrTwoPointer([1, 2, 3]));
console.log(arrTwoPointer([1, 2, 3, 4, 5]));
