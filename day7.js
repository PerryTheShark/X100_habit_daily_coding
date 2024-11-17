digit = [9];

var plusOne = function(digits) {
    let n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0;
            if(i == 0) {
                digits[i] = 1;
                digits.push(0);
            }
        } else {
            digits[i] += 1;
            break;
        }
    }
    
    return digits;
};

console.log(plusOne(digit));
// https://leetcode.com/problems/plus-one/submissions/1455383134/?envType=study-plan-v2&envId=top-interview-150