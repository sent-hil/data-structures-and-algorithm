# dfs does depth first search for given Tree in form of adjacency list.
#
# Accepts:
#   adj_list - Hash
#
# Returns:
#   []
def dfs(adj_list)
  visited = {}
  adj_list.each_key do |node|
    next if visited[node]

    stack = [node]
    while stack.size > 0
      n = stack.pop

      next if visited[n]

      visited[n] = true
      adj_list[n].each do |neighbor|
        stack.push(neighbor) unless visited[neighbor]
      end
    end
  end

  visited.keys
end

describe 'dfs' do
  #   1
  #  / \
  # 0   3   4
  #  \ /
  #   2
  let(:graph1) do
    { 0 => [1, 2], 1 => [0, 3], 2 => [0, 3], 3 => [2], 4 => [] }
  end

  it do
    expect(dfs(graph1)).to eq([0, 2, 3, 1, 4])
  end
end
