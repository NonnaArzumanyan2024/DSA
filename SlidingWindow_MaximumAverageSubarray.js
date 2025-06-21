/*

Problem Description:
Given an array of integers `nums` and an integer `k`, find the maximum average
value among all contiguous subarrays of length `k`.
Return the maximum average as a floating point number.

Example:
Input: nums = [1, 2, 1, 8, 4, 3, 1], k = 3
Output: 5
Explanation: The subarray [8, 4, 3] has the largest average: (8+4+3)/3 = 5

Requirements:
Use Sliding Window technique
Time Complexity: O(n)
Space Complexity: O(1)

*/



function maxAverage(nums, k) {
    let sum = 0;

    // Calculate the sum of the first window of size k
    for (let i = 0; i < k; ++i) {
        sum += nums[i];
    }

    let maxSum = sum;

    // Slide the window forward
    for (let end = k; end < nums.length; ++end) {
        sum += nums[end] - nums[end - k];  // Add rightmost, remove leftmost
        maxSum = Math.max(maxSum, sum);   // Track max sum
    }

    return maxSum / k; // Return the max average
}


//Example Test Cases:
console.log(maxAverage([1, 2, 1, 8, 4, 3, 1], 3)); // Output: 5 -> (8 + 4 + 3) / 3 = 5
console.log(maxAverage([5, 5, 5, 5, 5], 2)); // Output: 5 -> (5 + 5) / 2 = 5
console.log(maxAverage([1, 12, -5, -6, 50, 3], 4)); // Output: 12.75 -> (12 - 5 - 6 + 50) / 4 = 12.75
console.log(maxAverage([10, 20, 30, 40], 4)); // Output: 25 -> (10 + 20 + 30 + 40) / 4 = 25
console.log(maxAverage([3, 1, 4, 1, 5, 9], 1)); // Output: 9 -> window size 1, max element is 9