// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.
//
// Example 1:
//  Input: nums = [3,0,1]
//  Output: 2
//
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2
// is the missing number in the range since it does not appear in nums.
//
// Example 2:
//  Input: nums = [0,1]
//  Output: 2
//
// Explanation:
// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2
// is the missing number in the range since it does not appear in nums.
//
// Example 3:
//  Input: nums = [9,6,4,2,3,5,7,0,1]
//  Output: 8
//
// Explanation:
// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8
// is the missing number in the range since it does not appear in nums.
//
// https://leetcode.com/problems/missing-number/description

function Sum(s: seq<int>): int
  decreases s
{
  if |s| == 0 then 0
  else s[0] + Sum(s[1..])
}

ghost predicate ValidInput(s: seq<int>)
{
  // chek each item in s is between interval [0,|s|]
  (forall i {:trigger s[i]} :: 0 <= i < |s| ==> 0 <= s[i] <= |s|) &&

  // check no two items are the same
  (forall i, j {:trigger s[i], s[j]} :: 0 <= i < j < |s| ==> s[i] != s[j])
}

// functions are pure expressions, can be used in specs and runtime code
function GaussianAddition(n: nat): nat
{
  (n * (n + 1)) / 2
}

method MissingNumber(s: seq<int>) returns (m: int)
  requires ValidInput(s)
  ensures m == GaussianAddition(|s|) - Sum(s)
{
  // Gaussian addition to figure out expected sum
  var expectedSum := GaussianAddition(|s|);
  var sum := Sum(s);
  m := expectedSum - sum;
}

method Main() {
  var nums1: seq<int> := [0, 1, 3];
  var result1 := MissingNumber(nums1);
  assert(result1 == 2);
  print result1, "\n";

  var nums2: seq<int> := [0,1];
  var result2 := MissingNumber(nums2);
  assert(result2 == 2);
  print result2, "\n";

  var nums3: seq<int> := [9,6,4,2,3,5,7,0,1];
  var result3 := MissingNumber(nums3);
  assert(result3 == 8);
  print result3, "\n";
}
