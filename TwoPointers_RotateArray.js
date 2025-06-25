/*

Problem Description:
Given an integer array `nums` and an integer `k`, rotate the array to the right by `k` steps.
The rotation must be done in-place, using O(1) extra space.

Idea:
Use the reverse technique:
1. Reverse the whole array.
2. Reverse the first k elements.
3. Reverse the rest.

Examples:
Input: nums = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
 
Input: nums = [1,2], k = 3
Output: [2,1]

Requirements:
Two Pointers
Time Complexity: O(n)
Space Complexity: O(1)
 
*/



function rotate(nums, k) {
    // Step 1: Make sure k is within bounds of array length
    k %= nums.length;

    // Helper function to reverse a part of the array
    const reverse = (arr, start, end) => {
        while (start < end) {
            // Swap elements at start and end
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    // Step 2: Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    // Step 3: Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Step 4: Reverse the remaining elements
    reverse(nums, k, nums.length - 1);

    return nums; // Optional: for testing or chaining
}

//Example Test Cases
console.log(rotate([1, 2, 3, 4, 5], 2));       // [4, 5, 1, 2, 3]
console.log(rotate([1, 2], 3));                // [2, 1]
console.log(rotate([1], 0));                   // [1]
console.log(rotate([10, 20, 30, 40], 4));      // [10, 20, 30, 40]
console.log(rotate([7, 8, 9], 1));             // [9, 7, 8]