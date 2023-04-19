require_relative "./list_node"
require "rspec"

# merge_two_lists merges two sorted linked lists into a single sorted
# linked list.
def merge_two_lists(list1, list2)
  head = curr = ListNode.new(nil)

  while list1 && list2
    if list1.val <= list2.val
      curr.next = list1
      curr = curr.next
      list1 = list1.next
    else
      curr.next = list2
      curr = curr.next
      list2 = list2.next
    end
  end

  curr.next = list1 || list2

  return head.next
end

describe "Merge Two Lists" do
  it "merges two sorted lists into a single list" do
    a = build([1, 4, 5])
    b = build([1, 3, 4])
    expect(merge_two_lists(a,b).to_a).to eq([1,1,3,4,4,5])
  end
end