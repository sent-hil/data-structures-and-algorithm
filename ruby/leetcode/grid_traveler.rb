def grid_traveler(i, j)
  paths = Array.new(i) { Array.new(j, 1) }
  paths.each_with_index do |p, i|
    next if i == 0

    p.each_with_index do |e, j|
      next if j == 0
      paths[i][j] = paths[i - 1][j] + paths[i][j - 1]
    end
  end

  paths[-1][-1]
end

describe "grid_traveler" do
  it do
    expect(grid_traveler(3, 7)).to eq(28)
  end
end
