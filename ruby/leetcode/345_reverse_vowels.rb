# Given a string s, reverse only all the vowels in the string and return it.
#
# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower
# and upper cases, more than once.
def reverse_vowels(s)
  vowels = %w[a e i o u A E I O U]

  l = 0
  r = s.size - 1
  while l < r
    if vowels.include?(s[l]) && vowels.include?(s[r])
      s[l], s[r] = s[r], s[l]
      l, r = l + 1, r - 1

      next
    end

    l += 1 if !vowels.include?(s[l])
    r -= 1 if !vowels.include?(s[r])
  end

  s
end

# reverses adjacent vowels in given string
def reverse_adj_vowels(s)
  vowels = %w[a e i o u A E I O U]

  l, r = 0, 0
  while l <= s.size - 1 && r <= s.size - 1
    l += 1 while !vowels.include?(s[l]) && l <= s.size - 1

    r = l + 1
    r += 1 while !vowels.include?(s[r]) && r <= s.size - 1

    break unless s[l] && s[r]

    s[l], s[r] = s[r], s[l]
    r, l = r + 1, l + 1
  end

  s
end

describe "reverse_vowels" do
  it do
    expect(reverse_vowels("hello")).to eq("holle")
  end

  it do
    expect(reverse_vowels("leetcode")).to eq("leotcede")
  end

  it do
    expect(reverse_vowels(" ")).to eq(" ")
  end

  it do
    expect(reverse_vowels("a.")).to eq("a.")
  end

  it do
    expect(reverse_vowels("aA")).to eq("Aa")
  end

  it do
    expect(reverse_vowels("race car")).to eq("race car")
  end
end

describe "reverse_adj_vowels" do
  it do
    expect(reverse_adj_vowels("hello")).to eq("holle")
  end

  it do
    expect(reverse_adj_vowels("leetcode")).to eq("leotcede")
  end

  it do
    expect(reverse_adj_vowels(" ")).to eq(" ")
  end

  it do
    expect(reverse_adj_vowels("a.")).to eq("a.")
  end

  it do
    expect(reverse_adj_vowels("aA")).to eq("Aa")
  end

  it do
    expect(reverse_adj_vowels("race car")).to eq("reca car")
  end
end
