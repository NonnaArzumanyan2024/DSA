/*

Problem Description:
Find the nearest prime number to a given number
A number is prime if it is divisible only by 1 and itself.
Given a number, return the closest prime number.
If there are two primes equally distant from the number,return the larger one.

Requirements:
Time Complexity: O(√n) per prime check, total time depends on distance to nearest prime
Space Complexity: O(1)

*/



function nearestPrime(num) {
    // Helper function to check if a number is prime
    function isPrime(n) {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        const limit = Math.sqrt(n);
        for (let i = 3; i <= limit; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    // Edge case: smallest prime is 2
    if (num <= 2) return 2;

    let left = num - 1;
    let right = num + 1;

    // Use two-pointer technique to search both directions
    while (true) {
        const leftIsPrime = isPrime(left);
        const rightIsPrime = isPrime(right);

        if (leftIsPrime && rightIsPrime) return right; // both same distance, prefer bigger
        if (rightIsPrime) return right;
        if (leftIsPrime) return left;

        --left;
        ++right;
    }
}

// Example test cases
console.log(nearestPrime(17));  // Output: 19
console.log(nearestPrime(930)); // Output: 929
console.log(nearestPrime(2));   // Output: 3
console.log(nearestPrime(1));   // Output: 2




