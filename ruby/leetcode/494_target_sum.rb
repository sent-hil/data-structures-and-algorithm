def find_target_sum_ways(nums, target)
  dp = {}

  backtrack = lambda do |i, k|
    if i == nums.size
      return (k == target) ? 1 : 0
    end

    return dp[[i, k]] if dp.include?([i, k])

    dp[[i, k]] = backtrack.call(i + 1, k + nums[i]) + backtrack.call(i + 1, k - nums[i])
  end

  backtrack.call(0, 0)
end

describe "find_target_sum_ways" do
  it do
    expect(find_target_sum_ways([1, 1, 1, 1, 1], 3)).to eq(5)
  end

  it do
    expect(find_target_sum_ways([1], 1)).to eq(1)
  end

  it do
    expect(find_target_sum_ways([1, 0], 1)).to eq(2)
  end

  it do
    expect(find_target_sum_ways([0, 0, 0, 0, 0, 0, 0, 0, 1], 1)).to eq(256)
  end
end
