# sprialMatrix returns all elements of given m x n matrix in spiral order.
#
# Example:
#    [1,2,3]
#    [4,5,6] => [1,2,3,6,9,8,7,4,5]
#    [7,8,9]
#
# https://leetcode.com/problems/spiral-matrix
def spiral(matrix: list[list[int]]) -> list[int]:
    flattened = []

    new_matrix = matrix
    while new_matrix:
        for n in new_matrix[0]:
            flattened.append(n)

        # pop the first row in matrix and transpose the rest
        new_matrix = transpose(new_matrix[1:])

    return flattened

def transpose(matrix: list[list[int]]) -> list[list[int]]:
    if len(matrix) == 0:
        return []

    new_matrix = []

    # note how we're doing len(matrix[0]) first and then len(matrix)
    # ie for each column, pop from each row
    for i in range(len(matrix[0])):
        new_row = []
        for j in range(len(matrix)):
            new_row.append(matrix[j].pop())

        new_matrix.append(new_row)

    return new_matrix

assert(transpose([[1]]) == [[1]])
assert(transpose([[1,2,3],[4,5,6],[7,8,9]]) == [[3,6,9],[2,5,8],[1,4,7]])
assert(spiral([[1,2,3],[4,5,6],[7,8,9]]) == [1,2,3,6,9,8,7,4,5])
assert(spiral([[1,2,3,4],[5,6,7,8],[9,10,11,12]]) == [1,2,3,4,8,12,11,10,9,5,6,7])

# Notes:
#
# * Bunch of syntax errors with python.
# * Had wrong test case for `transpose([1])`.
# * Used the same variable in outer and inner loop.
# * Got both spiral and transpose working on first try!
