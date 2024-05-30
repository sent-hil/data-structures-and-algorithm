# You are climbing a staircase. It takes n steps to reach the top.
#
# Each time you can either climb 1 or 2 steps. In how many distinct ways can you
# climb to the top?

def climb_stairs(n, store = {})
  return 1 if n == 0
  return 0 if n < 0
  return store[n] if store.include?(n)

  store[n] = climb_stairs(n - 1, store) + climb_stairs(n - 2, store)
end

describe "climb_stairs" do
  it do
    expect(climb_stairs(2)).to eq(2)
  end

  it do
    expect(climb_stairs(3)).to eq(3)
  end
end
