/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr) {
        // Sort the array of strings
    arr.sort();

    // Get the first and last strings after sorting
    let first = arr[0];
    let last = arr[arr.length - 1];
    let minLength = Math.min(first.length, last.length);

    let i = 0;
    
    // Find the common prefix between the first and 
    // last strings
    while (i < minLength && first[i] === last[i]) {
        i++;
    }

    // Return the common prefix
    return first.substring(0, i);
};
