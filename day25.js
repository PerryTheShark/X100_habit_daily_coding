
var removeDuplicates = function(nums) {
    let k = 0;
    let length = nums.length;
    for (let i = 1; i <= length; i++) {
        console.log(i, " ", nums[i]);
        if (nums[i] != nums[i-1] ) {
            ++k;
            nums[k] = nums[i];
        }
    }
    console.log(k, nums);
    return k;
};

//https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150

let nums = [0,0,1,1,1,2,2,3,3,4];

removeDuplicates(nums);

console.log(10);
