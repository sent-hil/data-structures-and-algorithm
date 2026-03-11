# You are given an m x n matrix maze (0-indexed) with empty cells (represented
# as '.') and walls (represented as '+'). You are also given the entrance of the
# maze, where entrance = [entrancerow, entrancecol] denotes the row and column
# of the cell you are initially standing at.
#
# In one step, you can move one cell up, down, left, or right. You cannot step
# into a cell with a wall, and you cannot step outside the maze. Your goal is to
# find the nearest exit from the entrance. An exit is defined as an empty cell
# that is at the border of the maze. The entrance does not count as an exit.
#
# Return the number of steps in the shortest path from the entrance to the
# nearest exit, or -1 if no such path exists.
def nearest_exit(maze, entrance)
  visited = Set[entrance]
  directions = [[-1, 0], [0, 1], [1, 0], [0, -1]] # up, right, down, left

  queue = []
  x, y = entrance

  # add the up/right/down/left of starting position first, because leetcode
  # doesn't consider going left when starting at 0,0 valid...which it should be
  directions.each do |xv, yv|
    new_x, new_y = x + xv, y + yv
    queue.push([[new_x, new_y], 1]) if is_inbounds(maze, new_x, new_y)
  end

  while queue.size > 0
    pos, steps = queue.shift
    x, y = pos

    next if visited.include?([x, y])
    visited.add([x, y])

    next if maze[x][y] == "+"

    if x == 0 || y == 0 || x == maze.length - 1 || y == maze[0].length - 1
      return steps
    end

    directions.each do |xv, yv|
      queue.push([[x + xv, y + yv], steps + 1])
    end
  end

  -1
end

def is_inbounds(maze, new_x, new_y)
  new_x >= 0 &&
    new_y >= 0 &&
    new_x <= maze.length - 1 &&
    new_y <= maze[0].length - 1 &&
    maze[new_x][new_y] != "+"
end

describe "#nearest_exit" do
  it do
    maze = [["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]]
    entrance = [1, 2]
    expect(nearest_exit(maze, entrance)).to eq(1)
  end

  it do
    maze = [["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]]
    entrance = [1, 0]
    expect(nearest_exit(maze, entrance)).to eq(2)
  end

  it do
    maze = [[".", "+"]]
    entrance = [0, 0]
    expect(nearest_exit(maze, entrance)).to eq(-1)
  end
end
