/*

Problem Description:
Given an array `arr` representing wall heights, find two walls that can contain the maximum area of water.
The area is calculated as the distance between the walls multiplied by the minimum of the two heights.

Examples:
arr = [1, 2, 8, 4, 5, 6, 9, 2] => Output: 32

Requirements:
Use Two Pointer approach
Time Complexity: O(n)
Space Complexity: O(1)

*/



function maxWaterArea(arr) {
    let left = 0;                  // Left pointer starting at beginning
    let right = arr.length - 1;    // Right pointer starting at end
    let maxArea = 0;               // To store the max area found

    while (left < right) {
        const height = Math.min(arr[left], arr[right]); // Height limited by shorter wall
        const width = right - left;                      // Distance between walls
        const area = height * width;                     

        maxArea = Math.max(maxArea, area);               // Update max area if current is bigger

        // Move the pointer at the shorter wall inward to try to find a taller wall
        if (arr[left] < arr[right]) {
            ++left;
        } else {
            --right;
        }
    }

    return maxArea;  // Return the maximum water area found
}

// Example Test Cases
console.log(maxWaterArea([1, 2, 8, 4, 5, 6, 9, 2]));    // -> 32
console.log(maxWaterArea([1, 1]));                      // -> 1
console.log(maxWaterArea([4, 3, 2, 1, 4]));             // -> 16
console.log(maxWaterArea([1, 2, 1]));                   // -> 2
console.log(maxWaterArea([2, 3, 10, 5, 7, 8, 9]));      // -> 36
