/*

Problem Description:
Given an array A representing the height of bars, compute how much water can be trapped between the bars after raining.

Example:
A = [3, 0, 1, 0, 4, 2]
Output: 8

Requirements:
Two Pointer approach
Time Complexity: O(n)
Space Complexity: O(1)

*/



function trapRainWater(arr) {
    let left = 0;
    let right = arr.length - 1;

    let leftMax = 0;   // Track the highest bar seen from the left
    let rightMax = 0;  // Track the highest bar seen from the right

    let totalWater = 0;  // Total trapped water

    while (left < right) {
        // Decide which side to process based on shorter boundary
        if (arr[left] < arr[right]) {
            if (arr[left] >= leftMax) {
                leftMax = arr[left];  // Update leftMax if current is higher
            } else {
                totalWater += leftMax - arr[left];  // Water trapped = leftMax - current height
            }
            ++left;  // Move left pointer inward
        } else {
            if (arr[right] >= rightMax) {
                rightMax = arr[right];  // Update rightMax if current is higher
            } else {
                totalWater += rightMax - arr[right];  // Water trapped = rightMax - current height
            }
            --right;  // Move right pointer inward
        }
    }

    return totalWater;  // Return the total trapped water
}

// Example Test Cases
console.log(trapRainWater([3, 0, 1, 0, 4, 2]));     // -> 8
console.log(trapRainWater([0, 1, 0, 2, 1, 0, 3]));  // -> 6
console.log(trapRainWater([2, 0, 2]));              // -> 2
console.log(trapRainWater([4, 2, 0, 3, 2, 5]));     // -> 9
console.log(trapRainWater([1, 2, 3, 4, 5]));        // -> 0
