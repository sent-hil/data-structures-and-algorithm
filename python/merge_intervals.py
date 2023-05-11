from typing import List
import unittest


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) < 2:
            return intervals

        intervals = sorted(intervals, key=lambda x: x[0])
        new_intervals = [intervals[0]]

        for i in intervals[0:]:
            last = new_intervals[-1]
            if i[0] > last[1]:
                new_intervals.append(i)
            else:
                if last[1] < i[1]:
                    last[1] = i[1]

        return new_intervals


class TestMergeIntervals(unittest.TestCase):
    def test(self):
        self.assertListEqual(
            Solution().merge([[1, 3], [2, 6], [8, 10], [15, 18]]),
            [[1, 6], [8, 10], [15, 18]],
        )

        self.assertListEqual(Solution().merge([[1, 4], [4, 5]]), [[1, 5]])
        self.assertListEqual(Solution().merge([[1, 4], [0, 4]]), [[0, 4]])
        self.assertListEqual(Solution().merge([[1, 4], [0, 1]]), [[0, 4]])
        self.assertListEqual(Solution().merge([[1, 4], [0, 0]]), [[0, 0], [1, 4]])
        self.assertListEqual(Solution().merge([[1, 4], [2, 3]]), [[1, 4]])
