# There is a biker going on a road trip. The road trip consists of n + 1 points at
# different altitudes. The biker starts his trip on point 0 with altitude equal 0.
#
# You are given an integer array gain of length n where gain[i] is the net gain in
# altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the
# highest altitude of a point.
def largest_altitude(gain)
  altitudes = [0]
  gain.each_with_index do |g, i|
    altitudes[i + 1] = g + altitudes[i]
  end

  altitudes.max
end

def largest_altitude_in_place(gain)
  gain.each_with_index do |g, i|
    alt = (i - 1 < 0) ? 0 : gain[i - 1]
    gain[i] = alt + gain[i]
  end

  m = gain.max
  m.negative? ? 0 : m
end

describe "#largest_altitude" do
  it do
    expect(largest_altitude([-5, 1, 5, 0, -7])).to eq(1)
  end

  it do
    expect(largest_altitude([-4, -3, -2, -1, 4, 3, 2])).to eq(0)
  end
end

describe "#largest_altitude_in_place" do
  it do
    expect(largest_altitude_in_place([-5, 1, 5, 0, -7])).to eq(1)
  end

  it do
    expect(largest_altitude_in_place([-4, -3, -2, -1, 4, 3, 2])).to eq(0)
  end
end
