/**
 *Given a non-negative number represented as an array of digits, plus one to the number.

 *The digits are stored such that the most significant digit is at the head of the list.

 */

 /**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry=1;
    var temp;
    for(var i=digits.length-1; i>=0; i--){
        temp=digits[i];
        digits[i]=temp+carry;
       if(digits[i]===10){
           carry=1;
           digits[i]=0;
       }
       else{
           carry=0;
           break;
       }
    }
    if(carry===1){
        digits.unshift(1);
    }
    return digits;
};