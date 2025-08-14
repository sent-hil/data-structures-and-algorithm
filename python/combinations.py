def search(n):
    subset = []
    combinations = []

    def _search(k):
        if k == n:
            # copy or subset will point to single reference which will be empty at the very end
            combinations.append(subset.copy())
        else:
            _search(k + 1)
            subset.append(k)
            _search(k + 1)
            subset.pop()

    _search(0)

    return combinations

def generate_with_bit(n):
    combos = []
    for b in range(1 << n):  # Iterate over all possible bit combinations
        subset = []
        for i in range(n):  # Check each bit position
            if b & (1 << i):  # If the i-th bit is set in b
                subset.append(i)  # Add i to the subset
        combos.append(subset)

    return combos

print(search(3))
print(generate_with_bit(3))
