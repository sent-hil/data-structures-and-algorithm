class TreeNode
  attr_accessor :val, :left, :right

  def self.build(arr)
    return nil if arr.empty?

    parents = [TreeNode.new(arr[0])]

    arr.each_with_index do |val, i|
      next if parents[i]

      n = TreeNode.new(val)

      parent = parents[(i - 1) / 2]
      (i % 2 == 0) ? parent.right = n : parent.left = n

      parents[i] = n
    end

    parents[0]
  end

  def initialize(val = 0, left = nil, right = nil)
    @val = val
    @left = left
    @right = right
  end

  def to_a
    queue = [self]
    results = []

    while queue.size > 0
      n = queue.shift
      results.push(n.val)

      queue.push(n.left) if n.left
      queue.push(n.right) if n.right
    end

    results
  end
end

describe "TreeNode" do
  context ".build, .to_a" do
    it do
      expect(TreeNode.build([])).to eq(nil)
    end

    it do
      expect(TreeNode.build([0]).to_a).to eq([0])
    end

    it do
      expect(TreeNode.build([0, 1, 2, 3]).to_a).to eq([0, 1, 2, 3])
    end

    it do
      expect(TreeNode.build([0, 1, 2, nil, 4]).to_a).to eq([0, 1, 2, nil, 4])
    end
  end
end
