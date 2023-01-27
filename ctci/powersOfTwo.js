function powersOfTwo(n) {
  let start = 1;

  for (i = 0; i <= n; i++) {
    console.log(i, start);
    start = start * 2;
  }

  console.log();
}

powersOfTwo(0);
powersOfTwo(1);
powersOfTwo(2);
powersOfTwo(3);
