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
#  https://leetcode.com/problems/happy-number/?envType=study-plan&id=level-2
require "set"

def happy(n)
  set = Set.new

  while true do
    sum = 0
    n.digits.each { |d| sum += d ** 2 }

    return true if sum == 1
    return false if set.include?(sum)

    set.add(sum)
    n = sum
  end
end

describe "Happy" do
  it "returns if a number if happy" do
    expect(happy(1)).to eq(true)
    expect(happy(19)).to eq(true)
    expect(happy(20)).to eq(false)
  end
end