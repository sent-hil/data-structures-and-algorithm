def generate_bits(n):
    outputs = []
    subset = []

    def _generate_bits(k):
        if k == n:
            # copy or subset will point to single reference which will be empty at the very end
            outputs.append(subset.copy())
            return

        for i in [0,1]:
            subset.append(i)
            _generate_bits(k + 1)
            subset.pop()

    _generate_bits(1)

    return outputs

assert(generate_bits(1) == [[]])
assert(generate_bits(2) == [[0],[1]])
assert(generate_bits(3) == [[0,0],[0,1],[1,0],[1,1]])
assert(generate_bits(4) == [[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]])

