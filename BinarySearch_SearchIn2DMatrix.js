/*

Similar LeetCode Problem: 74. Search a 2D Matrix

Problem Description:
You are given a 2D matrix where:
Each row is sorted in ascending order
The first integer of each row is greater than the last integer of the previous row

You are also given a target integer.
Your task is to return true if the target exists in the matrix, otherwise return false.

Requirements:
Use Binary Search in O(log m * n) time
Time Complexity: O(log m * n)
Space Complexity: O(1)

Example:
matrix = [
 [1,  2,  3,  4],
 [5,  6,  7,  8],
 [9, 10, 11, 12],
 [13,14, 15,16]
]
target = 7  => Output: true

*/



function searchMatrix(matrix, target) {
    // If matrix is empty or first row is empty, target cannot be found
    if (!matrix.length || !matrix[0].length) return false;

    // Step 1: Find the row that may contain the target using binary search
    function findRow() {
        let left = 0;
        let right = matrix.length - 1;

        // While search range is valid
        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            // If target is less than first element of mid row,
            // it must be in an earlier row
            if (target < matrix[mid][0]) {
                right = mid - 1;

            // If target is >= first element of mid row
            // and less than first element of next row,
            // target must be in this row
            } else if (mid + 1 < matrix.length && target < matrix[mid + 1][0]) {
                return mid;

            // Otherwise, target is in a later row
            } else {
                left = mid + 1;
            }
        }

        // When left meets right, that's the row target could be in
        return left;
    }

    // Step 2: Search inside the found row for the target with binary search
    function findTarget(row) {
        let left = 0;
        let right = matrix[0].length - 1;

        // While search range is valid
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            // If target found at mid, return true immediately
            if (matrix[row][mid] === target) return true;

            // If target is less, search left half of the row
            if (matrix[row][mid] > target) {
                right = mid - 1;

            // If target is more, search right half of the row
            } else {
                left = mid + 1;
            }
        }

        // Target not found in the row
        return false;
    }

    // First find the row where target could be, then search inside it
    const row = findRow();
    return findTarget(row);
}


// Example Usage and Test Cases

console.log(searchMatrix([
 [1, 2, 3, 4],
 [5, 6, 7, 8],
 [9, 10, 11, 12],
 [13, 14, 15, 16]
], 7)); // true

console.log(searchMatrix([
 [1, 3, 5],
 [7, 9, 11]
], 6)); // false

console.log(searchMatrix([
 [1, 2],
 [3, 4]
], 1)); // true

console.log(searchMatrix([
 [1]
], 1)); // true

console.log(searchMatrix([], 5)); // false
