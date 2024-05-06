require "pry"

class BinaryMaxHeap
  attr_reader :items

  def initialize(items = [])
    @items = items
  end

  def add(item)
    items.push(item)
    bubble_up(items.size - 1) # satisfy heap invariant
  end

  def poll
    return if items.size == 0

    items[0], items[-1] = items[-1], items[0] # swap root and last node
    item = items.pop
    bubble_down(0) # satisify heap invariant
    item
  end

  private

  def bubble_down(i)
    loop do
      break if i > items.size - 1

      l_index, r_index = ((2 * i) + 1), ((2 * i) + 2)

      pos = if l_index < items.size && r_index < items.size # both nodes exist
        (items[l_index] >= items[r_index]) ? l_index : r_index # find the biggest node
      elsif l_index < items.size # only left node exists
        l_index
      elsif r_index < items.size # only right node exists
        r_index
      end

      break if pos.nil?
      break if items[i] >= items[pos]

      items[i], items[pos] = items[pos], items[i]
      i = pos
    end
  end

  def bubble_up(i)
    par_index = (i - 1) / 2

    while items[i] > items[par_index] && i > 0
      # switch items under i and par_index
      items[par_index], items[i] = items[i], items[par_index]

      # set i to par_index and find the new i's par_index
      i = par_index
      par_index = (i - 1) / 2
    end
  end
end

describe BinaryMaxHeap do
  subject { BinaryMaxHeap.new }

  it "add" do
    subject.add(0)
    expect(subject.items).to eq([0])
  end

  it "add" do
    [3, 2, 1, 5, 6, 4].each do |n|
      subject.add(n)
    end
    expect(subject.items).to eq([6, 5, 4, 2, 3, 1])
  end

  it "add and poll" do
    initial = [3, 2, 1, 5, 1, 6, 4]
    initial.each do |n|
      subject.add(n)
    end

    results = []
    initial.size.times do
      results.push(subject.poll)
    end

    expect(results).to eq([6, 5, 4, 3, 2, 1, 1])
  end
end
