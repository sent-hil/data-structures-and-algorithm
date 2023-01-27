const radix = (numbers) => {
  // figure out which item in numbers is highest, it's positional size is how
  // many times the sorting action will run
  //
  // ie: if highest value in numbers 100, it'll run 3 times
  let highest = -Infinity;
  for (let num of numbers) {
    if (num > highest) highest = num;
  }
  let highestLen = String(highest).length;

  for (let h = 0; h < highestLen; h++) {
    let posArr = [...Array(9)].map(() => []);

    for (let num of numbers) {
      let s = String(num);
      let pos = Number(s[s.length - 1 - h]);
      if (pos !== pos) pos = 0; // fucking js, NaN !== NaN, so we can actually check for it

      posArr[pos].push(num);
    }

    let newArr = [];
    for (let pArr of posArr) {
      if (pArr.length !== 0) newArr.push(...pArr);
    }

    numbers = newArr;
  }

  return numbers;
};

describe("", () => {
  it("", () => {
    expect(radix([])).toEqual([]);
    expect(radix([1])).toEqual([1]);
    expect(radix([2, 1])).toEqual([1, 2]);
    expect(radix([3, 200, 2, 11])).toEqual([2, 3, 11, 200]);
  });
});
