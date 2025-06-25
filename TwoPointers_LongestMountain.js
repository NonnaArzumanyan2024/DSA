/*

Problem Description:
Given an array of positive integers `nums`, find the length of the longest mountain subarray.
A mountain is defined as a sequence of **at least 3 elements** where elements strictly increase 
to a peak and then strictly decrease after the peak.

Examples:
longestMountain([2, 1, 4, 7, 3, 2, 5]) => 5        // [1, 4, 7, 3, 2]
longestMountain([2, 2, 2]) => 0                   // No mountain
longestMountain([1, 2, 3, 4, 3, 2, 1, 0, 10]) => 7 // [1, 2, 3, 4, 3, 2, 1]
longestMountain([0, 1, 0]) => 3                   // [0, 1, 0]
longestMountain([1, 3, 2, 4, 6, 3, 2, 1, 0]) => 6  // [2, 4, 6, 3, 2, 1]

Requirements:
Use two-pointer technique
Time Complexity: O(n)
Space Complexity: O(1)

*/



function longestMountain(nums) {
    let maxLen = 0;
    let i = 1;

    while (i < nums.length - 1) {
        // Check if nums[i] is a peak (greater than neighbors)
        if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
            let left = i - 1;
            let right = i + 1;

            // Expand to the left
            while (left > 0 && nums[left - 1] < nums[left]) {
                --left;
            }

            // Expand to the right
            while (right < nums.length - 1 && nums[right] > nums[right + 1]) {
                ++right;
            }

            // Calculate mountain length and update max
            maxLen = Math.max(maxLen, right - left + 1);

            // Move i to the end of this mountain
            i = right;
        } else {
            ++i;
        }
    }

    return maxLen;
}

// Example Test Cases
console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));        // 5
console.log(longestMountain([2, 2, 2]));                    // 0
console.log(longestMountain([1, 2, 3, 4, 3, 2, 1, 0, 10])); // 7
console.log(longestMountain([0, 1, 0]));                    // 3
console.log(longestMountain([1, 3, 2, 4, 6, 3, 2, 1, 0]));  // 6
