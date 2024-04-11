def print_matrix(matrix)
  matrix.each do |inside|
    print inside, "\n"
  end
  print "\n"
end

def print_hash(hash)
  hash.each do |k, v|
    print("#{k} => #{v}", "\n")
  end
  print "\n"
end

def initialize_grid(height, width)
  matrix = Array.new(height) { Array.new(width) }

  first = 0
  matrix.each do |inside|
    inside.each_with_index do |_e, i|
      inside[i] = first
      first += 1
    end
  end

  matrix
end

matrix = initialize_grid(3, 2)
print_matrix(matrix)

def add_extra_row_column(matrix)
  extra_row_or_column = Array.new(matrix[0].length)
  matrix = [extra_row_or_column, *matrix, extra_row_or_column]
  matrix.each_with_index do |inside, i|
    matrix[i] = [nil, *inside, nil]
  end
end

matrix = add_extra_row_column(matrix)
print_matrix(matrix)

# rubocop:disable Metrics/AbcSize, Metrics/MethodLength
def matrix_to_adjacency_list(matrix)
  adj_list = {}

  matrix.each_with_index do |inside, oi|
    next if oi.zero? || oi == matrix.length - 1

    inside.each_with_index do |e, i|
      next if i.zero? || i == inside.length - 1

      adj_list[e] = [
        inside[i - 1], inside[i + 1], # add left, right
        matrix[oi - 1][i], matrix[oi + 1][i]
      ].compact # add above, below
    end
  end

  adj_list
end

adj_list = matrix_to_adjacency_list(matrix)
print_hash(adj_list)
# rubocop:enable Metrics/AbcSize, Metrics/MethodLength
