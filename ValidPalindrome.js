/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^0-9a-z]+/ig,"");//正则表达式取出字符串的所有字母和数字
    s=s.toLowerCase();//把字符串里面的字母变小写，用于忽略大小写问题
    if(s.length<2){
        return true;
    }
    var i=0,j=s.length-1;
    while(i<j){
        if(s[i]===s[j]){
            i++;
            j--
        }
        else{
            break;
        }
    }
    if(i<j){
        return false;
    }
    return true;
};
