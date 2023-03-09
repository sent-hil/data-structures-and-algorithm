// Returns array of 3 letter possible strings.
//
// Example:
//    threeLetter('abcde') => ['abc', 'bcd', 'cde']
const threeLetter = (inputStr) => {
  const output = [];
  const input = inputStr.split("");

  for (let i = 0, j = 2; j < input.length; i++, j++) {
    output.push([input[i], input[i + 1], input[i + 2]].join(""));
  }

  return output;
};

// Same as threeLetter, but tries to cut down on item lookup by storing
// previously seen result.
//
// Example:
//    threeLetterStupidOptmization('abcde') => ['abc', 'bcd', 'cde']
const threeLetterStupidOptmization = (inputStr) => {
  const output = [];
  const input = inputStr.split("");

  let first = input[0];
  let middle = input[1];

  for (let i = 0, j = 2; j < input.length; i++, j++) {
    last = input[j];

    output.push([first, middle, last].join(""));

    first = middle;
    middle = last;
  }

  return output;
};

describe("threeLetter", () => {
  const input = "abcdefg";

  it("Returns array of three letter window of input string", () => {
    expect(threeLetter(input)).toEqual(["abc", "bcd", "cde", "def", "efg"]);
  });

  it("Returns array of three letter window of input string", () => {
    expect(threeLetterStupidOptmization(input)).toEqual([
      "abc",
      "bcd",
      "cde",
      "def",
      "efg",
    ]);
  });
});
