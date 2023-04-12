# isPalindrome returns true if given str is a palindrome.
#
# Example:
#   isPalindrome("") => true
#   isPalindrome("a") => true
#   isPalindrome("ab") => false
def isPalindrome(str)
  i, j = 0, str.length-1

  while i < j do
    return false if str[i] != str[j]
    i+= 1
    j-= 1
  end

  return true
end

# longest_palindrome returns the longest palindrome in the given String.
def longest_palindrome(str)
  # store index of every char in h
  # example: "aba" => h = {a: [0,2], b: [1]}
  h = {}
  str.each_char.with_index do |char, i|
    h[char] ||= []
    h[char] << i
  end

  # store length between two of same chars, ie possible palindromes
  # example: "aba" => k = {2:[[0,2]], 0:[[1,1]]}
  k = {}
  h.each do |key, locs|
    locs.each_with_index do |a,i|
      i.upto(locs.length-1) do |q|
        j = locs[q]

        k[j-i] ||= []
        k[j-i] << [i,j]
      end
    end
  end

  # iterate from highest diff between start and end indices
  # if the string between indices is a palindrome, we found our answer
  # hence we're sorting reverse
  k.keys.sort.reverse_each do |m|
    k[m].each do |pair|
      s = str.slice(pair[0]..pair[1])
      return s if isPalindrome(s)
    end
  end

  return false
end

require "rspec"

describe "String" do
  it "returns longest palindrome in given string" do
    expect(longest_palindrome("a")).to eq("a")
    expect(longest_palindrome("ab")).to eq("a")
    expect(longest_palindrome("abba")).to eq("abba")
    expect(longest_palindrome("abcba")).to eq("abcba")
    expect(longest_palindrome("abbacacab")).to eq("bacacab")
  end

  it "returns if string is palindrome or not" do
    expect(isPalindrome("")).to eq(true)
    expect(isPalindrome("a")).to eq(true)
    expect(isPalindrome("abba")).to eq(true)
    expect(isPalindrome("abcba")).to eq(true)

    expect(isPalindrome("ab")).to eq(false)
    expect(isPalindrome("abcabc")).to eq(false)
  end
end