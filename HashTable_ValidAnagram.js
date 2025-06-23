/*

Problem Description:
Given two strings `str` and `text`, return `true` if `text` is an anagram of `str`,
and `false` otherwise.

An anagram is formed by rearranging the letters of `str` to get `text`,
so both must contain exactly the same characters with the same frequency.

Example:
str = "armen", text = "nmera" -> Output: true
str = "armen", text = "nemrak" -> Output: false

Requirements:
Use Hash Table (Object or Map)
Time Complexity: O(n)
Space Complexity: O(n)

*/



function isAnagram(str, text) {
    if (str.length !== text.length) return false; // Quick length check to rule out different lengths

    const hash = {}; // Object to store frequency counts of characters in str

    // Count frequency of each character in `str`
    for (let char of str) {
        hash[char] = (hash[char] || 0) + 1; // Increment count or initialize to 1 if first occurrence
    }

    // For each character in `text`, decrement the count in hash
    for (let char of text) {
        if (hash[char] === undefined || hash[char] === 0) {
        // If char not found or count is zero, `text` cannot be an anagram of `str`
        return false;
        }
        
        --hash[char];  // Decrease count for matched character
    }

    // If all character counts match, `text` is an anagram of `str`
    return true;
}

// Example Test Cases:
console.log(isAnagram("armen", "nmera"));   // true
console.log(isAnagram("armen", "nemrak"));  // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("abc", "cab"));       // true
console.log(isAnagram("abc", "abcd"));      // false
