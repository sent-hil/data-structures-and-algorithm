function findDuplicate(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] == arr[j]) {
        return arr[i];
      }
    }
  }

  return null;
}

console.log(findDuplicate([1])); // null
console.log(findDuplicate([1, 2, 3])); // null
console.log(findDuplicate([1, 2, 3, 2])); // 2
