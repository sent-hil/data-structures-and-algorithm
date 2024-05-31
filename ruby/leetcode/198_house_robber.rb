require "pry"

# You are a professional robber planning to rob houses along a street. Each
# house has a certain amount of money stashed, the only constraint stopping you
# from robbing each of them is that adjacent houses have security systems
# connected and it will automatically contact the police if two adjacent houses
# were broken into on the same night.
#
# Given an integer array nums representing the amount of money of each house,
# return the maximum amount of money you can rob tonight without alerting the
# police.
#
# Source: https://leetcode.com/problems/house-robber/

def rob(nums)
  results = Array.new(nums.size, 0)

  (results.size - 1).downto(0).each do |i|
    # set the last two i in results to same as nums since we can't look past it
    if i == results.size - 1 || i == results.size - 2
      results[i] = nums[i]
      next
    end

    # aggregate the max of i+2 or i+3
    results[i] = nums[i] + [results[i + 2], results[i + 3]].compact.max
  end

  results.max
end

describe "rob" do
  it do
    expect(rob([1, 2, 3, 1])).to eq(4)
  end

  it do
    expect(rob([2, 7, 9, 3, 1])).to eq(12)
  end

  it do
    expect(rob([2, 1, 1, 2])).to eq(4)
  end
end
