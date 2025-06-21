/*

Problem Description:
Given a string s and an integer k, return the maximum number of vowels
found in any substring of s with length k.

Example:
s = "leetcode"
k = 3
Output: 2

Explanation:
Substrings of length 3: "lee", "eet", "etc", "tco", "cod", "ode"
Maximum vowels in any of these substrings is 2.

Requirements:
Use Sliding Window technique
Time Complexity: O(n)
Space Complexity: O(1)

*/



function maxVowels(str, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']); // Set to check if a letter is a vowel quickly
    let count = 0;       // Current number of vowels in the sliding window
    let maxCount = 0;    // Maximum number of vowels found in any window

    //Count vowels in the first window of size k
    for (let i = 0; i < k; i++) {
        if (vowels.has(str[i].toLowerCase())) { // Check if character is a vowel
            count++; // Increase count if it is a vowel
        }
    }

    maxCount = count; // Set initial maxCount from the first window

    //Slide the window from left to right
    for (let i = k; i < str.length; ++i) {
        // Remove the character that is leaving the window
        if (vowels.has(str[i - k].toLowerCase())) {
            --count; // Decrease vowel count if it was a vowel
        }
        
        // Add the new character that enters the window
        if (vowels.has(str[i].toLowerCase())) {
            ++count; // Increase vowel count if it is a vowel
        }

        // Update maxCount if the current window has more vowels
        maxCount = Math.max(maxCount, count);
    }

    return maxCount; // Return the maximum number of vowels found
}


// Example Test Cases:
console.log(maxVowels("leetcode", 3));          // 2 -> "lee"
console.log(maxVowels("aeiouaeiou", 5));        // 5 -> "aeiou"
console.log(maxVowels("rhythm", 2));            // 0 -> no vowels
console.log(maxVowels("hello world", 4));       // 2 -> "ello"
console.log(maxVowels("programming", 6));       // 2 -> "ogramm"
