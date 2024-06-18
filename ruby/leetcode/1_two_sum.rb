# Given an array of integers nums and an integer target, return indices of the
# two numbers such that they add up to target.
#
# You may assume that each input would have exactly one solution, and you may
# not use the same element twice.
#
# You can return the answer in any order.

# Constraints:
#       2 <= nums.length <= 104
#   -10^9 <= nums[i]     <= 10^9
#   -10^9 <= target      <= 10^9
#
# Source: https://leetcode.com/problems/two-sum/
#
# Time: O(n)
# Space: O(1)
def two_sum(nums, target)
  seen = {}

  nums.each_with_index do |n, i|
    want = target - n
    return [seen[want], i] if seen[want]

    seen[n] = i
  end
end

describe "two_sum" do
  it do
    expect(two_sum([2, 7, 11, 15], 9)).to eq([0, 1])
  end

  it do
    expect(two_sum([3, 2, 4], 6)).to eq([1, 2])
  end

  it do
    expect(two_sum([3, 3], 6)).to eq([0, 1])
  end

  it do
    expect(two_sum([9, -2, 11, 15], 7)).to eq([0, 1])
  end
end
