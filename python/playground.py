import marimo

__generated_with = "0.14.16"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo
    return


@app.cell
def _():
    board1 = [
        ["7", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ]
    return (board1,)


@app.cell
def _(board1):
    for i in range(len(board1)):
        print("".join(board1[i][j] for j in range(len(board1[0]))))
    return


@app.cell
def _(board1):
    for j in range(len(board1[0])):
        print("".join(board1[i][j] for i in range(len(board1))))
    return


@app.cell
def _(board1):
    def sub():
        for i in range(0, len(board1)-1, 3):
           for j in range(0, len(board1[0])-1, 3):
               print(i, j)

    sub()
    return


@app.cell
def _(board1):
    def _():
        for i in range(len(board1)):
            for j in range(len(board1[0])):
                cur = board1[i][j]
                print((i, cur), (cur, 1), (i//3, j//3, cur))

    _()
    return


@app.cell
def _():
    print(1//3)
    return


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
