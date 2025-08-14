# Given n pairs of parentheses, write a function to generate all combinations
# of well-formed parentheses.
#
# Example 1:
#   Input: n = 3
#   Output: ["((()))","(()())","(())()","()(())","()()()"]
#
# Example 2:
#   Input: n = 1
#   Output: ["()"]

def generate_parens(n: int) -> list[str]:
    outputs = []
    subset = []
    inputs = ['(', ')']

    def _generate_parens(k: int, c: int):
        if c < 0 or c > n:
            return
        if k == n*2: # times 2 since there is open and close brackets: ()
            if c == 0:
                outputs.append(''.join(s for s in subset))
            return

        for p in inputs:
            subset.append(p)
            if p == "(":
                _generate_parens(k+1, c+1)
            else:
                _generate_parens(k+1, c-1)
            subset.pop()

    _generate_parens(0, 0)

    return outputs

assert(generate_parens(1) == ['()'])
assert(generate_parens(2) == ['(())', '()()'])
assert(generate_parens(3) == ['((()))', '(()())', '(())()', '()(())', '()()()'])

