require "pry"

# You are given an integer array coins representing coins of different
# denominations and an integer amount representing a total amount of money.
#
# Return the fewest number of coins that you need to make up that amount. If
# that amount of money cannot be made up by any combination of the coins, return
# -1.
#
# You may assume that you have an infinite number of each kind of coin.
#
# Source: https://leetcode.com/problems/coin-change/

# DFS implementation with memoization.
def coin_change(coins, amount, store = {})
  return 0 if amount == 0
  return Float::INFINITY if amount < 0
  return store[amount] if store.include?(amount)

  store[amount] = Float::INFINITY
  coins.each do |c|
    next if amount - c < 0
    result = coin_change(coins, amount - c, store)
    next if result == Float::INFINITY || result == -1

    store[amount] = [1 + result, store[amount]].min
  end

  (store[amount] == Float::INFINITY) ? -1 : store[amount]
end

def coin_change_dynamic(coins, amount)
  dp = Array.new(amount, Float::INFINITY)

  dp.each_with_index do |e, i|
    next if i == 0

    coins.each_with_index do |c, j|
      dp[i] = [(1 + dp[c - e]), dp[i]].min
    end
  end
end

describe "coin_change" do
  it do
    expect(coin_change([1, 2, 5], 11)).to eq(3)
  end

  it do
    expect(coin_change([2], 3)).to eq(-1)
  end

  it do
    expect(coin_change([1], 0)).to eq(0)
  end
end

describe "coin_change_dynamic" do
  it do
    expect(coin_change_dynamic([1, 2, 5], 11)).to eq(3)
  end

  it do
    expect(coin_change_dynamic([2], 3)).to eq(-1)
  end

  it do
    expect(coin_change_dynamic([1], 0)).to eq(0)
  end
end
