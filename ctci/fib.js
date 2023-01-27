function fib(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fib(n - 1) + fib(n - 2);
}

// Big(2 ^ N) since for each increase in N, you're doing exponential more work.

for (i = 0; i < 8; i++) {
  console.log(i, fib(i));
}
