/*

Similar LeetCode Problem: 35. Search Insert Position

Problem Description:
You are given a sorted array of integers `nums` and an integer `target`.
If the target exists in the array, return its index.
If it does not exist, return the index where it would be inserted to keep the array sorted.

Requirements:
Use Binary Search algorithm
Time Complexity: O(log N)
Space Complexity: O(1)

*/

function searchInsert(nums, target) {
    let left = 0;                   // Start of search range
    let right = nums.length - 1;    // End of search range

    // Loop until the search space is valid
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Middle index

        if (nums[mid] === target) {
            // If found target at mid, return index immediately
            return mid;
        }

        if (nums[mid] < target) {
            // Target is bigger than mid element, search right half
            left = mid + 1;
        } else {
            // Target is smaller than mid element, search left half
            right = mid - 1;
        }
    }

    // If not found, left is the correct insertion position
    return left;
}

// Example Usage and Tests:
console.log(searchInsert([1, 3, 5, 6], 2));  // 1
console.log(searchInsert([1, 3, 5, 6], 5));  // 2
console.log(searchInsert([1, 3, 5, 6], 7));  // 4
console.log(searchInsert([1, 3, 5, 6], 0));  // 0
console.log(searchInsert([1], 1));           // 0
