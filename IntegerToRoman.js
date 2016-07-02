/**
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var intToRoman="";
    var digit = 0; 
    var roman = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                   ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], 
                   ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
                   ["", "M", "MM", "MMM"]
                  ];
    while(num!==0){
        var remain = num % 10;  
        intToRoman = roman[digit][remain] + intToRoman;  
        digit++;  
        num=Math.floor(num/10);
    }
    return intToRoman;
};