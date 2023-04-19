class ListNode
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end

  def to_a
    arr = []
    cur = self

    while cur
      arr.push(cur.val)
      cur = cur.next
    end

    arr
  end
end

def build(arr)
  return nil unless arr

  head = curr = ListNode.new(nil)

  arr.each do |item|
    curr.next = ListNode.new(item)
    curr = curr.next
  end

  head.next
end

require "rspec"

describe "ListNode" do
  it "output all items in list to array" do
    l = ListNode.new(1)
    expect(l.to_a).to eq([1])

    l.next = ListNode.new(2)
    expect(l.to_a).to eq([1,2])

    l.next.next = ListNode.new(3)
    expect(l.to_a).to eq([1,2,3])
  end

  it "builds linked list from Array" do
    expect(build([1]).to_a).to eq([1])
    expect(build([1,2]).to_a).to eq([1,2])
    expect(build([1,2,3]).to_a).to eq([1,2,3])
  end
end