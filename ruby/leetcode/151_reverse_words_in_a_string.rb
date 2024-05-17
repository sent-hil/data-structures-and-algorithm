require "pry"

# Given an input string s, reverse the order of the words.
#
# A word is defined as a sequence of non-space characters. The words in s will
# be separated by at least one space.
#
# Return a string of the words in reverse order concatenated by a single space.
#
# Note that s may contain leading or trailing spaces or multiple spaces between
# two words. The returned string should only have a single space separating the
# words. Do not include any extra spaces.
#
# Time: O(n)
# Space: O(1)
def reverse_words_in_a_string(str)
  # remove spaces in beginning, end and any adjacent spaces
  # Time: O(n)
  i = 0
  while i <= str.size - 1
    if str[i] == " " && (i == 0 || i == str.size - 1 || str[i + 1] == " ")
      str.slice!(i)
    else
      i += 1
    end
  end

  # reverse the entire string
  # Time: O(n)
  reverse_fn(str, 0, str.size - 1)

  # find each word and then reverse it
  # Time: O(n)
  l, r = 0, 0
  while r <= str.size - 1
    r += 1 while str[r] != " " && r <= str.size - 1 # check we are not out of bounds

    reverse_fn(str, l, r - 1) # move one back since in last iteration we went past

    # move l, r to start of next char, which won't be " "
    l, r = r + 1, r + 1
  end

  str
end

# reverse_fn reverses the part of given `str` under the `l` and `r` region in
# place.
#
# Accepts:
#   str - String
#   l - Integer
#   r - Integer
def reverse_fn(str, l, r)
  while l < r
    str[l], str[r] = str[r], str[l]
    l, r = l + 1, r - 1
  end
end

describe "reverse_words_in_a_string" do
  it do
    expect(reverse_words_in_a_string("the sky")).to eq("sky the")
  end

  it do
    expect(reverse_words_in_a_string("  hello world  ")).to eq("world hello")
  end

  it do
    expect(reverse_words_in_a_string("a good  example")).to eq("example good a")
  end
end
