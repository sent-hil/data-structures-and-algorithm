require_relative "tree_node"

# Given the root of a binary tree, return the length of the diameter of the
# tree.
#
# The diameter of a binary tree is the length of the longest path between any
# two nodes in a tree. This path may or may not pass through the root.
#
# The length of a path between two nodes is represented by the number of edges
# between them.
#
# Source: https://leetcode.com/problems/diameter-of-binary-tree/

def diameter_of_binary_tree(root)
  max = 0

  iter = lambda do |node|
    return 0 if node.nil?

    left = node.left ? iter.call(node.left) : 0
    right = node.right ? iter.call(node.right) : 0
    max = [max, left + right].max

    1 + [left, right].max
  end

  iter.call(root)

  max
end

describe "diameter_of_binary_tree" do
  it do
    root = TreeNode.build([1, 2, 3, 4, 5])
    expect(diameter_of_binary_tree(root)).to eq(3)
  end

  it do
    root = TreeNode.build([1, 2])
    expect(diameter_of_binary_tree(root)).to eq(1)
  end

  it do
    root = TreeNode.build([1])
    expect(diameter_of_binary_tree(root)).to eq(0)
  end
end
