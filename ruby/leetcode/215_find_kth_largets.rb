require_relative "binary_max_heap"

# Given an integer array nums and an integer k, return the kth largest element
# in the array.
#
# Note that it is the kth largest element in the sorted order, not the kth
# distinct element.
#
# Can you solve it without sorting?
#
# Source: https://leetcode.com/problems/kth-largest-element-in-an-array/
def find_kth_largest(nums, k)
  max_heap = BinaryMaxHeap.new
  nums.each { |n| max_heap.add(n) }

  result = nil
  k.times do |i|
    result = max_heap.poll
  end

  result
end

describe "#find_kth_largest" do
  it do
    expect(find_kth_largest([3, 2, 1, 5, 6, 4], 2)).to eq(5)
  end
end
