/*

Problem Description:
Given strings `str` and `pstr`, where `pstr` is a random shuffle of `str`
with one extra character added, return the extra character.

Example:
str = "abc", pstr = "baec" → Output: "e"

Requirements:
Use Hash Table (Object or Map)
Time Complexity: O(n)
Space Complexity: O(n)

*/

function findExtraChar(str, pstr) {
    const hash = {};  // Hash table to store the count of each character in `str`

    // Step 1: Count each character in the original string `str`
    for (let char of str) {
        hash[char] = (hash[char] || 0) + 1; // If char not in hash, initialize with 1; else increment
    }

    // Step 2: Check each character in `pstr` against the hash table
    for (let char of pstr) {
        if (!hash[char]) {
            return char; // Found the extra character not present in `str` or used up
        } else {
            --hash[char]; // Decrease count for matched character
        }
    }

    // If all characters matched and reduced correctly, this won't run
    return "";
}

// Example Test Cases:
console.log(findExtraChar("abc", "baec"));       // "e"
console.log(findExtraChar("xyz", "xzyq"));       // "q"
console.log(findExtraChar("aabb", "abbac"));     // "c"
console.log(findExtraChar("hello", "hleloa"));   // "a"
console.log(findExtraChar("mjs", "sjmy"));       // "y"
