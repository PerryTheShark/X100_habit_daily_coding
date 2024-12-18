/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(arr, d) {
    let n = arr.length;

    // Handle case when d > n
    d %= n;
  
    // Storing rotated version of array
    let temp = new Array(n);

    // Copy last d elements to the front of temp
    for (let i = 0; i < d; i++) {
        temp[i] = arr[n - d + i];
    }

    // Copy the first n - d elements to the back of temp
    for (let i = 0; i < n - d; i++) {
        temp[i + d] = arr[i];
    }

    // Copying the elements of temp in arr
    // to get the final rotated array
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
};

//https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150