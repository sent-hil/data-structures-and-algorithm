require 'ruby-graphviz'

# Create a new graph
g = GraphViz.new(:G, type: :digraph)

a = g.add_nodes('A')
b = g.add_nodes('B')
c = g.add_nodes('C')

g.add_edges(a, b)
g.add_edges(a, c)
g.add_edges(b, c)

g.output(png: 'hello_world.png')
