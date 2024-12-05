
var removeDuplicates = function(nums) {
    let k = 0;
    let length = nums.length;
    for (let i = 1; i <= length; i++) {
        if (nums[i] != nums[i-1] ) {
            ++k;
            nums[k] = nums[i];
        }
    }
    return k;
};

//https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150