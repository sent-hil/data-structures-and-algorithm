require_relative "priority_queue"
require "pry"

# Accepts:
#   adj_list - Adjacency list of weighted graph.
#     Hash - { Index (Integer) => { Edge Node Index (Intger) => weight (Float) } }
#        Ex: {0 => {1 => 1, 2 => 1}}
#   n - Integer, Number of nodes in the graph.
#   s - Integer, Index of starting node
def shortest_path(adj_list, n, s)
  visited = {}

  distances = Array.new(n, Float::INFINITY)
  distances[s] = 0

  pq = PriorityQueue.new([0])
  while pq.size > 0
    _, p = pq.shift # get lowest elem of lowest priority
    visited[p] = true

    adj_list[p].each do |edge, cost|
      next if visited.include?(edge)

      new_dist = distances[p] + cost
      if new_dist < distances[edge]
        distances[edge] = new_dist
        pq.add(new_dist, edge)
      end
    end
  end

  distances
end

describe "#shortest_path" do
  it do
    adj_list = {
      0 => {1 => 4, 2 => 1},
      1 => {3 => 1},
      2 => {1 => 2, 3 => 5},
      3 => {4 => 3},
      4 => {}
    }
    expect(shortest_path(adj_list, 5, 0)).to eq([0, 3, 1, 4, 7])
  end
end
