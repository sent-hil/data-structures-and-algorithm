require "pry"

# The Tribonacci sequence Tn is defined as follows:
#
# T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
#
# Given n, return the value of Tn.

def tribonacci(n)
  return 0 if n == 0

  sums = [0, 1, 1]

  3.upto(n).each do |n|
    sum = 0
    sums[-3..].each { |s| sum += s }
    sums.push(sum)
  end

  sums.last
end

def tribonacci_optimized(n)
  return 0 if n == 0
  return 1 if n < 2

  a, b, c = 1, 1, 2
  2.upto(n).each do |i|
    a, b, c = b, c, a + b + c
  end

  a
end

describe "tribonacci" do
  it do
    outputs = {
      0 => 0,
      1 => 1,
      2 => 1,
      3 => 2,
      4 => 4,
      5 => 7,
      6 => 13,
      25 => 1389537
    }
    outputs.each do |input, output|
      expect(tribonacci(input)).to eq(output)
    end
  end
end

describe "tribonacci_optimized" do
  it do
    outputs = {
      0 => 0,
      1 => 1,
      2 => 1,
      3 => 2,
      4 => 4,
      5 => 7,
      6 => 13,
      25 => 1389537
    }
    outputs.each do |input, output|
      expect(tribonacci_optimized(input)).to eq(output)
    end
  end
end
