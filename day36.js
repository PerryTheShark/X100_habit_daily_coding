/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;
    let length = nums.length;
    if(length < 2) return length;
    for (let i = 2; i <= length; i++) {
        if (nums[i] != nums[k-1] ) {
            ++k;
            nums[k] = nums[i];
        }
    }
    return k;
};

//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/submissions/1480283393/?envType=study-plan-v2&envId=top-interview-150