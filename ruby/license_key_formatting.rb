# You are given a license key represented as a string s that consists of only
# alphanumeric characters and dashes. The string is separated into n + 1 groups
# by n dashes. You are also given an integer k.
#
# We want to reformat the string s such that each group contains exactly k
# characters, except for the first group, which could be shorter than k but
# still must contain at least one character. Furthermore, there must be a dash
# inserted between two groups, and you should convert all lowercase letters to
# uppercase.
#
# Return the reformatted license key.
#
# Example:
#   license_key_formatting("5F3Z-2e-9-w", 4) # => "5F3Z-2E9W"
def license_key_formatting(s, k)
  s.gsub!('-','')

  # reverse since we want the first block to have <k chars if not enough
  s.reverse!

  arr = []

  # join each k chars into single string and add to arr
  s.chars.each_slice(k) { |t| arr << t.join('').upcase }

  # join each of k strings together, need reverse since we reversed earlier
  arr.join('-').reverse
end

describe "License Key Formatting" do
  it "formats license key in pairs of k" do
    expect(license_key_formatting("5F3Z-2e-9-w", 4)).to eq('5F3Z-2E9W')
  end
end