/**
 * Given two binary strings, return their sum (also a binary string).
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var sum = "";  
    var alen = a.length - 1;  
    var blen = b.length - 1;  
    var carry = 0;  
    while (alen >= 0 || blen >= 0) {  
        var v = carry;  
        if (alen >= 0){
            v += a[alen] - 0;
        } 
        if (blen >= 0){
            v += b[blen] - 0;
        }
        carry = Math.floor(v/2);
        v = Math.floor(v%2);
        sum = v+sum; 
        alen--;  
        blen--;  
    }
    if(carry === 1){
        sum="1"+sum;
    }
    return sum; 
};
