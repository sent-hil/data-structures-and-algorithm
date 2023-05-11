from unittest.case import TestCase


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        occs = {}
        for c in s:
            if c not in occs:
                occs[c] = 0
            occs[c] += 1

        for c in t:
            if c not in occs:
                return False
            occs[c] -= 1
            if occs[c] < 0:
                return False
            if occs[c] == 0:
                del occs[c]

        if len(occs.items()) != 0:
            return False

        return True

    def isAnagram1(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        codes = [0 for _ in range(0, 123 - 65)]
        for i, c in enumerate(s):
            codes[ord(c) - 65] += 1
            codes[ord(t[i]) - 65] -= 1

        for c in codes:
            if c > 0:
                return False

        return True


class TestValidAnagram(TestCase):
    def test(self):
        self.assertEqual(Solution().isAnagram("abc", "cbad"), False)
        self.assertEqual(Solution().isAnagram("abc", "cba"), True)
        self.assertEqual(Solution().isAnagram("zlap", "kcqx"), False)

        self.assertEqual(Solution().isAnagram1("abc", "cbad"), False)
        self.assertEqual(Solution().isAnagram1("abc", "cba"), True)
        self.assertEqual(Solution().isAnagram1("zlap", "kcqx"), False)
