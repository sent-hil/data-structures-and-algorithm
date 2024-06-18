# There is a robot on an m x n grid. The robot is initially located at the
# top-left corner (i.e., grid[0][0]). The robot tries to move to the
# bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either
# down or right at any point in time.
#
# Given the two integers m and n, return the number of possible unique paths
# that the robot can take to reach the bottom-right corner.
#
# The test cases are generated so that the answer will be less than or equal to
# 2 * 109.
#
# Source: https://leetcode.com/problems/unique-paths/
#
def grid_traveler(i, j)
  paths = Array.new(i) { Array.new(j, 1) }
  paths.each_with_index do |p, i|
    next if i == 0

    p.each_with_index do |e, j|
      next if j == 0
      paths[i][j] = paths[i - 1][j] + paths[i][j - 1]
    end
  end

  paths[-1][-1]
end

describe "grid_traveler" do
  it do
    expect(grid_traveler(3, 7)).to eq(28)
  end
end
