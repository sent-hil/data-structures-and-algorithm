# Given a 0-indexed string s, permute s to get a new string t such that:
#
# All consonants remain in their original places. More formally, if there is an
# index i with 0 <= i < s.length such that s[i] is a consonant, then t[i] =
# s[i].  The vowels must be sorted in the nondecreasing order of their ASCII
# values. More formally, for pairs of indices i, j with 0 <= i < j < s.length
# such that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII
# value than t[j].  Return the resulting string.
#
# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase
# or uppercase. Consonants comprise all letters that are not vowels.

# Time: O(n log n) - due to `vowels_in_s.sort_by`.
# Space: O(n) - due to storing `vowels_in_s`, worst case all of str can be a
# vowel.
def sort_vowels(str)
  vowels = %w[a e i o u A E I O U]
  vowels_in_s = []

  str.each_char { |s| vowels_in_s << s if vowels.include?(s) }

  vowels_in_s.sort_by! { |v| v.ord }

  i = 0
  while i <= str.size - 1
    if vowels.include?(str[i])
      str[i] = vowels_in_s.shift
    end
    i += 1
  end

  str
end

def sort_vowels_fast(str)
  vowels_sorted_count = {}
  "AEIOUaeiou".each_char { |s| vowels_sorted_count[s] = 0 }

  str.each_char do |s|
    vowels_sorted_count[s] += 1 if vowels_sorted_count[s]
  end

  str.each_char.each_with_index do |s, i|
    if vowels_sorted_count[s]
      v, count = vowels_sorted_count.filter { |k, v| v > 0 }.first
      str[i] = v
      vowels_sorted_count[v] = count - 1
    end
  end

  str
end

describe "sort_vowels" do
  it do
    expect(sort_vowels("lEetcOde")).to eq("lEOtcede")
  end

  it do
    expect(sort_vowels("lYmpH")).to eq("lYmpH")
  end

  it do
    expect(sort_vowels("SrSuArHDvA")).to eq("SrSAArHDvu")
  end
end

describe "sort_vowels_fast" do
  it do
    expect(sort_vowels_fast("lEetcOde")).to eq("lEOtcede")
  end

  it do
    expect(sort_vowels_fast("lYmpH")).to eq("lYmpH")
  end

  it do
    expect(sort_vowels_fast("SrSuArHDvA")).to eq("SrSAArHDvu")
  end
end
