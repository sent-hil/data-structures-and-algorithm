function fizzBuzz(max) {
  // start from 1, iterate to max
  // if cur is divisible 3, print fizz, cur divisible by 5, print buzz
  // if cur is divisible by 3 and 5, print fizz buzz

  for (i = 1; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(`${i} fizzbuzz`);
    else if (i % 5 === 0) console.log(`${i} buzz`);
    else if (i % 3 === 0) console.log(`${i} fizz`);
  }
}

fizzBuzz(100);
