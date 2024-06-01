# Given an integer array nums, return the length of the longest strictly
# increasing subsequence.
#
# Source: https://leetcode.com/problems/longest-increasing-subsequence/
#
def lis(arr)
  results = Array.new(arr.size, 1)

  arr.each_with_index do |e, i|
    subproblems = []
    arr[...i].each_with_index do |f, k|
      subproblems.push(results[k]) if f < e
      results[i] = 1 + (subproblems.max || 0)
    end
  end

  results.max
end

# Dynamic Programming solution.
#
# Start from end and build an array of longest possible subsequence based on if
# i is less than 2nd loop's j. If so, you add 1 to that.
#
# Time: O(n^2)
#   Can be made into O(log(n)), but that's too difficult.
# Space: O(n)
def lis1(arr)
  results = Array.new(arr.size, 1)

  (arr.size - 2).downto(0) do |i|
    i.upto(arr.size - 1).each do |j|
      if arr[j] > arr[i]
        results[i] = [results[i], 1 + results[j]].max
      end
    end
  end

  results.max
end

describe "lis" do
  it do
    expect(lis([3, 1, 8, 2, 5])).to eq(3)
  end

  it do
    expect(lis([3, 1, 8, 2, 5])).to eq(3)
  end
end

describe "lis1" do
  it do
    expect(lis1([3, 1, 8, 2, 5])).to eq(3)
  end

  it do
    expect(lis1([3, 1, 8, 2, 5])).to eq(3)
  end

  it do
    expect(lis1([10, 9, 2, 5, 3, 7, 101, 18])).to eq(4)
  end
end
