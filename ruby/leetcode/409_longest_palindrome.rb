# Given a string s which consists of lowercase or uppercase letters, return the
# length of the longest palindrome that can be built with those letters.
#
# Letters are case sensitive, for example, "Aa" is not considered a palindrome.
#
# Time: O(n)
# Space: O(n)
#
def longest_palindrome(str)
  counts = Hash.new { |h, k| h[k] = 0 }

  max = 0
  str.each_char do |s|
    counts[s] += 1

    # this is to deal with cases like `ccc`
    if counts[s] == 2
      max += 2
      counts.delete(s)
    end
  end

  # we can use upto 1 odd in a palindrome, ie in the middle of string
  max + ((counts.size > 0) ? 1 : 0)
end

describe "longest_palindrome" do
  it do
    expect(longest_palindrome("abccccdd")).to eq(7)
  end

  it do
    expect(longest_palindrome("a")).to eq(1)
  end

  it do
    expect(longest_palindrome("ccc")).to eq(3)
  end

  it do
    expect(longest_palindrome("bb")).to eq(2)
  end
end
