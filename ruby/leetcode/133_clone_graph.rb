# Given a reference of a node in a connected undirected graph.
#
# Return a deep copy (clone) of the graph.
#
# Each node in the graph contains a value (int) and a list (List[Node]) of its
# neighbors.
#
# Test case format:
#
# For simplicity, each node's value is the same as the node's index (1-indexed).
# For example, the first node with val == 1, the second node with val == 2, and
# so on. The graph is represented in the test case using an adjacency list.
#
# An adjacency list is a collection of unordered lists used to represent a
# finite graph. Each list describes the set of neighbors of a node in the graph.
#
# The given node will always be the first node with val = 1. You must return the
# copy of the given node as a reference to the cloned graph.

class Node
  attr_accessor :val, :neighbors

  def initialize(val = 0, neighbors = nil)
    @val = val
    neighbors = [] if neighbors.nil?
    @neighbors = neighbors
  end
end

def cloneGraph(node, store = {})
  return if node.nil?
  return store[node.val] if store[node.val]

  new_node = Node.new(node.val)
  store[new_node.val] = new_node

  new_node.neighbors = node.neighbors.map do |n|
    cloneGraph(n, store)
  end

  new_node
end

RSpec.describe 'cloneGraph' do
  context 'when the graph is empty' do
    it 'returns nil for nil input' do
      expect(cloneGraph(nil)).to be_nil
    end
  end

  context 'when the graph has a single node without neighbors' do
    it 'clones the single node correctly' do
      node = Node.new(1)
      cloned_node = cloneGraph(node)

      expect(cloned_node.val).to eq(1)
      expect(cloned_node.neighbors).to be_empty
    end
  end

  context 'when the graph has multiple nodes with neighbors' do
    it 'clones the graph correctly' do
      #      1
      #     / \
      #    /   \
      #   2-----3
      node1 = Node.new(1)
      node2 = Node.new(2)
      node3 = Node.new(3)
      node1.neighbors = [node2, node3]
      node2.neighbors = [node1, node3]
      node3.neighbors = [node1, node2]

      cloned_node = cloneGraph(node1)
      neighbor_vals = cloned_node.neighbors.map(&:val)

      expect(cloned_node.val).to eq(1)
      expect(neighbor_vals).to contain_exactly(2, 3)
      expect(cloned_node.neighbors[0].neighbors).to include(an_object_having_attributes(val: 1))
      expect(cloned_node.neighbors[0].neighbors).to include(an_object_having_attributes(val: 3))
    end
  end
end
