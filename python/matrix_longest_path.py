# Given an m x n integers matrix, return the length of the longest increasing
# path in matrix.
#
# From each cell, you can either move in four directions: left, right, up, or
# down. You may not move diagonally or move outside the boundary (i.e.,
# wrap-around is not allowed).
#
# Source: https://leetcode.com/problems/longest-increasing-path-in-a-matrix

class Solution:
    def longestIncreasingPath(self, matrix: list[list[int]]) -> int:
        if len(matrix) == 0:
            return 0

        dirs = ((0,1), (1,0), (-1,0), (0,-1))
        memo = {}

        def recurse(i:int, j:int, count: int) -> int:
            key = (i, j, count)
            if key in memo:
                return memo[key]

            cur_val = matrix[i][j]
            new_count = count
            for row, col in dirs:
                new_i = i+row
                new_j = j+col
                if new_i < 0 or new_i >= len(matrix) or new_j < 0 or new_j >= len(matrix[0]):
                    continue
                new_val = matrix[new_i][new_j]
                if new_val > cur_val:
                    new_count = max(recurse(new_i, new_j, count+1), new_count)
                    memo[(new_i, new_j, count+1)] = new_count

            memo[key] = new_count
            return new_count

        max_counter = 1
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                max_counter = max(recurse(i, j, 1), max_counter)

        return max_counter

assert(Solution().longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]) == 4)
assert(Solution().longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]) == 4)
assert(Solution().longestIncreasingPath([[6,8],[7,2]]) == 2)
