def sliding(str)
  output = []

  return output unless str

  1.upto(str.length) do |i|
    output.push(str[0...i])
  end

  output
end

def longest_common_prefix(strArr)
  smallest = strArr[0]
  strArr.each {|s| smallest = s if s.size < smallest.size }

  sliding_smallest = sliding(smallest)

  result = ""

  sliding_smallest.each do |s|
    possible = true
    strArr.each do |str|
      possible = false if str[0...s.length] != s
    end

    result = s if possible
  end

  result
end

require "rspec"

describe "Longest Common Prefix" do
  it "returns longest common prefix" do
    expect(longest_common_prefix(["flower","flow","flight"])).to eq("fl")
    expect(longest_common_prefix(["dog","racecar","car"])).to eq("")
    expect(longest_common_prefix(["a"])).to eq("a")
    expect(longest_common_prefix(["ab", "a"])).to eq("a")
    expect(longest_common_prefix(["reflower","flow","flight"])).to eq("")
  end

  it "returns increasing sliding window of string" do
    expect(sliding("a")).to eq(["a"])
    expect(sliding("ab")).to eq(["a", "ab"])
    expect(sliding("abc")).to eq(["a", "ab", "abc"])
  end
end
