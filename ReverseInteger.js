/**
 * Reverse digits of an integer.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x > 2147483647|| x < -2147483648){
        return 0;  
    }  
    var result=0;
    var num=Math.abs(x);
    while(num>=1){
        result=result*10+num%10;
        num=Math.floor(num/10);
    }
     if(result > 2147483647|| result < -2147483648){
        return 0;  
    } 
    return x>0?result:-result;
};