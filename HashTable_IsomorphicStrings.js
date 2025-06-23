/*

Problem Description:
Two strings `str1` and `str2` are called isomorphic if the characters in `str1` can be replaced to get `str2`.
Each character must map to exactly one character, and no two characters may map to the same character.

Examples:
isIsomorphic("abb", "cee") => true     // a -> c, b -> e
isIsomorphic("foo", "bar") => false    // o cannot map to both a and r
isIsomorphic("paper", "title") => true // p -> t, a -> i, e -> l, r -> e

Requirements:
Time Complexity: O(n), where n is the length of the strings
Space Complexity: O(1), constant space due to limited alphabet size
Strings must be the same length to be isomorphic

*/

function isIsomorphic(str1, str2) {
    // If lengths differ, they can't be isomorphic
    if (str1.length !== str2.length) return false;

    const hash1 = {}; // Maps characters from str1 to str2
    const hash2 = {}; // Maps characters from str2 to str1 (reverse check)

    for (let i = 0; i < str1.length; i++) {
        const char1 = str1[i]; // current character from str1
        const char2 = str2[i]; // corresponding character from str2

        // If str1's character was already mapped, check if it's consistent
        if (hash1[char1] && hash1[char1] !== char2) return false;

        // If str2's character was already mapped, check if it's consistent
        if (hash2[char2] && hash2[char2] !== char1) return false;

        // Store the new mapping in both directions
        hash1[char1] = char2;
        hash2[char2] = char1;
    }

    return true; // All character mappings are valid
}

//Example Test Cases
console.log(isIsomorphic("abb", "cee"));       // true -> a -> c, b -> e
console.log(isIsomorphic("foo", "bar"));       // false -> o maps to both a and r
console.log(isIsomorphic("paper", "title"));   // true -> p -> t, a -> i, etc.
console.log(isIsomorphic("egg", "add"));       // true -> e -> a, g -> d
console.log(isIsomorphic("abc", "ddd"));       // false -> b and c both map to d
