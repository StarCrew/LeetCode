/**
 * Given an integer, write a function to determine if it is a power of two.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    var i = 1;
    while (true)
    {
        if (i > n){
           return false; 
        }
        if (i === n){
            return true;
        }
        i = i * 2;
    }
};
