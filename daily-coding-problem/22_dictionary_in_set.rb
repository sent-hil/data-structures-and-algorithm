# frozen_string_literal: true

# This problem was asked by Microsoft.
#
# Given a dictionary of words and a string made up of those words (no spaces),
# return the original sentence in a list. If there is more than one possible
# reconstruction, return any of them. If there is no possible reconstruction, then
# return null.
#
# For example, given the set of words 'quick', 'brown', 'the', 'fox', and the
# string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].
#
# Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string
# "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath',
# 'and', 'beyond'].
def set_in_dictionary(set, sentence)
  # start 2 pointers at the beginning of the sentence, iterate till end
  # move right pointer 1, then check if str under left & right pointer is in Set
  # if in Set, add to results
  #   move, left and right pointer to right+1

  results = []
  i = 0
  j = 0

  while j <= sentence.length - 1
    j += 1

    # careful about using .. vs ..., both work, but i = j, will need to be i = j+1 for ..
    word = sentence[i..j]
    next unless set.include?(word)

    results << word
    i = j
    j += 1
  end

  results
end

describe 'set_in_dictionary' do
  it do
    expect(
      set_in_dictionary(Set['quick', 'brown', 'the', 'fox'], 'thequickbrownfox')
    ).to eq(['the', 'quick', 'brown', 'fox'])
  end

  it do
    expect(
      set_in_dictionary(Set['bed', 'bath', 'bedbath', 'and', 'beyond'], 'bedbathandbeyond')
    ).to eq(['bed', 'bath', 'and', 'beyond'])
  end
end
