# Given the root of a binary tree and an integer targetSum, return the number of
# paths where the sum of the values along the path equals targetSum.
#
# The path does not need to start or end at the root or a leaf, but it must go
# downwards (i.e., traveling only from parent nodes to child nodes).
def path_sum(root, target_sum)
  return 0 if root.nil?

  count = 0
  store = {0 => 1}

  dfs = proc do |h, sum, node|
    sum += node.val
    diff = sum - target_sum
    count += h[diff] if h.include?(diff)
    h[sum] = (h[sum] || 0) + 1

    dfs.call(h.clone, sum, node.left) if node.left
    dfs.call(h.clone, sum, node.right) if node.right
  end

  dfs.call(store, 0, root)

  count
end
