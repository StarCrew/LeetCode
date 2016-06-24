/**
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 * For example:Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10){
        return num;
    }
    var result=num;
    var sum=0;
    while(result>=10){
        while(num>=1){
            sum+=num%10;
            num=Math.floor(num/10);
            
        }
        num=sum;
        result=sum;
        sum=0;
    }
    return result;
};