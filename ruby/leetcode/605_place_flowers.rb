# You have a long flowerbed in which some of the plots are planted, and some are
# not. However, flowers cannot be planted in adjacent plots.
#
# Given an integer array flowerbed containing 0's and 1's, where 0 means empty
# and 1 means not empty, and an integer n, return true if n new flowers can be
# planted in the flowerbed without violating the no-adjacent-flowers rule and
# false otherwise.
#
# Source: https://leetcode.com/problems/can-place-flowers/
#
# Time: O(n)
# Space: O(1)
def can_place_flowers(flowerbed, n)
  flowerbed.each_with_index do |e, i|
    next if e == 1

    # confusingly you can place flower on i = 0 or i == flowerbed.size - 1
    left_empty = i == 0 || flowerbed[i - 1] == 0
    right_empty = i == flowerbed.size - 1 || flowerbed[i + 1] == 0

    next unless left_empty && right_empty

    flowerbed[i] = 1
    n -= 1
  end

  # if there are multiple open places, this can be become <0
  n <= 0
end

describe "can_place_flowers" do
  it do
    expect(can_place_flowers([1, 0, 0, 0, 1], 1)).to be(true)
  end

  it do
    expect(can_place_flowers([1, 0, 0, 0, 1], 2)).to be(false)
  end

  it do
    expect(can_place_flowers([0, 0, 1, 0, 1], 1)).to be(true)
  end

  it do
    expect(can_place_flowers([0, 0, 1, 0, 0], 1)).to be(true)
  end
end
