# Given a non-negative integer x, return the square root of x rounded down to the
# nearest integer. The returned integer should be non-negative as well.
def my_sqrt(x)
  return x if x < 2

  left = 2
  right = x / 2

  while left <= right
    mid = (left + right) / 2
    result = mid * mid

    case
    when result > x
      right = mid - 1
    when result < x
      left = mid + 1
    else
      return mid
    end
  end

  right
end

describe 'Sqrt' do
  it do
    expect(my_sqrt(0)).to eq(0)
    expect(my_sqrt(1)).to eq(1)
    expect(my_sqrt(3)).to eq(1)
    expect(my_sqrt(4)).to eq(2)
    expect(my_sqrt(5)).to eq(2)
    expect(my_sqrt(6)).to eq(2)
    expect(my_sqrt(8)).to eq(2)
    expect(my_sqrt(9)).to eq(3)
  end
end
