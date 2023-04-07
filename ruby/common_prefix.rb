def power_bits(n)
  bits_output = []
  bit_array = Array.new(n)

  _power_bits = -> (i) {
    return bits_output.push(bit_array.clone) if i == n

    bit_array[i] = 0
    _power_bits.call(i+1)

    bit_array[i] = 1
    _power_bits.call(i+1)
  }

  _power_bits.call(0)

  bits_output
end

def substrings(str)
  bits_arr = power_bits(str.size)
  bits_arr.inject([]) do |perms, bits|
    result = []
    bits.each_with_index do |bit, i|
      result.push(str[i]) if bit === 1
    end

    perms.push(result.join(''))
    perms
  end
end

def longest_common(strArr)
  # find the smallest string in the array
  smallest = strArr[0]
  strArr.each {|s| smallest = s if s.size < smallest.size }

  perms = substrings(smallest)

  perms.inject("") do |longest, p|
    possible = true

    # mark possible as false if not all strings in strArr contains substring
    strArr.each { |s| possible = false if !s.include?(p) }

    # if all strings in array has the string, it could be the longest
    longest = p if possible && p.size > longest.size
    longest
  end
end

require "rspec"

describe "Longest Common String" do
  it "returns different bit combinations for given n" do
    expect(power_bits(1)).to eq([[0], [1]])
    expect(power_bits(2)).to eq([[0,0], [0,1], [1,0], [1,1]])
  end

  it "returns all possible substrings of string" do
    expect(substrings('a')).to eq(['', 'a'])
    expect(substrings('ab')).to eq(['', 'b', 'a', 'ab'])
    expect(substrings('abc')).to eq(["", "c", "b", "bc", "a", "ac", "ab", "abc"])
  end

  it "returns longest common string" do
    expect(longest_common(["flower","flow","flight"])).to eq("fl")
    expect(longest_common(["dog","racecar","car"])).to eq("")
    expect(longest_common(["a"])).to eq("a")
    expect(longest_common(["ab", "a"])).to eq("a")
    expect(longest_common(["flower","flow","flight"])).to eq("fl")
  end
end