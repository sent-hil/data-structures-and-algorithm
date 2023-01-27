function power(base, exponent) {
  if (exponent > 0) {
    let result = base;
    for (i = 1; i < exponent; i++) {
      result = result * base;
    }
    return result;
  }

  if (exponent < 0) {
    let result = 1 / base;
    for (i = -1; i > exponent; i--) {
      result = result * (1 / base);
    }

    return result;
  }

  return 1;
}

for (i = -3; i <= 0; i++) {
  console.log(i, power(2, i));
}

function power1(base, exponent) {
  let result = 1;
  for (i = 0; i < exponent; i++) {
    result = result * base;
  }

  return result;
}

//for (i = 0; i <= 10; i++) {
//  console.log(i, power1(2, i));
//}
//console.log(power1(2, -1));
