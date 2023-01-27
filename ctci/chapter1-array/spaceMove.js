function spaceMove(str) {
  // convert string to arry since js doesn't have str edit in place
  let strArr = new Array(str.length);
  for (i = 0; i < str.length; i++) {
    strArr[i] = str[i];
  }

  // find first non empty char, by finding first empty and assume index before
  // that is non empty
  let p1 = strArr.indexOf(" ") - 1;

  let p2 = strArr.length - 1;

  while (p1 >= 0) {
    [strArr[p1], strArr[p2]] = [strArr[p2], strArr[p1]];

    [p1, p2] = [p1 - 1, p2 - 1];
  }

  newStr = "";
  strArr.map((s) => (newStr += s));

  return newStr;
}

console.log(spaceMove("a ")); // ' a'
console.log(spaceMove("abc ")); // ' abc'

// doesn't work with space in between characters
console.log(spaceMove("ab c ")); // 'c  ab'
