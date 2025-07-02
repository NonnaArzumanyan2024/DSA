/*

Similar LeetCode Problem: 852. Peak Index in a Mountain Array

Problem Description:
You are given an array of integers called nums that strictly increases
to a peak element, and then strictly decreases.
Your task is to find and return that peak value.

Requirements:
Use Binary Search
Time Complexity: O(log n)
Space Complexity: O(1)

Example 1:
nums = [1, 2, 7, 4, 2] ➜ Output: 7

Example 2:
nums = [0, 5, 10, 8, 4, 1] ➜ Output: 10

*/



function findPeak(nums) {
    let left = 0;
    let right = nums.length - 1;

    // Binary search to find the peak
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If the value at mid is less than the value at mid + 1,
        // we are in the increasing part, so move left up
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            // Otherwise, we are in the decreasing part (or at the peak),
            // so move right down
            right = mid;
        }
    }

    // At the end of the loop, left == right, which points to the peak
    return nums[left];
}

// Example Usage and Test Cases:
console.log(findPeak([1, 2, 7, 4, 2]));         // 7
console.log(findPeak([0, 5, 10, 8, 4, 1]));     // 10
console.log(findPeak([3, 4, 5, 6, 2, 1]));      // 6
console.log(findPeak([1, 3, 5, 7, 6, 4, 2]));   // 7
console.log(findPeak([2, 4, 6, 8, 6, 3, 1]));   // 8
