/*

Problem Description:
Given an array of integers `nums` and an integer `k`, return true if the array has a contiguous subarray of at least two elements whose sum is a multiple of `k` (sum % k === 0). Otherwise, return false.

Examples:
checkSubarraySum([1, 2, 3, 4], 7) => true    // because [3, 4] sums to 7
checkSubarraySum([2, 6, 30, 1, 2, 3, 8], 6) => true    // because [30, 1, 2, 3] sums to 36
checkSubarraySum([1, 2], 4) => false         // no valid subarray

Requirements:
Subarray must contain at least two elements
Subarray must be contiguous
Time Complexity: O(n)
Space Complexity: O(n)

*/



function checkSubarraySum(nums, k) {
    const hash = { 0: -1 }; // key: mod value, value: first index where it appeared
    let sum = 0; // cumulative sum

    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i]; // add current number to running total

        let mod = 0;

        if (k !== 0) {
            mod = sum % k; // get remainder when divided by k
            if (mod < 0) mod += k; // normalize negative remainders
        } else {
            mod = sum; // if k is 0, we just track the raw sum
        }

        // Check if this remainder has been seen before
        if (mod in hash) {
            // If the distance between indices is at least 2, we found a valid subarray
            if (i - hash[mod] >= 2) {
                return true;
            }
        } else {
            // Otherwise, store the index of the first time we see this mod
            hash[mod] = i;
        }
    }

    return false; // no valid subarray found
}


//Example Test Cases
console.log(checkSubarraySum([1, 2, 3, 4], 7));            // true → [3, 4] = 7
console.log(checkSubarraySum([2, 6, 30, 1, 2, 3, 8], 6));  // true → [30, 1, 2, 3] = 36
console.log(checkSubarraySum([1, 2], 4));                  // false → no valid subarray
console.log(checkSubarraySum([5, 0, 0, 0], 3));            // true → [0, 0] = 0
console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));        // true → [2, 4] = 6
