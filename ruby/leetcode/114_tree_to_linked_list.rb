require_relative "tree_node"

# Given the root of a binary tree, flatten the tree into a "linked list":
#
# The "linked list" should use the same TreeNode class where the right child
# pointer points to the next node in the list and the left child pointer is
# always null.
#
# The "linked list" should be in the same order as a pre-order traversal of the
# binary tree.
#
# Link: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/ (has
# image).
#
# Definition for a binary tree node.
def flatten(root, results = [])
  return if root.nil?

  results.push(root.val)

  new_left = root.right
  root.right = root.left
  root.right.right = new_left

  results.push(*flatten(root.left))
  results.push(*flatten(root.right))

  results
end

RSpec.describe "flatten" do
  # Helper method to convert a tree to an array using the right pointers
  def tree_to_array(root)
    result = []
    while root
      result << root.val
      root = root.right
    end
    result
  end

  it do
    root = TreeNode.new(1, TreeNode.new(2, TreeNode.new(3), TreeNode.new(4)), TreeNode.new(5, nil, TreeNode.new(6)))
    expect(flatten(root)).to eq([1, 2, 3, 4, 5, 6])
  end

  it "flattens an empty tree" do
    flatten(nil)
    expect(tree_to_array(nil)).to eq([])
  end

  xit "flattens a single node tree" do
    root = TreeNode.new(1)
    flatten(root)
    expect(tree_to_array(root)).to eq([1])
  end

  xit "flattens a linear right-skewed tree" do
    root = TreeNode.new(1, nil, TreeNode.new(2, nil, TreeNode.new(3)))
    flatten(root)
    expect(tree_to_array(root)).to eq([1, 2, 3])
  end

  xit "flattens a linear left-skewed tree" do
    root = TreeNode.new(1, TreeNode.new(2, TreeNode.new(3)))
    flatten(root)
    expect(tree_to_array(root)).to eq([1, 2, 3])
  end

  xit "flattens a complete binary tree" do
    root = TreeNode.new(1,
      TreeNode.new(2, TreeNode.new(3), TreeNode.new(4)),
      TreeNode.new(5, nil, TreeNode.new(6)))
    flatten(root)
    expect(tree_to_array(root)).to eq([1, 2, 3, 4, 5, 6])
  end

  xit "flattens a complex tree" do
    root = TreeNode.new(1,
      TreeNode.new(2, TreeNode.new(3)),
      TreeNode.new(4, nil, TreeNode.new(5, TreeNode.new(6), nil)))
    flatten(root)
    expect(tree_to_array(root)).to eq([1, 2, 3, 4, 5, 6])
  end
end
