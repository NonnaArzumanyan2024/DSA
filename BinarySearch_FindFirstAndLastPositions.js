/*

(Similar LeetCode Problem: 34. Find First and Last Position of Element in Sorted Array)

Problem Description:
You are given a sorted array of integers nums and a target value.
Return the first and last index of the target in the array. If the target does not exist, return [-1, -1].

Requirements:
Use binary search.
Time complexity: O(log n)
Space complexity: O(1)

*/



function searchRange(nums, target) {

    // Helper function to find the first (leftmost) index of target
    function findFirst() {
        let left = 0;                     // Start of search range
        let right = nums.length - 1;      // End of search range
        let index = -1;                   // Store result, default -1 if not found

        while (left <= right) {
            let mid = Math.floor((left + right) / 2); // Calculate middle index

            if (nums[mid] === target) {
                index = mid;             // Save this index as a possible first position
                right = mid - 1;         // Keep searching to the left for earlier target
            } else if (nums[mid] < target) {
                left = mid + 1;          // Search on the right half
            } else {
                right = mid - 1;         // Search on the left half
            }
        }

        return index;                    // Return the first index found, or -1
    }

    // Helper function to find the last (rightmost) index of target
    function findLast() {
        let left = 0;
        let right = nums.length - 1;
        let index = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2); // Calculate middle index

            if (nums[mid] === target) {
                index = mid;             // Save this index as a possible last position
                left = mid + 1;          // Keep searching to the right for later target
            } else if (nums[mid] < target) {
                left = mid + 1;          // Search on the right half
            } else {
                right = mid - 1;         // Search on the left half
            }
        }

        return index;                    // Return the last index found, or -1
    }

    // Run both helper functions to find the full range of target
    let first = findFirst();             // Find first occurrence of target
    let last = findLast();               // Find last occurrence of target

    return [first, last];                // Return both indices in an array
}

//Example Usage and Test Cases:
console.log(searchRange([1, 2, 4, 4, 5, 6, 7], 4)); // [2, 3]
console.log(searchRange([1, 1, 1, 1, 1], 1));       // [0, 4]
console.log(searchRange([1, 2, 3, 4, 5], 3));       // [2, 2]
console.log(searchRange([2, 4, 6, 8, 10], 5));      // [-1, -1]
console.log(searchRange([], 4));                    // [-1, -1]
