require "pry"

# Given a string s, return the longest palindromic substring in s.
#
def longest_palindrome(s)
  results = Array.new(s.size + 1) { Array.new(s.size + 1, 0) }

  results.each_with_index do |inner_arr, i|
    next if i == 0
    inner_arr.each_with_index do |e, j|
      next if j == 0

      results[i][j] = if s[s.size - i] == s[j - 1]
        1 + results[i - 1][j - 1]
      else
        [results[i - 1][j], results[i][j - 1]].max
      end
    end
  end

  results.each_with_index do |inner_arr, i|
    next if i == 0
    print inner_arr[1..], "\n"
  end

  l = nil
  results.each_with_index do |inner_arr, i|
    next if i == 0 || i == results.size - 1

    inner_arr.each_with_index do |e, j|
      next if j == 0 || j == results.size - 1

      if results[i + 1][j + 1] == e + 1 && l.nil? && e != 0
        l = j - 1
      end
    end
  end

  return s[0] if l.nil?

  palindrome = ""
  while l <= results.last.last
    break if s[l].nil?
    palindrome << s[l]
    l += 1
  end

  palindrome
end

describe "longest_palindrome" do
  xit do
    expect(longest_palindrome("babad")).to eq("aba")
  end

  xit do
    expect(longest_palindrome("cbbd")).to eq("bb")
  end

  xit do
    expect(longest_palindrome("a")).to eq("a")
  end

  xit do
    expect(longest_palindrome("ac")).to eq("a")
  end

  xit do
    expect(longest_palindrome("bb")).to eq("bb")
  end

  xit do
    expect(longest_palindrome("abb")).to eq("bb")
  end

  it do
    expect(longest_palindrome("ccd")).to eq("cc")
  end
end
