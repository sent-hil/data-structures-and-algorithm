const minCostClimbingStairsRecursive = (cost, i = 0) => {
  if (i >= cost.length) return 0

  return Math.min(
    cost[i] + minCostClimbingStairsRecursive(cost, i + 1),
    (cost[i + 1] || 0) + minCostClimbingStairsRecursive(cost, i + 2)
  )
}

var minCostClimbingStairs = function(cost) {
  for (let i = cost.length - 3; ~i; i--) {
    console.log(i, cost[i], cost[i + 1], cost[i + 2])
    cost[i] += Math.min(cost[i + 1], cost[i + 2])
  }

  return Math.min(cost[0], cost[1])
};

describe("Min Cost Climbing Stairs", () => {
  it("returns min", () => {
    expect(minCostClimbingStairsRecursive([10, 15, 20])).toEqual(15)
    expect(minCostClimbingStairsRecursive([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toEqual(6)
  })

  it("returns min", () => {
    //expect(minCostClimbingStairs([10, 15, 20])).toEqual(15)
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toEqual(6)
  })
})