/**
 * Count the number of prime numbers less than a non-negative number, n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var countPrimes=0;
    for(var i=2;i<n;i++){
        var k=Math.floor(Math.sqrt(i));
        for(var j=2;j<=k;j++){
            if(i%j===0){
                break;
            }
       }
       if(j>k){
           countPrimes++;
       }
    }
    return countPrimes;
};