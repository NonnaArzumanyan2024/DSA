/*

Problem Description:
Given an array of positive integers `nums` and a positive integer `target`,
find the length of the smallest contiguous subarray whose sum is
greater than or equal to `target`. If there is no such subarray, return 0.

Example:
Input: nums = [2, 3, 1, 5, 4, 8], target = 6
Output: 2
Explanation: The subarray [1, 5] has a sum of 6 and is the shortest subarray that meets the requirement.

Requirements:
Use Sliding Window technique
Time Complexity: O(n)
Space Complexity: O(1)

*/



function minSubArrayLen(target, nums) {
    let start = 0;            // Left pointer of the window
    let sum = 0;              // Current window sum
    let minLen = Infinity;    // Track the smallest valid window length

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];     // Add current number to the window

        // Shrink window while sum is enough (>= target)
        while (sum >= target) {
            // Update the minimum length if current window is smaller
            minLen = Math.min(minLen, end - start + 1);
            sum -= nums[start]; // Remove the leftmost number
            start++;            // Move the window forward
        }
    }

    // If we found no valid subarray, return 0
    return minLen === Infinity ? 0 : minLen;
}



//Example Test Cases:
console.log(minSubArrayLen(6, [2, 3, 1, 5, 4, 8]));      // 2->[1, 5]
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));        // 3->[3, 4, 5]
console.log(minSubArrayLen(4, [1, 4, 4]));               // 1->[4]
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));        // 5->[1, 2, 3, 4, 5]
console.log(minSubArrayLen(100, [1, 2, 3, 4, 5]));       // 0->No subarray meets the condition
