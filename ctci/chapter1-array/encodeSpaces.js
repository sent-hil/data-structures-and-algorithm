// Replace ' ' with %20
function encodeSpace(str) {
  // convert string to arry since js doesn't have str edit in place
  let strArr = new Array(str.length);
  for (i = 0; i < str.length; i++) {
    strArr[i] = str[i];
  }

  let p1 = strArr.length - 1;
  let p2 = 0;

  // find the first non space character
  for (i = strArr.length - 1; i > 0; i--) {
    if (strArr[i] !== " ") {
      p2 = i;
      break;
    }
  }

  // 'A B  '
  //    1 2

  while (p1 >= 0) {
    if (strArr[p1] != " ") {
      console.log(strArr[p2], strArr[p1]);

      strArr[p2] = strArr[p1];
      strArr[p1] = strArr[p2];
      p2 -= 1;
    } else {
      //[strArr[p2 - 2], strArr[p2 - 1], strArr[p2]] = ["%", "2", "0"];
      //p2 -= 2;
    }

    p1 -= 1;
  }

  let newStr = "";
  strArr.map((s) => (newStr += s));

  return newStr;
}

// Set p1 & p2 at end of string
// While p1 != 0
//  Move p1, till you find char
//    Then set strArr[p2] = strArr[p1]
//    Set p2-1, p1-1
console.log(encodeSpace("A B  ")); // 'John%20Doe'
