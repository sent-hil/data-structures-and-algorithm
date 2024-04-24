require 'rspec'

# topological_sort returns ordering of nodes in Graph in linear order.
#
# Returns:
#   Array - if there is a linear ordering.
#
# Raises:
#   StandardError if there is a cycle in Graph.
def topological_sort(graph)
  topsorted = []

  # build a Hash of node => count of incoming edges to it
  in_nodes_count = Hash.new(0)
  graph.each do |node, children|
    # nodes with no incoming edge won't be caught in line:20, so we add it here
    # since we're using Hash.new(0), in_nodes_count[node] ||= 0 won't work
    in_nodes_count[node] = 0 unless in_nodes_count.include?(node)

    children.each { |child| in_nodes_count[child] += 1 }
  end

  # add the nodes which have no incoming edges to queue
  queue = in_nodes_count.filter { |_, incoming_count| incoming_count.zero? }.keys
  while queue.size.positive?
    p = queue.pop
    topsorted.push(p)

    graph[p].each do |child|
      in_nodes_count[child] -= 1

      queue.push(child) if in_nodes_count[child].zero?
    end
  end

  raise StandardError if graph.size != topsorted.size # cycle detected

  topsorted
end

describe '#topological_sort' do
  context 'with a simple linear graph' do
    it 'returns nodes in topologically sorted order' do
      graph = {
        'A' => ['B'],
        'B' => ['C'],
        'C' => []
      }
      expect(topological_sort(graph)).to eq(['A', 'B', 'C'])
    end
  end

  context 'with a graph with multiple dependencies' do
    it 'returns nodes in a valid topological order' do
      graph = {
        'A' => ['D'],
        'B' => ['D'],
        'C' => ['D', 'E'],
        'D' => ['F'],
        'E' => [],
        'F' => []
      }
      result = topological_sort(graph)
      expect(result.index('A')).to be < result.index('D')
      expect(result.index('B')).to be < result.index('D')
      expect(result.index('C')).to be < result.index('D')
      expect(result.index('C')).to be < result.index('E')
      expect(result.index('D')).to be < result.index('F')
    end
  end

  context 'with a complex graph' do
    it 'returns a correct topological order' do
      graph = {
        'A' => ['B', 'C'],
        'B' => ['D', 'E'],
        'C' => ['F'],
        'D' => ['G'],
        'E' => ['G', 'H'],
        'F' => ['H'],
        'G' => ['I'],
        'H' => ['I'],
        'I' => []
      }
      result = topological_sort(graph)
      ['B', 'D', 'E', 'G'].each do |node|
        expect(result.index('A')).to be < result.index(node)
      end
      expect(result.index('D')).to be < result.index('G')
      expect(result.index('E')).to be < result.index('G')
      expect(result.index('E')).to be < result.index('H')
      expect(result.index('G')).to be < result.index('I')
      expect(result.index('H')).to be < result.index('I')
    end
  end

  context 'with a graph containing an isolated node' do
    it 'includes the isolated node in the result' do
      graph = {
        'A' => ['B'],
        'B' => ['C'],
        'C' => [],
        'D' => []  # D is isolated
      }
      result = topological_sort(graph)
      expect(result).to include('D')
      expect(result.index('A')).to be < result.index('B')
      expect(result.index('B')).to be < result.index('C')
    end
  end

  context 'with an empty graph' do
    it 'returns an empty array' do
      graph = {}
      expect(topological_sort(graph)).to eq([])
    end
  end

  context 'with a cyclic graph' do
    it 'raises an error' do
      graph = {
        'A' => ['B'],
        'B' => ['C'],
        'C' => ['A']  # This creates a cycle
      }
      expect { topological_sort(graph) }.to raise_error(StandardError)
    end
  end
end
