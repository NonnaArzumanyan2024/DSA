/*

Similar LeetCode Problem: 1539. Kth Missing Positive Number

Problem Description:
You are given a sorted array of positive integers called nums, and a number k.
Some positive integers are missing from nums.
Your task is to return the k-th missing number in ascending order.

Requirements:
Use binary search
Time Complexity: O(log n)
Space Complexity: O(1)

Example 1:
nums = [1,2,5,7,9], k = 2
Missing numbers = [3,4,6,8,...] => 2nd missing = 4

Example 2:
nums = [1,2,3,4], k = 3
Missing numbers = [5,6,7,...] => 3rd missing = 7

*/


function findKthMissing(nums, k) {
    let left = 0;
    let right = nums.length - 1;

    // Binary search for smallest index where missing count >= k
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Number of missing elements before nums[mid]
        let missing = nums[mid] - (mid + 1);

        if (missing < k) {
            left = mid + 1; // Not enough missing numbers yet, go right
        } else {
            right = mid - 1; // Too many missing, go left
        }
    }

    // Final answer: left + k gives the k-th missing number
    return left + k;
}

// Example Usage and Test Cases:
console.log(findKthMissing([1,2,5,7,9], 2)); // 4
console.log(findKthMissing([1,2,3,4], 3));   // 7
console.log(findKthMissing([2,3,4], 1));     // 1
console.log(findKthMissing([5,6,7,10], 4));  // 8
console.log(findKthMissing([1,3,4,6], 2));   // 5
