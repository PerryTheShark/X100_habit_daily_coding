/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, y) {
    var temp;
    
    if (y == 0)
        return 1;
        
    temp = myPow(x, parseInt(y / 2));

    if (y % 2 == 0)
        return temp * temp;
    else
    {
        if (y > 0)
            return x * temp * temp;
        else
            return (temp * temp) / x;
    }
};