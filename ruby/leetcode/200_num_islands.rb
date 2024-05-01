# Given an m x n 2D binary grid grid which represents a map of '1's (land) and
# '0's (water), return the number of islands.
#
# An island is surrounded by water and is formed by connecting adjacent lands
# horizontally or vertically. You may assume all four edges of the grid are all
# surrounded by water.
#
# Example 1:
# Input: grid = [
#   ['1', '1', '1', '1', '0'],
#   ['1', '1', '0', '1', '0'],
#   ['1', '1', '0', '0', '0'],
#   ['0', '0', '0', '0', '0']
# ]
# Output: 1
#
# Example 2:
# Input: grid = [
#   ['1', '1', '0', '0', '0'],
#   ['1', '1', '0', '0', '0'],
#   ['0', '0', '1', '0', '0'],
#   ['0', '0', '0', '1', '1']
# ]
# Output: 3
#
# https://leetcode.com/problems/number-of-islands/
def num_islands(grid)
  return 0 if grid.empty?

  visited = {}
  num_islands = 0

  row_len = grid.size
  col_len = grid[0].size

  bfs = proc do |ri, ci|
    queue = [[ri, ci]]
    while queue.size.positive?
      ri, ci = queue.shift

      next if visited[[ri, ci]]

      visited[[ri, ci]] = true

      # Iterate 4 directions: [N, S, E, W] from current position, add to queue
      # if new place is in bounds and has '1' and hasn't been visited.
      [[-1, 0], [1, 0], [0, 1], [0, -1]].each do |x, y|
        nri = ri + x
        nci = ci + y

        if (0...row_len).include?(nri) && (0...col_len).include?(nci) && grid[nri][nci] == "1" && visited[[nri, nci]].nil?
          queue.push([nri, nci])
        end
      end
    end
  end

  # Iterate through matrix; When first '1' is found, doing BFS from that place,
  # marking everything accessible in 4 directions as visited.
  grid.each_with_index do |row, row_i|
    row.each_with_index do |item, col_i|
      if item == "1" && visited[[row_i, col_i]].nil?
        bfs.call(row_i, col_i)
        num_islands += 1
      end
    end
  end

  num_islands
end

describe "#num_islands" do
  it do
    input = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"]
    ]
    expect(num_islands(input)).to eq(1)
  end

  it do
    input = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"]
    ]
    expect(num_islands(input)).to eq(3)
  end

  it do
    input = [
      ["1", "1", "1"],
      ["0", "1", "0"],
      ["1", "1", "1"]
    ]
    expect(num_islands(input)).to eq(1)
  end

  it do
    input = [
      ["1", "0", "1", "1", "1"],
      ["1", "0", "1", "0", "1"],
      ["1", "1", "1", "0", "1"]
    ]
    expect(num_islands(input)).to eq(1)
  end
end
