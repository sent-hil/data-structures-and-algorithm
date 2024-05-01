require_relative "tree_node"

# Given the root of a binary tree, return its maximum depth.
#
# A binary tree's maximum depth is the number of nodes along the longest path
# from the root node down to the farthest leaf node.
def max_depth(root)
  return 0 if root.nil?

  1 + [max_depth(root.left), max_depth(root.right)].max
end

RSpec.describe "max_depth" do
  context "when the tree is empty" do
    it "returns 0 for nil input" do
      expect(max_depth(nil)).to eq(0)
    end
  end

  context "when the tree has a single node" do
    it "returns 1" do
      root = TreeNode.new(1)
      expect(max_depth(root)).to eq(1)
    end
  end

  context "when the tree has multiple levels" do
    it "returns the correct maximum depth" do
      #       1
      #      / \
      #     2   3
      #    / \
      #   4   5
      #  /
      # 6
      root = TreeNode.new(1)
      root.left = TreeNode.new(2)
      root.right = TreeNode.new(3)
      root.left.left = TreeNode.new(4)
      root.left.right = TreeNode.new(5)
      root.left.left.left = TreeNode.new(6)

      expect(max_depth(root)).to eq(4)
    end
  end
end
