function permutation(str) {
  if (str.length <= 1) return [str];
  else {
    let results = permutation(str.substring(1));
    let output = [];
    for (i = 0; i < results.length; i++) {
      for (s = 0; s < str.length; s++) {
        output.push(
          [
            results[i].substring(0, s),
            str[0],
            results[i].substring(s, s.length),
          ].join("")
        );
      }
    }

    return output;
  }
}

console.log(permutation("a")); // a
console.log(permutation("ab")); // ab ba a b
console.log(permutation("abc")); // ab ba a b
console.log(permutation("abcd")); // ab ba a b
