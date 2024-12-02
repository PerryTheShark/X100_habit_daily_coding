/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(arr) {
        let n = arr.length;  

    // Loop to consider each element as a candidate for majority
    for (let i = 0; i < n; i++) {
        let count = 0;

        // Inner loop to count the frequency of arr[i]
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        // Check if count of arr[i] is more than half the size of the array
        if (count > n / 2) {
            return arr[i];
        }
    }

    // If no majority element found, return -1
    return -1;
};
