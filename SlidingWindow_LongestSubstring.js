function longestUniqueSubstring(str) {
    let start = 0;           // Left pointer of the window
    let maxLength = 0;       // Length of the longest substring found
    let maxStart = 0;        // Start index of the longest substring
    let seen = new Set();    // Set to store unique characters

    for (let end = 0; end < str.length; ++end) {
        // If character already in set, shrink window from the left
        while (seen.has(str[end])) {
            seen.delete(str[start]);
            ++start;
        }

        // Add current character to the set
        seen.add(str[end]);

        // Update max substring info if current window is longer
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxStart = start;
        }
    }

    // Return the longest substring without repeating characters
    return str.substring(maxStart, maxStart + maxLength);
}


// Example Test Cases:
console.log(longestUniqueSubstring("abcabcbb"));    // "abc"
console.log(longestUniqueSubstring("bbbbb"));       // "b"
console.log(longestUniqueSubstring("pwwkew"));      // "wke"
console.log(longestUniqueSubstring(""));            // ""
console.log(longestUniqueSubstring("abcdefg"));     // "abcdefg"

