def min_sum_count(coins, t, used_coins = [])
  return true if t == 0
  return false if t < 0

  coins.each_with_index do |c, i|
    next if used_coins[i]

    used_coins[i] = true
    if min_sum_count(coins, t - c, used_coins)
      return true
    end
    used_coins[i] = false
  end

  false
end

describe "can_sum" do
  it do
    expect(min_sum_count([1, 2, 3], 5)).to eq(true)
  end

  it do
    expect(min_sum_count([1, 2, 3], 7)).to eq(false)
  end
end
