/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0 || n === 1)
        return 1;
    let preStep = 1;
    let prePreStep = 1;
    for (let i = 2; i < n; i++) {
        preStep += prePreStep;
        prePreStep = preStep - prePreStep;
    }
    return preStep + prePreStep;
};