/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    if(x===0){
        return true;
    }
    x=x.toString();
    x=x.split("");
    var i=0,j=x.length-1;
    while(i<j){
        if(x[i]===x[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
};
