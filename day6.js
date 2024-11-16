/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    str = String(x);
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
};

//https://leetcode.com/problems/palindrome-number/?envType=study-plan-v2&envId=top-interview-150