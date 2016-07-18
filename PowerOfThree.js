/**
 * Given an integer, write a function to determine if it is a power of three.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n<=0){
        return false;
    }
    var logAns=Math.log(n) / Math.log(3);
    return Math.abs(logAns- Math.ceil(logAns))< 0.0000000001;
};
