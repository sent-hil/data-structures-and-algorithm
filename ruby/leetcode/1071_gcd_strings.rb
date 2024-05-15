# For two strings s and t, we say "t divides s" if and only if s = t + t + t +
# ... + t + t (i.e., t is concatenated with itself one or more times).
#
# Given two strings str1 and str2, return the largest string s such that s
# divides both str1 and str2.
def gcd_of_strings(str1, str2)
  # we take advantage of knowing gcd of two strings will be same size as
  # gcd of the length of two strings
  #
  # str2.size.gcd(str1.size) will also work
  gcd = str1.size.gcd(str2.size) # how big the gcd string will be

  # ... since we're using size
  s = str1[0...gcd] # get the gcd string, doesn't matter str1 or str2

  # if there's left over after doing `gsub` then there's no gcd for that str
  return s if str1.gsub(s, "") == "" && str2.gsub(s, "") == ""

  ""
end

def gcd_of_strings1(str1, str2)
  # use the smaller of two strings to iterate down to 1; 1 b/c 0 is no str
  [str1.size, str2.size].min.downto(1) do |i|
    # optimization; if there is remainder, then this is not the gcd string
    if str1.size % i == 0 && str2.size % i == 0
      s = str1[0...i] # since we're using size, we have to do ...

      # if there's no left over after doing `gsub`, then this is the gcd string
      return s if str1.gsub(s, "") == "" && str2.gsub(s, "") == ""
    end
  end

  ""
end

describe "gcd_of_strings" do
  it do
    expect(gcd_of_strings("ABCABC", "ABC")).to eq("ABC")
  end

  it do
    expect(gcd_of_strings("ABCDEF", "ABC")).to eq("")
  end

  it do
    expect(gcd_of_strings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX")).to eq("TAUXX")
  end

  it do
    expect(gcd_of_strings("ABABABAB", "ABAB")).to eq("ABAB")
  end

  it do
    expect(gcd_of_strings("ABABAB", "ABAB")).to eq("AB")
  end

  it do
    expect(gcd_of_strings("LEET", "CODE")).to eq("")
  end
end

describe "gcd_of_strings1" do
  it do
    expect(gcd_of_strings1("ABCABC", "ABC")).to eq("ABC")
  end

  it do
    expect(gcd_of_strings1("ABCDEF", "ABC")).to eq("")
  end

  it do
    expect(gcd_of_strings1("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX")).to eq("TAUXX")
  end

  it do
    expect(gcd_of_strings1("ABABABAB", "ABAB")).to eq("ABAB")
  end

  it do
    expect(gcd_of_strings1("ABABAB", "ABAB")).to eq("AB")
  end

  it do
    expect(gcd_of_strings1("LEET", "CODE")).to eq("")
  end
end
