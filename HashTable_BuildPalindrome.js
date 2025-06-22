/*

Problem Description:
Given a string `str`, return `true` if it's possible to rearrange its characters (shuffle)
to form a palindrome. Otherwise, return `false`.

Example:
Input: "bbcac"
Output: true  // can become "bcacb", which is a palindrome

Input: "falv"
Output: false // no rearrangement can make it a palindrome

Requirements:
Use Hash Table to count character frequencies.
Time Complexity: O(n)
Space Complexity: O(n)

*/



function canFormPalindrome(str) {
    const hash = {}; // Hash table to store the frequency of each character
    let oddCount = 0; // Count how many characters appear an odd number of times
    
    // Count frequency of each character in the string
    for (let char of str) {
        hash[char] = (hash[char] || 0) + 1;
    }

    // Loop through frequencies to find how many odd-count characters there are
    for (let char in hash) {
        if (hash[char] % 2 !== 0) {
            ++oddCount;
        }
    }

    // A string can form a palindrome if at most one character has an odd count
    return oddCount <= 1;
}

//Example Test Cases:
console.log(canFormPalindrome("bbcac"));   // true
console.log(canFormPalindrome("falv"));    // false
console.log(canFormPalindrome("aabb"));    // true
console.log(canFormPalindrome("aabbc"));   // true
console.log(canFormPalindrome("abcde"));   // false
