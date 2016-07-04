/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var titleToNumber=0;
    for(var i=0;i<s.length;i++){
        titleToNumber=titleToNumber*26+(s.charCodeAt(i)-65+1);
    }
    return titleToNumber;
};
