/**
 * Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;  
    while (n) {  
        if (Math.ceil(n % 2) === 1) {  
            ++count;  
        }  
        n=Math.floor(n / 2);  
    }  
    return count;  
};
