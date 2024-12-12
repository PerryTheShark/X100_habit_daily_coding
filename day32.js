/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(a) {
        let len = 0;
 
    // String a is 'final'-- can
    // not be modified So, create
    // a copy and trim the
    // spaces from both sides
    x = a.trim();
 
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') {
            len = 0;
        }
        else {
            len++;
        }
    }
 
    return len;
};

//https://leetcode.com/problems/length-of-last-word/submissions/1477007600/?envType=study-plan-v2&envId=top-interview-150
