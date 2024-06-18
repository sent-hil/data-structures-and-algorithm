require "pry"

# Given an integer numRows, return the first numRows of Pascal's triangle.
#
# In Pascal's triangle, each number is the sum of the two numbers directly above
# it as shown:
#
# Source: https://leetcode.com/problems/pascals-triangle/description/
#
def generate(num_rows)
  seed = [[1]]

  (num_rows - seed.size).times do
    i, j = 0, 1
    new_row = []
    last_row = seed.last

    while j < last_row.size
      new_row.push(last_row[i] + last_row[j])
      i, j = i + 1, j + 1
    end

    seed.push([1, *new_row, 1])
  end

  seed
end

describe "generate" do
  it do
    expect(generate(5)).to eq([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
  end

  it do
    expect(generate(1)).to eq([[1]])
  end
end
