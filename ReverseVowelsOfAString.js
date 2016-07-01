/**
 * Write a function that takes a string as input and reverse only the vowels of a string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var VowelString="aeiouAEIOU";
    var left=0,right=s.length-1;
    s=s.split("");
    while(left<right){
        var temp=0;
        if(VowelString.indexOf(s[left])!==-1 && VowelString.indexOf(s[right])!==-1){
            s[left] = s.splice(right, 1, s[left]);//返回被删除的元素
            right--;
            left++;
        }
        else if(VowelString.indexOf(s[left])!==-1){
            right--;
        }
        else{
            left++;
        }
    }
    
    s=s.join("");
    return s;
};
