# Given an integer array nums, move all 0's to the end of it while maintaining
# the relative order of the non-zero elements.
#
# Note that you must do this in-place without making a copy of the array.
#
# Two pointer solution.
#
# Time: O(n)
# Space: O(1)
def move_zeroes(nums)
  i, j = 0, 0

  # set two pointers: i, j at 1st 0 and 1st non zero respectively
  # swap and continue moving pointers till the end
  loop do
    i += 1 while nums[i] != 0 && i < nums.size # find the 1st 0 in bounds
    j = i # start j after i since everything before is non 0 & in correct place
    j += 1 while nums[j] == 0 && j < nums.size # find the 1st non 0 in bounds

    break if j >= nums.size

    nums[i], nums[j] = nums[j], nums[i]
  end

  nums
end

# Less optimal than `move_zeroes` since we're swapping every i in `nums`.
#
# Time: O(n)
# Space: O(1)
def move_zeroes_1(nums)
  i = 0
  cur = 0
  while i < nums.size
    if nums[i] != 0
      nums[cur] = nums[i]
      cur += 1
    end
    i += 1
  end

  # add removed 0s at back of Array
  cur.upto(nums.size - 1) { |i| nums[i] = 0 }

  nums
end

describe "move_zeroes" do
  it do
    expect(move_zeroes([0, 1, 0, 3, 12])).to eq([1, 3, 12, 0, 0])
  end

  it do
    expect(move_zeroes([0])).to eq([0])
  end

  it do
    expect(move_zeroes([0, 1])).to eq([1, 0])
  end

  it do
    expect(move_zeroes([1, 0])).to eq([1, 0])
  end

  it do
    expect(move_zeroes([1, 0, 1])).to eq([1, 1, 0])
  end
end

describe "move_zeroes_1" do
  it do
    expect(move_zeroes_1([0, 1, 0, 3, 12])).to eq([1, 3, 12, 0, 0])
  end

  it do
    expect(move_zeroes_1([0])).to eq([0])
  end

  it do
    expect(move_zeroes_1([0, 1])).to eq([1, 0])
  end

  it do
    expect(move_zeroes_1([1, 0])).to eq([1, 0])
  end

  it do
    expect(move_zeroes_1([1, 0, 1])).to eq([1, 1, 0])
  end
end
