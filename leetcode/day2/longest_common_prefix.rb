# slidings returns Array of increasing sliding window of given String.
#
# Example:
#   slidings("abc") => ['a', 'ab', 'abc']
def slidings(str)
  output = []
  1.upto(str.length) do |i|
    output.push(str.slice(...i))
  end

  output
end

# longest_common_prefix returns String, the longest common prefix among given
# Array of Strings. Returns "" if no prefix is common to the Array of Strings.
#
# Example:
#   longest_common_prefix(["flower","flow","flight"]) => "fl"
def longest_common_prefix(strArr)
  # find smallest length string
  smallest = strArr[0]
  strArr.each {|s| smallest = s if s.size < smallest.size }

  # find all possible prefix of smallest string
  sliding_smallest = slidings(smallest)

  # iterate from backwards, looking for s that's in all strArr
  sliding_smallest.reverse_each do |s|
    possible = true
    strArr.each do |str|
      possible = false if str.slice(...s.length) != s
    end

    return s if possible
  end

  ""
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

  it "returns slidings of string" do
    expect(slidings("a")).to eq(["a"])
    expect(slidings("ab")).to eq(["a", "ab"])
    expect(slidings("abc")).to eq(["a", "ab", "abc"])
  end
end