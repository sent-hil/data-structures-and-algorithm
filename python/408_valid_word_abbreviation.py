import re

class Solution:
    def valid_word_abbr(self, s: str, abbr: str) -> bool:
        parsed = re.findall(r"\d+|\D",abbr)
        i = 0

        for n in parsed:
            if n.isdigit():
                if n[0] == "0":
                    return False
                i += int(n)
            else:
                i += len(n)

        return i == len(s)


assert Solution().valid_word_abbr("internationalization", "i12iz4n") == True
assert Solution().valid_word_abbr("substitution", "sub4u4") == True
assert Solution().valid_word_abbr("substitution", "12") == True
assert Solution().valid_word_abbr("substitution", "s10n") == True
assert Solution().valid_word_abbr("substitution", "s010n") == False
assert Solution().valid_word_abbr("substitution", "s0ubstitution") == False
assert Solution().valid_word_abbr("substitution", "s55n") == False
