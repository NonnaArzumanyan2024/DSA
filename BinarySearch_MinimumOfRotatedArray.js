/*

Similar LeetCode Problem: 153. Find Minimum in Rotated Sorted Array

Problem Description:
You are given a rotated sorted array (no duplicates).
Your task is to find the smallest element using binary search.

Example 1:
Input:  nums = [4,5,6,7,0,1,2]
Output: 0

Example 2:
Input:  nums = [2,3,4,5,1]
Output: 1

Requirements:
Use binary search
Time complexity: O(log n)
Space complexity: O(1)

*/


function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    // Edge Case: If the array is already sorted and not rotated
    if (nums[left] < nums[right]) {
        return nums[left]; // First element is the smallest
    }

    // Binary Search
    while (left < right) {
        let mid = Math.floor((left + right) / 2); // Find middle index

        // If mid element is greater than the rightmost,
        // it means the minimum is in the right half
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        // If mid element is less than or equal to the rightmost,
        // the minimum is in the left half or at mid
        else {
            right = mid;
        }
    }

    // At the end of loop, left == right → the index of minimum element
    return nums[left];
}



//Example Test Cases
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([3, 4, 5, 1, 2]));       // 1
console.log(findMin([11, 13, 15, 17]));      // 11
console.log(findMin([2, 3, 4, 5, 1]));       // 1
console.log(findMin([1, 2, 3, 4, 5]));       // 1
