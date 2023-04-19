require_relative "./list_node"
require_relative "./heap"

require "rspec"

# merge_k_lists returns a ASC sorted linked list given a Array of sorted
# linked lists.
#
# It adds all nodes in lists into a Array, sorts that Array and builds
# a new linked list based on that.
def merge_k_lists(lists)
  arr = []

  # add every item in all lists to Array
  lists.each do |l|
    while l
      arr << l
      l = l.next
    end
  end

  arr.sort! {|a,b| a.val <=> b.val }

  head = curr = ListNode.new(nil)

  arr.each do |item|
    curr.next = item
    curr = curr.next
  end

  return head.next

end

# merge_k_lists returns a ASC sorted linked list given a Array of sorted
# linked lists.
#
# It adds the top item from all lists into priority queue, then pops the top
# most item from queue and adds that to new list.
def merge_k_lists1(lists)
  return nil if (lists.size) == 0
  return lists[0] if lists.size == 1

  # priority queue
  queue = Heap.new { |a,b| a.val < b.val }

  # add the head nodes from lists to queue
  lists.each { |l| queue.add(l) if l }

  head = curr = ListNode.new(nil)

  while queue.size > 0
    p = queue.pop
    curr.next = p
    curr = curr.next
    p = p.next

    queue.add(p) if p
  end

  head.next
end

describe "MergeKList" do
  it "merges k sorted lists into a single list" do
    expect(merge_k_lists([])).to eq(nil)
    expect(merge_k_lists([nil])).to eq(nil)

    a = build([1, 4, 5])
    b = build([1, 3, 4])
    c = build([2, 6])
    expect(merge_k_lists([a,b,c]).to_a).to eq([1,1,2,3,4,4,5,6])
  end

  it "merges k sorted lists into a single list" do
    expect(merge_k_lists1([])).to eq(nil)
    expect(merge_k_lists1([nil])).to eq(nil)

    a = build([1, 4, 5])
    b = build([1, 3, 4])
    c = build([2, 6])
    expect(merge_k_lists1([a,b,c]).to_a).to eq([1,1,2,3,4,4,5,6])
  end
end