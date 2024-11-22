/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function trimLeadingZeros(s) {
    
    // Find the position of the first '1'
    let firstOne = s.indexOf('1');
    return (firstOne === -1) ? "0" : s.substring(firstOne);
}

var addBinary = function(s1, s2) {
        
    // Trim leading zeros
    s1 = trimLeadingZeros(s1);
    s2 = trimLeadingZeros(s2);

    let n = s1.length;
    let m = s2.length;

    // Swap the strings if s1 is of smaller length
    if (n < m) {
        return addBinary(s2, s1);
    }

    let j = m - 1;
    let carry = 0;
    let result = [];

    // Traverse both strings from the end
    for (let i = n - 1; i >= 0; i--) {

        // Current bit of s1
        let bit1 = s1[i] - '0';
        let sum = bit1 + carry;

        // If there are remaining bits in s2, add them to the sum
        if (j >= 0) {
            // Current bit of s2
            let bit2 = s2[j] - '0';
            sum += bit2;
            j--;
        }

        // Calculate the result bit and update carry
        let bit = sum % 2;
        carry = Math.floor(sum / 2);

        // Update the current bit in result
        result.push(bit);
    }

    // If there's any carry left, prepend it to the result
    if (carry > 0) {
        result.push(1);
    }

    return result.reverse().join('');
};  