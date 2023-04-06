ASCII_START = 48

def s_to_i(str)
  digit = 1

  str.codepoints.reverse.inject(0) do |sum, code|
    num = code-ASCII_START
    sum += num * digit
    digit *= 10

    sum
  end
end

def multiply(num1, num2)
  result = s_to_i(num1) * s_to_i(num2)

  # .digits returns in reverse order, ie 10 -> [0,1]
  result.digits.inject("") do |str, d|
    str = (d+ASCII_START).chr + str
    str
  end
end

describe "Multiply String" do
  it "converts string to number" do
    expect(s_to_i('0')).to eq(0)
    expect(s_to_i('1')).to eq(1)
    expect(s_to_i('29')).to eq(29)
    expect(s_to_i('345')).to eq(345)
  end

  it "multiplies two given numbers" do
    expect(multiply("10", "10")).to eq("100")
  end
end