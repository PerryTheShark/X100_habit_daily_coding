/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let dn = 0; // variable for new decimal number
    let j = 30; // initial value of j
    // loop to find the reversede binary bit
    for (let i = 0; i < 32; ++i) {
      let k = (n >> i) & 1; // k will be the required bit
      if (k) { // if bit is set then only convert in
        // decimal
        if (j == -1) { // since if j = -1 then left
          // shift operator will not work
          dn = Math.abs(dn) + Math.pow(2, 0);
        } else {
          dn = Math.abs(dn) + (2 << j); // here left shift operator
          // calculates 2 to power j
          // for making code efficient
        }
      }
      j--; // j is decreased in each iteration
    }
    return Math.abs(dn);   
  };

  //https://leetcode.com/problems/reverse-bits/?envType=study-plan-v2&envId=top-interview-150