// Given positive integer, return binary representation in String.
const intToBinary = (n, strArr = [0]) => {
  if (n === 0) return strArr.join("");
  if (n === 1) {
    strArr[0] = 1;
    return strArr.reverse().join("");
  }

  let closest = Math.log2(n);
  if (strArr.length === 1) {
    strArr = new Array(Math.floor(closest) + 1).fill(0);
  }
  strArr[Math.floor(closest)] = 1;

  if (closest === Math.floor(closest)) {
    return strArr.reverse().join("");
  }

  closest = Math.floor(closest);
  let remainder = n - 2 ** closest;

  return intToBinary(remainder, strArr);
};

describe("", () => {
  it("intToBinary", () => {
    expect(intToBinary(0)).toEqual("0");
    expect(intToBinary(1)).toEqual("1");
    expect(intToBinary(2)).toEqual("10");
    expect(intToBinary(3)).toEqual("11");
    expect(intToBinary(4)).toEqual("100");
    expect(intToBinary(5)).toEqual("101");
    expect(intToBinary(6)).toEqual("110");
    expect(intToBinary(7)).toEqual("111");
    expect(intToBinary(8)).toEqual("1000");
    expect(intToBinary(9)).toEqual("1001");
  });
});
