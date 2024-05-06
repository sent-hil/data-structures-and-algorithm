# There are n cities. Some of them are connected, while some are not. If city a
# is connected directly with city b, and city b is connected directly with city
# c, then city a is connected indirectly with city c.
#
# A province is a group of directly or indirectly connected cities and no other
# cities outside of the group.
#
# You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the
# ith city and the jth city are directly connected, and isConnected[i][j] = 0
# otherwise.
#
# Return the total number of provinces.
def find_circle_num(is_connected)
  # create an adjacency list so it's easier to traverse
  adj_list = {}

  is_connected.each_with_index do |inner_arr, i|
    inner_arr.each_with_index do |e, j|
      adj_list[i] ||= []
      adj_list[i].push(j) if e == 1
    end
  end

  # adj_list: {0:[1], 1:[0], 2:[]}

  visited = Set.new
  connected_count = 0

  adj_list.each do |k, edges|
    next if visited.include?(k)

    connected_count += 1
    queue = [k]
    while queue.size > 0
      n = queue.shift
      visited.add(n)

      adj_list[n].each do |c|
        queue.push(c) unless visited.include?(c)
      end
    end
  end

  connected_count
end

def find_circle_num1(is_connected)
  connected_count = 0
  visited = Set.new

  is_connected.each_with_index do |inner_arr, i|
    next if visited.include?(i)
    connected_count += 1
    queue = [i]

    while queue.size > 0
      ni = queue.shift
      visited.add(ni)

      is_connected[ni].each_with_index do |e, j|
        queue.push(j) if e == 1 && !visited.include?(j)
      end
    end
  end

  connected_count
end

describe "#find_circle_num" do
  it do
    expect(find_circle_num([[1, 1, 0], [1, 1, 0], [0, 0, 1]])).to eq(2)
  end

  it do
    expect(find_circle_num([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).to eq(3)
  end

  it do
    expect(find_circle_num([[1]])).to eq(1)
  end
end

describe "#find_circle_num1" do
  it do
    expect(find_circle_num1([[1, 1, 0], [1, 1, 0], [0, 0, 1]])).to eq(2)
  end

  it do
    expect(find_circle_num1([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).to eq(3)
  end

  it do
    expect(find_circle_num1([[1]])).to eq(1)
  end
end
