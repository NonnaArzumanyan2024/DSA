/*

Problem Description:
Given a string `str`, compress the string by counting the number of times
each character appears, and output a string where each character is
preceded by its count **if** the count is greater than 1. If the character appears
only once, just include the character without a number.

Example:
Input: "aaaabbbcdd"
Output: "4a3bc2d"

Input: "abbbaac"
Output: "3a2bc"

Note: It doesn't matter if characters are adjacent or not.

Requirements:
Use Hash Table (Map or Object)
Time Complexity: O(n)
Space Complexity: O(n)

*/



function encodeString(str) {
    const hash = {}; // Object to store the frequency of each character
    let result = ""; // Final compressed string

    // Count frequency of each character in the string
    for (let char of str) {
        hash[char] = (hash[char] || 0) + 1;
    }

    // Build the result based on the frequency
    for (let char in hash) {
        if (hash[char] === 1) {
            result += char;           // If frequency is 1, just add the character
        } else {
            result += hash[char] + char; // If frequency > 1, add count + character
        }
    }

    return result;
}

// Test Cases
console.log(encodeString("aaaabbbcdd")); // "4a3bc2d"
console.log(encodeString("abbbaac"));    // "3a2bc"
console.log(encodeString("abc"));        // "abc"
console.log(encodeString("aabbcc"));     // "2a2b2c"
console.log(encodeString("cccccccc"));   // "8c"

