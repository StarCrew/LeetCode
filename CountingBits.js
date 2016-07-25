/**
 * Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num 
 * calculate the number of 1's in their binary representation and return them as an array.
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
     var countBits=[];
      
    countBits[0] = 0;  
      
    for (var i=1; i<=num; i++)  
    {  
        if (i%2)  
            countBits[i] = countBits[Math.floor(i/2)]+1;  
        else  
            countBits[i] = countBits[Math.floor(i/2)];  
    }  
      
    return countBits;  
};
