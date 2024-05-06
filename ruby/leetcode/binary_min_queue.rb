require "pry"

class BinaryMinHeap
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

  def remove(item)
    i = items.index(item)
    return if i.nil?

    return items.pop if i == items.size - 1

    items[i], items[-1] = items[-1], items[i]
    items.pop
    bubble_up(i)

    item
  end

  private

  def bubble_down(i)
    loop do
      break if i > out_of_bounds

      l_index, r_index = ((2 * i) + 1), ((2 * i) + 2)

      pos = if l_index <= out_of_bounds && items[l_index] < items[i] && (r_index > out_of_bounds || items[l_index] < items[r_index])
        l_index
      elsif r_index <= out_of_bounds && items[r_index] < items[i]
        r_index
      end

      break if pos.nil?

      items[i], items[pos] = items[pos], items[i]
      i = pos
    end
  end

  def bubble_up(i)
    par_index = (i - 1) / 2

    while items[i] < items[par_index] && i > 0
      # switch items under i and par_index
      items[par_index], items[i] = items[i], items[par_index]

      # set i to par_index and find the new i's par_index
      i = par_index
      par_index = (i - 1) / 2
    end
  end

  def out_of_bounds
    items.size - 1
  end
end

describe BinaryMinHeap do
  subject { BinaryMinHeap.new }

  it "add" do
    [3, 2, 1, 5, 6, 4].each { |n| subject.add(n) }
    expect(subject.items).to eq([1, 3, 2, 5, 6, 4])
  end

  it "poll" do
    [3, 2, 1, 5, 6, 4].each { |n| subject.add(n) }

    results = 6.times.map { subject.poll }
    expect(results).to eq([1, 2, 3, 4, 5, 6])
  end

  it "remove" do
    expect(subject.remove(nil)).to eq(nil)
  end

  it "remove" do
    subject.add(2)
    subject.add(1)
    subject.add(0)
    expect(subject.remove(0)).to eq(0)
    expect(subject.items).to eq([1, 2])

    expect(subject.remove(2)).to eq(2)
    expect(subject.items).to eq([1])
  end
end
