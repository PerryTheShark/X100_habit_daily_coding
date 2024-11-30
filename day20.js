/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1; // The new length after removing elements equal to 'val'
    
    // Iterate through the array
    for (let i = 1; i < nums.length; i++) {
        // If the current element is not equal to 'val'
        if (nums[i] !== nums[i-1]) {
            // Place it at the 'k' position and increment 'k'
            nums[k] = nums[i];
            k++;
        }
    }
    console.log(k, nums.slice(0, k)); 
    return(k);
};

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
