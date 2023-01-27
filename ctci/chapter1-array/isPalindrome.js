function isPalindrome(str) {
  // iterate from each end of str, don't care about middle, since it can still
  // be a palindrome
  for (i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("ab")); // false
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("abcba")); // true
console.log(isPalindrome("abcde")); // false
