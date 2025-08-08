# isHappy returns if a given Number is 'happy' as defined by
#    * Sum square of digits of Integer.
#    * If they ultimately end up in 1, then it's happy.
#
#  Example:
#    isHappy(19) => true
#      1^2 + 9^2 = 82
#      8^2 + 2^2 = 68
#      6^2 + 8^2 = 100
#      1^2 + 0^2 + 0^2 = 1
#
# https://leetcode.com/problems/happy-number
def isHappy(n: int, seen = set()) -> bool:
    digits = [int(d) for d in str(n)]
    doubled = sum([d ** 2 for d in digits])
    if doubled == 1:
        return True

    if doubled in seen:
        return False

    seen.add(doubled)

    return isHappy(doubled)

assert(isHappy(0) == False)
assert(isHappy(19) == True)

# Mistakes:
#
# * Confusion around doing joining string and converting to int.
# * Multiple list comprehensions.
# * Forgot to do sum in sum([d ** 2 for d in digits])
