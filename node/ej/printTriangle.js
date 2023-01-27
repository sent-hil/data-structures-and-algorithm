// Write loop that makes 7 calls to console.log to output the following

// #
// ##
// ###
// ####
// ...

for (i = 1; i <= 7; i++) {
  let s = "";
  for (j = 0; j < i; j++) {
    s += "#";
  }
  console.log(`${s}`);
}

// What's the BigO here? N ^ 2
