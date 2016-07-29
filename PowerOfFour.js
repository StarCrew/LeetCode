/**
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num === 1){
        return true;
    }
    if(num < 4){
        return false;
    }
    while(num !==1){
        if(num % 4 === 0){
            num = Math.floor(num/4);
        }
        else{
            break;
        }
    }
    if(num === 1){
        return true;
    }
    return false;
};
