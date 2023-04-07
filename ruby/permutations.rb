def permutations(str)
  return [str] if str.length <= 1
  return [str[0]+str[1], str[1]+str[0]] if str.length == 2

  output = []

  str.length.times do |i|
    current = str.slice(i)

    # if out of bounds return ""
    prefix = i - 1 >= 0 ? str.slice(..i-1) : ""
    suffix = str.slice(i+1..) || ""

    perms = permutations(prefix+suffix)
    perms.each { |p| output.push(current+p) }
  end

  output
end

describe "String" do
  it "returns all permutations of given string" do
    expect(permutations("a")).to eq(["a"])
    expect(permutations("ab")).to eq(["ab", "ba"])
    expect(permutations("abc")).to eq(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
  end
end