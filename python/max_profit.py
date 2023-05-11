from unittest import TestCase


# You are given an array prices where prices[i] is the price of a given stock on the ith day.
#
# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
#
# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
def get_max_profit(prices):
    """
    get_max_profit returns the maximum possible positive difference between two values given a list of values. It uses double loop approach.

    It has O(n^2) time complexity and O(1) space complexity.
    """
    max_profit = float("-inf")

    for i, price in enumerate(prices):
        for price_later in prices[i:]:
            max_profit = max(max_profit, price_later - price)

    return max_profit


def get_max_profit1(prices):
    """
    get_max_profit1 uses two pointer approach to return the maximum possible positive difference between two values given a list of values.

    It has O(n) time complexity and O(1) space complexity.
    """
    if len(prices) < 2:
        return 0

    max_profit = 0
    p0, p1 = 0, 1

    while p1 < len(prices):
        if prices[p0] > prices[p1]:
            p0 = p1
        else:
            max_profit = max(max_profit, prices[p1] - prices[p0])

        p1 += 1

    return max_profit


class TestMaxProfit(TestCase):
    def test(self):
        prices = [2, 1, 2, 1, 0, 1, 2]
        self.assertEqual(get_max_profit(prices), 2)
        self.assertEqual(get_max_profit1(prices), 2)

        prices = [10, 7, 5, 8, 11, 9]
        self.assertEqual(get_max_profit(prices), 6)
        self.assertEqual(get_max_profit1(prices), 6)
