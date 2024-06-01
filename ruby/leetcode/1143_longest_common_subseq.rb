# Given two strings text1 and text2, return the length of their longest common
# subsequence. If there is no common subsequence, return 0.
#
# A subsequence of a string is a new string generated from the original string
# with some characters (can be none) deleted without changing the relative order
# of the remaining characters.
#
# For example, "ace" is a subsequence of "abcde".  A common subsequence of two
# strings is a subsequence that is common to both strings.
#
# Source: https://leetcode.com/problems/longest-common-subsequence/
#
# Dynamic programming solution.
#
# Time: O(text1.size * text2.size)
# Space: O(text1.size * text2.size)
#   Could be optimized to be just O(text1.size)
def longest_common_subsequence(text1, text2)
  counts = Array.new(text2.size + 1) { Array.new(text1.size + 1, 0) }

  counts.each_with_index do |inner_arr, i|
    next if i == 0
    inner_arr.each_with_index do |e, j|
      next if j == 0

      # if chars in text1 and text2 match, set to 1 + upper diagonal
      # this is important to deal with duplicate chars
      # else, set to max of left or upper values
      counts[i][j] = if text1[j - 1] == text2[i - 1]
        1 + counts[i - 1][j - 1]
      else
        [counts[i][j - 1], counts[i - 1][j]].compact.max
      end
    end
  end

  counts.last.last
end

describe "longest_common_subsequence" do
  it do
    expect(longest_common_subsequence("abcde", "ace")).to eq(3)
  end

  it do
    expect(longest_common_subsequence("abc", "abc")).to eq(3)
  end

  it do
    expect(longest_common_subsequence("abc", "def")).to eq(0)
  end

  it do
    expect(longest_common_subsequence("bsbininm", "jmjkbkjkv")).to eq(1)
  end
end
