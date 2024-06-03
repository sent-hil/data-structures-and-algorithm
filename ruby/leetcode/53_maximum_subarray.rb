# Given an integer array nums, find the subarray with the largest sum, and
# return its sum.

def max_sub_array(nums)
  max = -Float::INFINITY
  cur = -Float::INFINITY

  nums.each do |n|
    cur = [n, cur + n].max
    max = [cur, max].max
  end

  max
end

describe "max_sub_array" do
  it do
    expect(max_sub_array([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to eq(6)
  end

  it do
    expect(max_sub_array([1])).to eq(1)
  end

  it do
    expect(max_sub_array([5, 4, -1, 7, 8])).to eq(23)
  end
end
