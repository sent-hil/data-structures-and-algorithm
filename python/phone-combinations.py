# Given a string containing digits from 2-9 inclusive, return all possible
# letter combinations that the number could represent. Return the answer in any
# order.
#
# A mapping of digits to letters (just like on the telephone buttons) is given
# below. Note that 1 does not map to any letters.
#
# Example 1:
#   Input: digits = "23"
#   Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
#
# Example 2:
#   Input: digits = ""
#   Output: []
#
# Example 3:
#   Input: digits = "2"
#   Output: ["a","b","c"]

class Solution:
    def __init__(self):
        self.mapping = {
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"]
        }

    def letterCombinations(self, digits: str, i = 0) -> list[str]:
        self.digits = digits

        outputs = self.recurse(i)
        if len(outputs) == 1 and outputs[0] == "":
            return []

        return outputs

    def recurse(self, i: int):
        if i >= len(self.digits):
            return [""]

        outputs = []

        for m in self.mapping[self.digits[i]]:
            subCombos = self.recurse(i+1)
            for c in subCombos:
                outputs.append(m+c)

        return outputs

assert(Solution().letterCombinations("2") == ['a', 'b', 'c'])
assert(Solution().letterCombinations("23") == ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
assert(Solution().letterCombinations("") == [])
