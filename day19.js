/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; // The new length after removing elements equal to 'val'
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to 'val'
        if (nums[i] !== val) {
            // Place it at the 'k' position and increment 'k'
            nums[k] = nums[i];
            k++;
        }
    }

    // Log the new length and the modified array
    console.log(k, nums.slice(0, k)); // Only show the first 'k' elements
    return k; // Return the new length
};
// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
