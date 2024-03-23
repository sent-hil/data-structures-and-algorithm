# Given an array of integers nums which is sorted in ascending order, and an
# integer target, write a function to search target in nums. If target exists,
# then return its index. Otherwise, return -1.
#
# You must write an algorithm with O(log n) runtime complexity.
# Example 1:
#
# Input: nums = [-1,0,3,5,9,12], target = 9
# Output: 4
# Explanation: 9 exists in nums and its index is 4
# Example 2:
#
# Input: nums = [-1,0,3,5,9,12], target = 2
# Output: -1
# Explanation: 2 does not exist in nums so return -1
#
# Constraints:
#   1 <= nums.length <= 104
#   -104 < nums[i], target < 104
#   All the integers in nums are unique.
#   nums is sorted in ascending order.
def search(nums, target)
  l = 0
  r = nums.size - 1

  loop do
    i = (l + r) / 2
    case
    when r < l || l > r
      return -1
    when nums[i] == target
      return i
    when nums[i] > target
      r = i - 1
    when nums[i] < target
      l = i + 1
    end
  end
end

describe 'Binary Search' do
  it do
    expect(search([-1, 0, 3, 5, 9, 12], 9)).to eq(4)
  end

  it do
    expect(search([-1, 0, 3, 5, 9, 12], 2)).to eq(-1)
  end

  it do
    expect(search([5], 5)).to eq(0)
  end

  it do
    expect(search([], 5)).to eq(-1)
  end
end
