/*
Problem Description:
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
This should be done in-place with O(1) extra space.

Examples:
Input: nums = [0,1,2,0,5,5]
Output: [1,2,5,5,0,0]

Input: nums = [0,0,1]
Output: [1,0,0]

Requirements:
Two Pointers technique
Time Complexity: O(n)
Space Complexity: O(1)
*/

function moveZeroes(nums) {
    // Position to place the next non-zero element
    let lastNonZeroIndx = 0;

    // Move non-zero elements forward in the array
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndx] = nums[i];  // Place non-zero element at lastNonZeroIndx
            ++lastNonZeroIndx;                 // Move pointer forward
        }
    }

    // Fill the rest of the array with zeros
    for (let i = lastNonZeroIndx; i < nums.length; ++i) {
        nums[i] = 0;
    }

    return nums; // Return modified array (optional, for testing)
}

// Example Test Cases
console.log(moveZeroes([0, 1, 2, 0, 5, 5]));      // [1, 2, 5, 5, 0, 0]
console.log(moveZeroes([0, 0, 1]));               // [1, 0, 0]
console.log(moveZeroes([1, 2, 3]));               // [1, 2, 3]
console.log(moveZeroes([0, 0, 0]));               // [0, 0, 0]
console.log(moveZeroes([4, 0, 0, 3, 0, 1]));      // [4, 3, 1, 0, 0, 0]
