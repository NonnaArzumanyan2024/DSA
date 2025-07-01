/*

(LeetCode 724. Find Pivot Index)

Problem Description:
You are given an array of integers called `nums`.
Find the pivot index where the sum of all the numbers strictly to the left 
of the index is equal to the sum of all the numbers strictly to the right.
If no such index exists, return -1.

Requirements:
Use prefix sum technique
Time Complexity: O(n)
Space Complexity: O(1)

*/



function PivoteIndex(nums) {
    let leftSum = 0;
    let rightSum = 0;

    // Calculate the total sum except the first element
    for (let i = 1; i < nums.length; ++i) {
        rightSum += nums[i];
    }

    // Go through each pivot
    for (let pivot = 0; pivot < nums.length; ++pivot) {
        if (leftSum === rightSum) return pivot;

        leftSum += nums[pivot];

        // Only subtract if not at the last index
        if (pivot + 1 < nums.length) {
            rightSum -= nums[pivot + 1];
        }
    }

    return -1;
}


//Example Test Cases
console.log(PivoteIndex([1, 2, 3, 4, -1]));       // 2
console.log(PivoteIndex([2, 3, -1, 2, 2]));       // 1
console.log(PivoteIndex([1, 7, 3, 6, 5, 6]));     // 3
console.log(PivoteIndex([1, 2, 3]));              // -1
console.log(PivoteIndex([0, 0, 0, 0]));           // 0
