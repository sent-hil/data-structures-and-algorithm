# Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be
# validated according to the following rules:
#     Each row must contain the digits 1-9 without repetition.
#     Each column must contain the digits 1-9 without repetition.
#     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9
#     without repetition.
#
# Note:
#     A Sudoku board (partially filled) could be valid but is not necessarily
#     solvable.
#     Only the filled cells need to be validated according to the mentioned
#     rules.
#
# https://leetcode.com/problems/valid-sudoku/description/

board1 = [
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
]

board2 = [
 ["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

board3 = [
 [".",".",".",".","5",".",".","1","."],
 [".","4",".","3",".",".",".",".","."],
 [".",".",".",".",".","3",".",".","1"],
 ["8",".",".",".",".",".",".","2","."],
 [".",".","2",".","7",".",".",".","."],
 [".","1","5",".",".",".",".",".","."],
 [".",".",".",".",".","2",".",".","."],
 [".","2",".","9",".",".",".",".","."],
 [".",".","4",".",".",".",".",".","."]
]

def valid_sudoku(board: list[list[str]], subbox: int = 3, skip: str = ".") -> bool:
    def check_row_wise(i, j, k) -> bool:
        exists = set()
        for ii in range(i, i+k):
            for jj in range(j, j+k):
                if board[ii][jj] in exists and board[ii][jj] != skip:
                    return False
                exists.add(board[ii][jj])

        return True

    # check row
    for i in range(len(board)):
        exists = set()
        for j in range(len(board[0])):
            if board[i][j] in exists and board[i][j] != skip:
                return False
            exists.add(board[i][j])

    # check column
    for j in range(len(board[0])):
        exists = set()
        for i in range(len(board)):
            if board[i][j] in exists and board[i][j] != skip:
                return False
            exists.add(board[i][j])

    # check by subbox by subbox
    for i in range(0, len(board)-1, subbox):
        for j in range(0, len(board[0])-1, subbox):
            if not check_row_wise(i, j, subbox):
                return False

    return True

assert(valid_sudoku(board1) == True)
assert(valid_sudoku(board2) == False)
assert(valid_sudoku(board3) == False)

# Notes
#
# * Syntax confusion around default args with type annotation.
# * Didn't realize . was implicit skip.
# * Was shaddowing subbox in nested method.
# * Rest worked on first try!
# * `valid_sudoku` was my first attempt, is a slower solution according to leetcode.
# * `valid_sudoku1` was from leetcode, much faster in theory in both time and space.

def valid_sudoku1(board: list[list[str]], subbox: int = 3, skip: str = "."):
    exists = set()
    for i in range(len(board)):
        for j in range(len(board[0])):
            cur = board[i][j]
            if cur == skip:
                continue

            # using 'row', 'col' prefix, we're ensuring rows and cols are uniq
            # i//3, j//3 is integer division which makes subboxes share the same key
            if ("row", i, cur) in exists or ("col", j, cur) in exists or (i//subbox, j//subbox, cur) in exists:
                return False

            exists.add(("row", i, cur))
            exists.add(("col", j, cur))
            exists.add((i//3, j//3, cur))

    return True

assert(valid_sudoku1(board1) == True)
assert(valid_sudoku1(board2) == False)
assert(valid_sudoku1(board3) == False)
