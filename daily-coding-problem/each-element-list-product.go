//Given an integer array nums, return an array answer such that answer[i] is
//equal to the product of all the elements of nums except nums[i].
//
//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
//integer.
//
//You must write an algorithm that runs in O(n) time and without using the
//division operation.
//
//Example 1:
//
//Input: nums = [1,2,3,4]
//Output: [24,12,8,6]
//Example 2:
//
//Input: nums = [-1,1,0,-3,3]
//Output: [0,0,9,0,0]

package main

import "fmt"

func main() {
	//fmt.Println(productExceptI([]int{1, 2, 3, 4, 5}))
	fmt.Println(productExceptINoDiv([]int{1, 2, 3, 4}))
	fmt.Println(productExceptINoDiv([]int{1, 2, 3, 4}))
	fmt.Println(productExceptINoDiv1([]int{1, 2, 3, 4}))
}

// Iterate through entire input and save product of all values. Then go through
// each item and divide the current i by total to return product of all integers
// except i.
//
// Note: if there was a 0 in input, this won't work.
//
// Time: O(n)
// Space: O(i)
func productExceptI(arr []int) ([]int, []int) {
	totalP := 1
	for _, a := range arr {
		totalP *= a
	}

	exceptArr := []int{}
	for _, a := range arr {
		v := 0
		if a != 0 {
			v = totalP / a
		}
		exceptArr = append(exceptArr, v)
	}

	return arr, exceptArr
}

// Iterate through entire input and save prefix and postfix arrays.
// Prefix contains product of all items preciding the item at i. Postfix
// contains product of all items succeeding the item at i
//
// Then return result of prefix[i-1] * postfix[i+1].
//
// Note: this does work with 0.
//
// Time: O(n)
// Space: O(n)
func productExceptINoDiv(arr []int) ([]int, []int) {
	prefix := make([]int, len(arr))
	postfix := make([]int, len(arr))
	output := make([]int, len(arr))

	prefix[0] = arr[0]
	postfix[len(arr)-1] = arr[len(arr)-1]

	for i, j := 1, len(arr)-2; i < len(arr)-1; i, j = i+1, j-1 {
		prefix[i] = arr[i] * prefix[i-1]
		postfix[j] = arr[j] * postfix[j+1]
	}

	output[0] = postfix[1]
	output[len(arr)-1] = prefix[len(arr)-2]

	for i := 1; i < len(arr)-1; i++ {
		output[i] = prefix[i-1] * postfix[i+1]
	}

	return arr, output
}

func productExceptINoDiv1(arr []int) ([]int, []int) {
	output := make([]int, len(arr))
	output[0] = arr[0]

	for i := 1; i < len(arr); i++ {
		output[i] = output[i-1] * arr[i-1]
	}

	post := 1
	for j := len(arr) - 2; j >= 0; j-- {
		output[j] = output[j] * arr[j+1] * post
		post *= arr[j+1]
	}

	return arr, output
}
