# Given two strings s and t, return true if s is a subsequence of t, or false
# otherwise.
#
# A subsequence of a string is a new string that is formed from the original
# string by deleting some (can be none) of the characters without disturbing the
# relative positions of the remaining characters. (i.e., "ace" is a subsequence of
# "abcde" while "aec" is not).
#
# Source: https://leetcode.com/problems/is-subsequence/
#
# Set i, j to start of s, t respectively. Move both if characters under points
# are the same or move just the j pointer.
#
# Time: O(n)
# Space: O(1)
def is_subsequence(s, t)
  i, j = 0, 0
  while j < t.size && i < s.size
    if s[i] == t[j]
      i += 1
    end
    j += 1
  end

  i == s.size
end

describe "is_subsequence" do
  it do
    expect(is_subsequence("abc", "ahbgdc")).to eq(true)
  end

  it do
    expect(is_subsequence("axc", "ahbgdc")).to eq(false)
  end
end
