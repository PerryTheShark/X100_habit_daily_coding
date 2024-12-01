/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minSoFar = prices[0];
    let res = 0;

    // Update the minimum value seen so far 
    // if we see smaller
    for (let i = 1; i < prices.length; i++) {
        minSoFar = Math.min(minSoFar, prices[i]);

        // Update result if we get more profit                
        res = Math.max(res, prices[i] - minSoFar);
    }
    return res;
};
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1467442059/?envType=study-plan-v2&envId=top-interview-150
