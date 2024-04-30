# You are given two strings word1 and word2. Merge the strings by adding letters
# in alternating order, starting with word1. If a string is longer than the other,
# append the additional letters onto the end of the merged string.
#
# Return the merged string.
#
# Constraints:
#   1 <= word1.length, word2.length <= 100
#   word1 and word2 consist of lowercase English letters.
def merge_alternately(word1, word2)
  output = ''

  word1.chars.each_with_index do |w, i|
    output += w
    output += word2[i] if i < word2.size # word1 has extra chars
  end

  # deal with scenarios where word2 has extra chars
  output += word2[word1.size..] if word2.size > word1.size

  output
end

describe "merge_alternately" do
  it do
    expect(merge_alternately("abc", "pqr")).to eq("apbqcr")
  end

  it do
    expect(merge_alternately("ab", "pqrs")).to eq("apbqrs")
  end

  it do
    expect(merge_alternately("abcd", "pq")).to eq("apbqcd")
  end
end
