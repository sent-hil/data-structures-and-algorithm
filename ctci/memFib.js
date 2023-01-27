function memFib(n) {
  let mem = {};

  let fib = (x) => {
    if (x <= 1) return x;
    else {
      mem[x] ||= fib(x - 1) + fib(x - 2);
      return mem[x];
    }
  };

  return fib(n);
}

// O(n) work since you need to calculate fib only once for a number.

for (i = 0; i < 8; i++) {
  console.log(i, memFib(i));
}
