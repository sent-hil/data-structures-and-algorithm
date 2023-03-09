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


// Implement power as recursive function
function powerRecursive(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * powerRecursive(base, exponent - 1);
}
