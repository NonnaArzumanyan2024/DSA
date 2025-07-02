/*

(Similar LeetCode Problem: 875. Koko Eating Bananas)

Problem Description:
Ani wants to eat all chocolates in h hours.
Each box[i] represents the chocolates in the i-th box.
She can eat up to k chocolates per hour from one box.
Find the minimum k that allows her to finish in h hours.

Requirements:
Use Binary Search
Time Complexity: O(n log m), where m is the max number in box
Space Complexity: O(1)

*/



function minEatingSpeed(box, h) {

    // Helper function: returns how many hours Ani needs with a given speed k
    function hoursNeeded(k) {
        let totalHours = 0;

        for (let chocolates of box) {
            // Round up each box division to full hour using Math.ceil
            totalHours += Math.ceil(chocolates / k);
        }

        return totalHours;
    }

    let left = 1;                   // Minimum possible eating speed
    let right = Math.max(...box);   // Maximum possible eating speed (biggest box)
    let minSpeed = right;             // Store best result found

    // Binary search to find the minimum valid speed
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Try middle speed
        const hours = hoursNeeded(mid);           // Calculate hours for this speed

        if (hours <= h) {
            minSpeed = mid;         // This speed is enough, try to find smaller
            right = mid - 1;
        } else {
            left = mid + 1;       // Too slow! Try faster speed
        }
    }

    return minSpeed; // Return the smallest valid speed
}

// Example Usage and Tests:

console.log(minEatingSpeed([3, 6, 7, 11], 8));       // Output: 4
// Ani can eat all chocolates in 8 hours if she eats 4 per hour

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // Output: 30
// She needs to eat entire boxes quickly (one per hour)

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // Output: 23
// With 6 hours available, she can slow down a bit

console.log(minEatingSpeed([10], 2));                // Output: 5
// One box, two hours → eat 5 per hour

console.log(minEatingSpeed([1, 1, 1, 1], 4));         // Output: 1
// Each box takes one hour with speed 1 → perfect fit

