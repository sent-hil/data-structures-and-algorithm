# You are given an array prices where prices[i] is the price of a given stock on
# the ith day.
#
# You want to maximize your profit by choosing a single day to buy one stock and
# choosing a different day in the future to sell that stock.
#
# Return the maximum profit you can achieve from this transaction. If you cannot
# achieve any profit, return 0.
#
# Source: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

def max_profit(prices)
  lowest = Float::INFINITY
  diff = 0

  prices.each do |p|
    lowest = [lowest, p].min
    diff = [diff, p - lowest].max
  end

  diff
end

describe "max_profit" do
  it do
    expect(max_profit([7, 1, 5, 3, 6, 4])).to eq(5)
  end

  it do
    expect(max_profit([7, 6, 4, 3, 1])).to eq(0)
  end
end
