require "pry"

# Given an integer array nums, return true if you can partition the array into
# two subsets such that the sum of the elements in both subsets is equal or
# false otherwise.
#
# Source: https://leetcode.com/problems/partition-equal-subset-sum/

def can_partition(num)
  return false if num.sum % 2 == 1

  target = num.sum / 2

  sums = Set.new
  num.each do |n|
    new_sums = sums.clone
    sums.each { |s| new_sums.add(s + n) }
    new_sums.add(n)

    sums = new_sums
  end

  sums.include?(target)
end

describe "can_partition" do
  it do
    expect(can_partition([1, 5, 11, 5])).to eq(true)
  end

  it do
    expect(can_partition([1, 2, 3, 5])).to eq(false)
  end
end
