# Given an integer array nums, return an array answer such that answer[i] is
# equal to the product of all the elements of nums except nums[i].
#
# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
# integer.
#
# You must write an algorithm that runs in O(n) time and without using the
# division operation.
def product_except_self(nums)
end

describe "product_except_self" do
  it do
    expect(product_except_self([1, 2, 3, 4])).to eq([24, 12, 8, 6])
  end
end
