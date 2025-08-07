require "pry"

# You are given an integer array coins representing coins of different
# denominations and an integer amount representing a total amount of money.
#
# Return the number of combinations that make up that amount. If that amount of
# money cannot be made up by any combination of the coins, return 0.
#
# You may assume that you have an infinite number of each kind of coin.
#
# The answer is guaranteed to fit into a signed 32-bit integer.
#
# Source: https://leetcode.com/problems/coin-change-ii/

def coin_change(amount, coins, store = {})
  return 1 if amount == 0
  return 0 if amount < 0
  return store[amount] if store.include?(amount)

  count = 0
  coins.each_with_index do |c, i|
    if c <= amount
      count += coin_change(amount - c, coins, store)
    end
  end

  store[amount] = count
end

describe "coin_change" do
  it do
    expect(coin_change(5, [1, 2, 5])).to eq(4)
  end

  xit do
    expect(coin_change(3, [2])).to eq(0)
  end

  xit do
    expect(coin_change(10, [10])).to eq(1)
  end
end
