/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let arr_temp = [];
    for (let i = 0; i < m; i++) {
        arr_temp.push(nums1[i]);
    }
    let i = 0; 
    let j = 0;
    while (i < m || j < n) {
        if (arr_temp[i] < nums2[j] || j == n){
            nums1[i + j] = arr_temp[i];
            ++ i;
        } else {
            nums1[i + j] = nums2[j];
            ++ j;
        }
    }
};