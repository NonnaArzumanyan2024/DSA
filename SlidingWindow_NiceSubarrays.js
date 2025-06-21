/*

Problem Description:
Given an array nums and an integer k, return the number of subarrays
that contain exactly k odd numbers.

Example:
Input: nums = [1,2,1,1,2,3], k = 3
Output: 3

Requirements:
Use sliding window technique
Time Complexity: O(n)
Space Complexity: O(1)

*/



function numberOfSubarrays(nums, k) {
    // Helper function to count subarrays with AT MOST k odd numbers
    function atMostKOdds(nums, k) {
        let left = 0;
        let count = 0;     // Total number of valid subarrays
        let oddCount = 0;  // Number of odd numbers in the current window

        for (let right = 0; right < nums.length; ++right) {
            // If current number is odd, increase the odd count
            if (nums[right] % 2 === 1) {
                ++oddCount;
            }

            // If window has more than k odd numbers, move left pointer to reduce it
            while (oddCount > k) {
                if (nums[left] % 2 === 1) {
                    --oddCount;  // Remove one odd number from the window
                }
                ++left;  // Shrink the window from the left
            }

            // All subarrays ending at `right` and starting from `left` to `right` are valid
            count += right - left + 1;
        }

        return count;
    }

    // Subarrays with exactly k odd numbers =
    // subarrays with at most k odd numbers - subarrays with at most (k - 1) odd numbers
    return atMostKOdds(nums, k) - atMostKOdds(nums, k - 1);
}


// Example Test Cases:
console.log(numberOfSubarrays([1,2,1,1,2,3], 3)); // 3
console.log(numberOfSubarrays([1,1,2,1,1], 3));   // 2
console.log(numberOfSubarrays([2,4,6], 1));       // 0
console.log(numberOfSubarrays([1,3,5], 1));       // 3
console.log(numberOfSubarrays([1,2,3,4,5], 2));   // 4

