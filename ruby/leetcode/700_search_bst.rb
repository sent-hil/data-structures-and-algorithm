require_relative "tree_node"

# You are given the root of a binary search tree (BST) and an integer val.
#
# Find the node in the BST that the node's value equals val and return the
# subtree rooted with that node. If such a node does not exist, return null.
def search_bst(root, val)
  return if root.nil?
  return root if root.val == val

  search_bst(root.left, val) || search_bst(root.right, val)
end

RSpec.describe "search_bst" do
  context "when the tree is empty" do
    it "returns nil for nil input" do
      expect(search_bst(nil, 5)).to be_nil
    end
  end

  #       10
  #     /   \
  #    5     15
  #   / \     \
  #  2   7     20
  context "when the value is present in the tree" do
    it "returns the node with the correct value" do
      root = TreeNode.new(10)
      root.left = TreeNode.new(5)
      root.right = TreeNode.new(15)
      root.left.left = TreeNode.new(2)
      root.left.right = TreeNode.new(7)
      root.right.right = TreeNode.new(20)

      found_node = search_bst(root, 7)
      expect(found_node).to be_a(TreeNode)
      expect(found_node.val).to eq(7)
    end
  end

  context "when the value is not present in the tree" do
    it "returns nil" do
      root = TreeNode.new(10)
      root.left = TreeNode.new(5)
      root.right = TreeNode.new(15)
      root.left.left = TreeNode.new(2)
      root.left.right = TreeNode.new(7)
      root.right.right = TreeNode.new(20)

      expect(search_bst(root, 99)).to be_nil
    end
  end
end
