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
Space Complexity: O(1) (uses Boyer-Moore Voting Algorithm)

*/



function majorityElement(nums) {
    let candidate = null;  // Potential majority element
    let count = 0;         // Count of the candidate

    for (let num of nums) {
        if (count === 0) {
            candidate = num;   // Pick new candidate
        }

        // Increase or decrease count based on current number
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;  // candidate is guaranteed to be majority element
}

//Example Test Cases
console.log(majorityElement([1, 2, 2, 2, 2, 2, 3]));   // -> 2
console.log(majorityElement([3, 3, 4]));               // -> 3
console.log(majorityElement([1, 1, 1, 2, 2]));         // -> 1
console.log(majorityElement([5, 5, 5, 5, 1, 2, 3]));   // -> 5
console.log(majorityElement([7, 7, 7, 7, 7]));         // -> 7
