require "forwardable"

class PriorityQueue
  attr_accessor :items

  extend Forwardable

  # Accepts:
  #   items - Array of arrays
  #     ex: [[0, 'A'], [1, 'B']] - i: 0 is Priority, i:1 is Item
  def initialize(items = [])
    @items = items.map { |n| [n, n] }
    sort
  end

  def add(priority, item)
    items.push([priority, item])
    sort
  end

  def_delegators :@items, :pop, :shift, :size

  private

  def sort
    items.sort! { |a, b| a[0] <=> b[0] }
  end
end

describe PriorityQueue do
  subject do
    described_class.new([3, 2, 1, 5, 1, 6, 4])
  end

  it "add" do
    subject.add(0, 0)
    expect(subject.shift).to eq([0, 0])
  end

  it "max" do
    results = []
    subject.size.times do
      r = subject.pop
      results.push(r[1])
    end

    expect(results).to eq([6, 5, 4, 3, 2, 1, 1])
  end

  it "min" do
    results = []
    subject.size.times do
      r = subject.shift
      results.push(r[1])
    end

    expect(results).to eq([1, 1, 2, 3, 4, 5, 6])
  end
end
