# There are n rooms labeled from 0 to n - 1 and all the rooms are locked except
# for room 0. Your goal is to visit all the rooms. However, you cannot enter a
# locked room without having its key.
#
# When you visit a room, you may find a set of distinct keys in it. Each key has
# a number on it, denoting which room it unlocks, and you can take all of them
# with you to unlock the other rooms.
#
# Given an array rooms where rooms[i] is the set of keys that you can obtain if
# you visited room i, return true if you can visit all the rooms, or false
# otherwise.
def can_visit_all_rooms(rooms)
  visited = Set[0]

  queue = [*rooms[0]]
  while queue.size > 0
    n = queue.shift
    visited.add(n)

    rooms[n].each do |new_ri|
      queue.push(new_ri) unless visited.include?(new_ri)
    end
  end

  rooms.size == visited.size
end

describe "#can_visit_all_rooms" do
  it do
    expect(can_visit_all_rooms([[1], [2], [3], []])).to eq(true)
  end

  it do
    expect(can_visit_all_rooms([[1, 3], [3, 0, 1], [2], [0]])).to eq(false)
  end
end
