require "pry"

# Given two strings s and t, return true if t is an anagram of s, and false
# otherwise.
#
# An Anagram is a word or phrase formed by rearranging the letters of a
# different word or phrase, typically using all the original letters exactly
# once.

def is_anagram(s, t)
  return false if s.size != t.size

  counts = Hash.new(0)

  s.each_char.each_with_index do |e, i|
    counts[e] += 1
    counts[t[i]] -= 1
  end

  counts.filter { |_, v| v != 0 }.size == 0
end

describe "is_anagram" do
  it do
    expect(is_anagram("anagram", "nagaram")).to eq(true)
  end

  it do
    expect(is_anagram("rat", "car")).to eq(false)
  end
end
