/*

Problem Description:
You are in a fruit garden where trees are planted in a row.
Each tree produces exactly one type of fruit, represented by an integer in the array `fruits`.

You have 2 baskets, and each basket can only hold a single type of fruit.
You start at any tree and move only to the right, collecting one fruit from each tree.
You must stop collecting when you encounter a third fruit type that doesn't fit in your baskets.

Your task is to return the maximum number of fruits you can collect under these rules.

Example:

Input: fruits = [1, 2, 1]
Output: 3
Explanation: You can collect all three fruits: 1 (basket1), 2 (basket2), 1 (basket1 again)

Input: fruits = [1, 2, 3, 2, 2]
Output: 4
Explanation: You can collect [2, 3, 2, 2] using baskets for fruit types 2 and 3.

Requirements:
Use the Sliding Window technique
Use a Map to count fruit types
Time Complexity: O(n)
Space Complexity: O(1) (at most 2 fruit types in the basket)

*/



function task(fruits) {
    let start = 0;
    let maxFruits = 0;
    let basket = new Map(); // Stores fruit type as key and count as value

    for (let end = 0; end < fruits.length; ++end) {
        basket.set(fruits[end], (basket.get(fruits[end]) || 0) + 1);

        // Shrink window if more than 2 fruit types in basket
        while (basket.size > 2) {
            basket.set(fruits[start], basket.get(fruits[start]) - 1);

            if (basket.get(fruits[start]) === 0) {
                basket.delete(fruits[start]); // Remove fruit type if count becomes 0
            }

            ++start; // Move window start to the right
        }

        // Update the maximum number of fruits collected
        maxFruits = Math.max(maxFruits, end - start + 1);
    }

    return maxFruits;
}


//Example Test Cases:
console.log(task([1, 2, 1]));                         // 3
console.log(task([0, 1, 2, 2]));                      // 3
console.log(task([1, 2, 3, 2, 2]));                   // 4
console.log(task([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5
console.log(task([1, 0, 1, 4, 1, 4, 1, 2, 3]));       // 5
