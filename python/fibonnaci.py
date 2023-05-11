from functools import lru_cache
from unittest import TestCase


def fibonacci(i):
    """
    fibonacci returns the value at given index i of fibonnaci series. It uses recursion to calculate the value.

    It has O(2^n) time complexity and O(n) space complexity.
    """
    if i < 2:
        return i

    return fibonacci(i - 1) + fibonacci(i - 2)


@lru_cache(None)
def fibonacci2(i):
    """
    fibonacci returns the value at given index i of fibonnaci series. It uses recursion to calculate the value ans uses lru_cache to store the results in a dictionary.

    It has O(n) time complexity and O(n) space complexity.
    """
    if i < 2:
        return i

    return fibonacci(i - 1) + fibonacci(i - 2)


def fibonacci1(i, store={0: 0, 1: 1}):
    """
    fibonacci1 returns the value at given index i of fibonnaci series. It uses recursion to calculate the value and stores the result in dictionary.

    It has O(n) time complexity and O(n) space complexity.
    """
    if store.get(i) is None:
        store[i] = fibonacci1(i - 1, store) + fibonacci1(i - 2, store)

    return store[i]


def fibonacci_iter(i):
    """
    fibonacci returns the value at given index i of fibonnaci series. It uses iteratiion to calculate the value.

    It has O(n) time complexity and O(1) space complexity.
    """

    x1, x2 = 0, 1
    for x in range(0, i):
        x1, x2 = x2, x2 + x1

    return x1


class TestFibonnaci(TestCase):
    def test(self):
        self.assertEqual(fibonacci(5), 5)
        self.assertEqual(fibonacci1(5), 5)
        self.assertEqual(fibonacci2(5), 5)
        self.assertEqual(fibonacci_iter(5), 5)
