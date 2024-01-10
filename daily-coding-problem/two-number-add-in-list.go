// Given a list of numbers and a number k, return whether any two numbers from
// the list add up to k.
//
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is
// 17.
//
// Bonus: Can you do this in one pass?
package main

import (
	"fmt"
)

func main() {
	fmt.Println(doesTwoIntAddToK([]int{10, 15, 3, 7}, 17))       // true
	fmt.Println(doesTwoIntAddToKBonus([]int{10, -15, 3, 7}, -5)) // true
	fmt.Println(doesTwoIntAddToK([]int{10, 15, 3}, 17))          // false

	fmt.Println(doesTwoIntAddToKBonus([]int{10, 15, 3, 7}, 17))  // true
	fmt.Println(doesTwoIntAddToKBonus([]int{10, -15, 3, 7}, -5)) // true
	fmt.Println(doesTwoIntAddToKBonus([]int{10, 15, 3}, 17))     // false
}

// Time: O(n^2)
// Space: O(1)
func doesTwoIntAddToK(nums []int, k int) bool {
	for i, n1 := range nums {
		for _, n2 := range nums[i:] {
			if n1+n2 == k {
				return true
			}
		}
	}

	return false
}

// Time: O(n)
// Space: O(n)
func doesTwoIntAddToKBonus(nums []int, k int) bool {
	store := map[int]bool{}

	for _, n := range nums {
		if _, ok := store[k-n]; ok {
			return true
		}

		store[n] = true
	}

	return false
}

func abs[T ~int](x T) T {
	if x < 0 {
		return -x
	}
	return x
}
