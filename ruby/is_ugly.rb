def is_ugly(n)
  return false if n <= 0
  return true if n <= 5

  [2,3,5].each do |k|
    return is_ugly(n/k) if n % k == 0
  end

  return false
end

def is_ugly1(n)
  while n > 1
    if (n % 2 == 0)
      n = n/2
    elsif (n % 3 == 0)
      n = n/3
    elsif (n % 5 == 0)
      n = n/5
    else return false
    end
  end

  return n > 0
end

describe "Is Ugly" do
  it "returns if a number is ugly or not" do
    1.upto(5).each {|n| expect(is_ugly(n)).to eq(true)}

    expect(is_ugly(6)).to eq(true)
    expect(is_ugly(9)).to eq(true)

    expect(is_ugly(0)).to eq(false)
    expect(is_ugly(11)).to eq(false)
    expect(is_ugly(14)).to eq(false)
    expect(is_ugly(-2147483648)).to eq(false)
  end

  it "returns if a number is ugly or not" do
    1.upto(5).each {|n| expect(is_ugly1(n)).to eq(true)}

    expect(is_ugly1(6)).to eq(true)
    expect(is_ugly1(9)).to eq(true)

    expect(is_ugly1(0)).to eq(false)
    expect(is_ugly1(11)).to eq(false)
    expect(is_ugly1(14)).to eq(false)
    expect(is_ugly1(-2147483648)).to eq(false)
  end
end