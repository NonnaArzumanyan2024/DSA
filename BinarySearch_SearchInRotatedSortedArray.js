/*

Similar LeetCode Problem: 33. Search in Rotated Sorted Array

Problem Description:
You are given a sorted array of distinct integers that has been rotated at some pivot index.
You need to find the index of a given target value.
If the target does not exist, return -1.

Requirements:
Use Modified Binary Search
No duplicate values in the array
Time Complexity: O(log n)
Space Complexity: O(1)

*/



function searchInRotatedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // While search space is valid
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If target found at mid, return index
        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // If target lies within the sorted left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Narrow search to left half
            } else {
                left = mid + 1;  // Search right half
            }
        } else {
            // Otherwise, right half must be sorted
            // If target lies within the sorted right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;  // Narrow search to right half
            } else {
                right = mid - 1; // Search left half
            }
        }
    }

    // Target not found after full search
    return -1;
}

// Example Usage and Test Cases
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(searchInRotatedArray([1], 0));                   // -1
console.log(searchInRotatedArray([1], 1));                   // 0
console.log(searchInRotatedArray([5, 1, 3], 3));             // 2
