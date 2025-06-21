/*

Problem Description:
Given an array nums and an integer k, return true if there are two indices i and j
such that nums[i] == nums[j] and the absolute difference between i and j is at most k.

Example:
nums = [1, 2, 3, 4, 3, 2, 5]
k = 3
Output: true

Requirements:
Time Complexity: O(n)
Space Complexity: O(k)
Use Sliding Window technique with Set

*/

function containsNearbyDuplicate(nums, k) {
    const window = new Set(); // Create a sliding window using Set to store unique values

    for (let i = 0; i < nums.length; ++i) {
        if (window.has(nums[i])) {
            return true; // If current number already exists in the window, duplicate found
        }

        window.add(nums[i]); // Add current number to the window

        // If window size exceeds k, remove the oldest element from the window
        if (window.size > k) {
            window.delete(nums[i - k]); // Maintain the sliding window size of at most k
        }
    }

    return false; // No duplicate found within the distance k
}


// Example Test Cases:
console.log(containsNearbyDuplicate([1, 2, 3, 4, 3, 2, 5], 3)); // true (3 repeats within 3 steps)
console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6], 2));    // false (no duplicates)
console.log(containsNearbyDuplicate([1, 1, 1, 1], 1));          // true (1 repeats right next to each other)
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));          // true (1 appears again 3 indices apart)
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));          // true (1 repeats at distance 1)

