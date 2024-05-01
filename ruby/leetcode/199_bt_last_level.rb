require_relative "tree_node"
require "pry"

# Given the root of a binary tree, imagine yourself standing on the right side
# of it, return the values of the nodes you can see ordered from top to bottom.
#
# Source: https://leetcode.com/problems/binary-tree-right-side-view
#
# This is badly wordly question, what they want is the right most node in every
# level.
def right_side_view(root)
  return [] if root.nil?

  queue = [[root, 0]]
  results = []

  while queue.size > 0
    n, level = queue.shift

    # set val of last node in current level; since we're using in order, last
    # value will always be the right most side of the tree
    results[level] = n.val

    queue.push([n.left, level + 1]) if n.left
    queue.push([n.right, level + 1]) if n.right
  end

  results
end

describe "#right_side_view" do
  it do
    expect(right_side_view(nil)).to eq([])
  end

  it do
    expect(right_side_view(TreeNode.new(1))).to eq([1])
  end

  it do
    t = TreeNode.build([1, 2, 3, nil, 5, nil, 4])
    expect(right_side_view(t)).to eq([1, 3, 4])
  end

  it do
    t = TreeNode.build([1, nil, 3])
    expect(right_side_view(t)).to eq([1, 3])
  end

  it do
    t = TreeNode.build([1, 2])
    expect(right_side_view(t)).to eq([1, 2])
  end

  it do
    t = TreeNode.build([1, 2, 3, 4])
    expect(right_side_view(t)).to eq([1, 3, 4])
  end
end
