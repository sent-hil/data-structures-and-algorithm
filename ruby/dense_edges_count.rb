def dense_edges_count(n)
  nodes_count, edges_count = 1, 0

  n.downto(2) do
    edges_count += nodes_count
    nodes_count += 1
  end

  edges_count
end

describe "dense_edges_count" do
  it do
    nodes_to_edges_count = {
      1 => 0,
      2 => 1,
      3 => 3,
      4 => 6,
      5 => 10,
      6 => 15
    }
    nodes_to_edges_count.each do |nodes_count, edges_count|
      expect(dense_edges_count(nodes_count)).to eq(edges_count)
    end
  end
end
