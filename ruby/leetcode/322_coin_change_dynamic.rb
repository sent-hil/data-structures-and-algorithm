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

def coin_change_dynamic(coins, amount)
  dp = Array.new(amount + 1, Float::INFINITY)
  dp[0] = 0

  dp.each_with_index do |_, i|
    next if i == 0

    coins.each do |c|
      if i - c >= 0
        dp[i] = [(1 + dp[i - c]), dp[i]].min
      end
    end
  end

  (dp.last == Float::INFINITY) ? -1 : dp.last
end

describe "coin_change_dynamic" do
  it do
    expect(coin_change_dynamic([1, 2, 5], 8)).to eq(3)
  end

  it do
    expect(coin_change_dynamic([2], 3)).to eq(-1)
  end

  it do
    expect(coin_change_dynamic([1], 0)).to eq(0)
  end
end
