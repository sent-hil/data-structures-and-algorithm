require_relative "tree_node"
require "pry"

# Given the root of a binary tree, the level of its root is 1, the level of its
# children is 2, and so on.
#
# Return the *smallest* level x such that the sum of all the values of nodes at
# level x is *maximal*.
#
# Example:
#   Input: root = [1,7,0,7,-8,null,null]
#   Output: 2
#
#   Explanation:
#   Level 1 sum = 1.
#   Level 2 sum = 7 + 0 = 7.
#   Level 3 sum = 7 + -8 = -1.
#
#   So we return the level with the maximum sum which is level 2.
def max_level_sum(root)
  return if root.nil?

  queue = [[root, 0]]
  results = []

  while queue.size > 0
    n, level = queue.shift

    results[level] ||= 0
    results[level] += n.val if n.val

    queue.push([n.left, level + 1]) if n.left
    queue.push([n.right, level + 1]) if n.right
  end

  results.find_index(results.max) + 1
end

describe "#max_level_sum" do
  it do
    expect(max_level_sum(TreeNode.build([1, 7, 0, 7, -8, nil, nil]))).to eq(2)
  end

  it do
    expect(max_level_sum(TreeNode.build([989, nil, 10250, 98693, -89388, nil, nil, nil, -32127]))).to eq(2)
  end
end
