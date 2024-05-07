require_relative "priority_queue"
require "pry"

# You are given an undirected weighted graph of n nodes (0-indexed), represented
# by an edge list where edges[i] = [a, b] is an undirected edge connecting the
# nodes a and b with a probability of success of traversing that edge
# succProb[i].
#
# Given two nodes start and end, find the path with the maximum probability of
# success to go from start to end and return its success probability.
#
# If there is no path from start to end, return 0. Your answer will be accepted
# if it differs from the correct answer by at most 1e-5.
#
# Source: https://leetcode.com/problems/path-with-maximum-probability
def max_probability(n, edges, succ_prob, start_node, end_node)
  adj_list = Hash.new { {} }
  edges.each_with_index do |x, i|
    a, b = x
    adj_list[a] = adj_list[a].merge({b => succ_prob[i]})
    adj_list[b] = adj_list[b].merge({a => succ_prob[i]})
  end

  visited = {}

  distances = Array.new(n, -Float::INFINITY)
  distances[start_node] = 0

  queue = PriorityQueue.new([0, start_node])

  while queue.size > 0
    _, n = queue.pop # get highest priority item
    visited[n] = true

    adj_list[n].each do |edge, cost|
      new_dist = if distances[n] == 0
        cost
      else
        distances[n] * cost
      end

      if new_dist > distances[edge]
        distances[edge] = new_dist
        queue.add(new_dist, edge) unless visited.include?(edge)
      end
    end
  end

  (distances[end_node] == -Float::INFINITY) ? 0 : distances[end_node]
end

describe "#shortest_path" do
  it do
    r = max_probability(3, [[0, 1], [1, 2], [0, 2]], [0.5, 0.5, 0.2], 0, 2)
    expect(r).to eq(0.25)
  end

  it do
    r = max_probability(3, [[0, 1], [1, 2], [0, 2]], [0.5, 0.5, 0.3], 0, 2)
    expect(r).to eq(0.3)
  end

  it do
    r = max_probability(5, [[1, 4], [2, 4], [0, 4], [0, 3], [0, 2], [2, 3]], [0.37, 0.17, 0.93, 0.23, 0.39, 0.04], 3, 4)
    expect(r).to eq(0.21390)
  end
end
