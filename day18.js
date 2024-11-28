/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // base case
    if(s.length > t.length) return false;
    if(!s) return true;

    let i = 0, j = 0;

    while(i < s.length && j < t.length) {
        if(s[i] == t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    return i === s.length;
};

// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150