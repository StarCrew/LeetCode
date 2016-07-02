/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1){
        return s;
    }
    var res =[];
    s=s.split("");
    var i=0,j;
    var gap = numRows - 2;
    for(j=0;j<numRows;j++){
         res[j]="";
    }
    while (i < s.length)
    {
        for (j = 0; i < s.length && j < numRows; ++j)
        {
            res[j] += s[i++];
            
        }
        for (j = gap; i < s.length && j > 0; --j)
        {
            res[j] += s[i++];
        }
    }
    var str="";
    for (i = 0; i < numRows; ++i)
    {
        str += res[i];
    }
    return str;
};