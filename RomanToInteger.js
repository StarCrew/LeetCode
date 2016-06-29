/**
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanToInt=0;
    var roman = new Array(7);
    roman['I']=1;
    roman['V']=5;
    roman['X']=10;
    roman['L']=50;
    roman['C']=100;
    roman['D']=500;
    roman['M']=1000;
    for(var i=s.length-1;i>=0;i--){
        if(i===s.length-1)  
        {  
            romanToInt=roman[s[i]];  
            continue;  
        }  
        if(roman[s[i]] >= roman[s[i+1]]){
            romanToInt+=roman[s[i]];
        }  
        else{
            romanToInt-=roman[s[i]];  
        }  
    }
    return romanToInt;
};