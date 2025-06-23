/*

Problem Description:
Given an array of integers `nums`, return the majority element.
The majority element is the element that appears **more than ⌊n / 2⌋ times**.
It is guaranteed that such an element always exists in the input array.

Examples:
majorityElement([1, 2, 2, 2, 2, 2, 3]) => 2
majorityElement([3, 3, 4]) => 3
majorityElement([1, 1, 1, 2, 2]) => 1

Requirements:
The array contains at least one element
There is always one majority element
Time Complexity: O(n)
Space Complexity: O(n) (uses a hash map to count frequencies)

*/



function majorityElement(nums) {
    const hash = {}; // Hash map to store the frequency of each number

    // Count the occurrences of each number in the array
    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1; // If num not in hash, start at 0 and add 1
    }

    // Loop through the hash map to find the majority element
    for (let num in hash) {
        if (hash[num] > nums.length / 2) { // Check if count is more than n/2
            return +num; // Convert string key back to number and return
        }
    }

    return -1; // This line is never reached because the majority element is guaranteed
}

//Example Test Cases
console.log(majorityElement([1, 2, 2, 2, 2, 2, 3]));   // -> 2
console.log(majorityElement([3, 3, 4]));               // -> 3
console.log(majorityElement([1, 1, 1, 2, 2]));         // -> 1
console.log(majorityElement([5, 5, 5, 5, 1, 2, 3]));   // -> 5
console.log(majorityElement([7, 7, 7, 7, 7]));         // -> 7