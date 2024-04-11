require_relative 'grid_to_adjacency'

RSpec.describe 'GridToAdjacency' do
  describe '#initialize_grid' do
    it 'returns a matrix of the specified height and width' do
      matrix = initialize_grid(3, 2)
      expect(matrix.length).to eq(3)
      expect(matrix[0].length).to eq(2)
    end
  end

  describe '#add_extra_row_column' do
    it 'adds an extra row and column to the matrix' do
      matrix = [[1, 2], [3, 4]]
      updated_matrix = add_extra_row_column(matrix)
      expect(updated_matrix.length).to eq(4)
      expect(updated_matrix[0].length).to eq(4)
    end
  end

  describe '#matrix_to_adjacency_list' do
    it 'converts a matrix to an adjacency list' do
      matrix = [[nil, nil, nil], [0, 1, 2], [nil, nil, nil]]
      adj_list = matrix_to_adjacency_list(matrix)
      expect(adj_list[1]).to eq([0, 2])
    end
  end
end
