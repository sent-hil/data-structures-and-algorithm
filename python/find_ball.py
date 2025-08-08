# https://leetcode.com/problems/where-will-the-ball-fall/?envType=study-plan&id=level-2
def find_ball(grid: list[list[int]]) -> list[int]:
    def will_it_fall(grid_i: int , ball_i: int) -> int:
        # ball as fallen through
        if grid_i >= len(grid):
            return 1

        # out of bounds
        if ball_i < 0 or ball_i >= len(grid[0]):
            return -1

        cur_val = grid[grid_i][ball_i]
        next_i = ball_i + cur_val

        # at the edges or at v place
        if next_i < 0 or next_i >= len(grid[0]) or cur_val != grid[grid_i][next_i]:
            return -1

        return will_it_fall(grid_i+1, ball_i + cur_val)

    if len(grid) == 0:
        return []

    return [will_it_fall(0, i) for i in range(len(grid[0]))]

grid = [
    [1, 1, 1, -1, -1],
    [1, 1, 1, -1, -1],
    [-1, -1, -1, 1, 1],
    [1, 1, 1, 1, -1],
    [-1, -1, -1, -1, -1]
]
assert(find_ball(grid) == [1, -1, -1, -1, -1])
