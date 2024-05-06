require "pry"

# A tree is an undirected graph in which any two vertices are connected by exactly
# one path. In other words, any connected graph without simple cycles is a tree.
#
# Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges
# where edges[i] = [ai, bi] indicates that there is an undirected edge between the
# two nodes ai and bi in the tree, you can choose any node of the tree as the
# root. When you select a node x as the root, the result tree has height h. Among
# all possible rooted trees, those with minimum height (i.e. min(h))  are called
# minimum height trees (MHTs).
#
# Return a list of all MHTs' root labels. You can return the answer in any order.
#
# The height of a rooted tree is the number of edges on the longest downward path
# between the root and a leaf.
#
# Source: https://leetcode.com/problems/minimum-height-trees/description/
#
# This solution works, but times out for large values of n on leetcode.
def find_min_height_trees(n, edges)
  return [0] if n == 1

  adj_list = Hash.new { [] }

  # create adjacency list from given edge list
  edges.each do |a, b|
    adj_list[a] = adj_list[a].push(b)
    adj_list[b] = adj_list[b].push(a)
  end

  while adj_list.size > 2
    leaves = adj_list.filter { |n, children| children.size <= 1 }.keys

    adj_list.delete_if { |n, _| leaves.include?(n) }

    adj_list.each do |n, children|
      leaves.each { |leaf| children.delete(leaf) }
    end
  end

  adj_list.keys
end

def find_min_height_trees1(n, edges)
  return [0] if n < 2 # edge cases

  adj_list = Hash.new { [] }
  deg_count = Hash.new(0)

  edges.each do |a, b|
    adj_list[a] = adj_list[a].push(b)
    deg_count[a] += 1

    adj_list[b] = adj_list[b].push(a)
    deg_count[b] += 1
  end

  leaves = deg_count.filter { |n, child_count| child_count == 1 }.keys

  while n > 2
    n -= leaves.size
    new_leaves = []

    while leaves.size > 0
      leaf = leaves.shift
      node = adj_list[leaf].pop
      adj_list[node].delete(leaf)
      new_leaves.push(node) if adj_list[node].size == 1
    end

    leaves = new_leaves
  end

  leaves
end

describe "#find_min_height_trees" do
  it do
    expect(find_min_height_trees(4, [[1, 0], [1, 2], [1, 3]])).to eq([1])
  end

  it do
    expect(find_min_height_trees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])).to eq([3, 4])
  end

  it do
    expect(find_min_height_trees(1, [])).to eq([0])
  end
end

describe "#find_min_height_trees1" do
  it do
    expect(find_min_height_trees1(4, [[1, 0], [1, 2], [1, 3]])).to eq([1])
  end

  it do
    expect(find_min_height_trees1(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])).to eq([3, 4])
  end

  it do
    expect(find_min_height_trees1(1, [])).to eq([0])
  end
end
