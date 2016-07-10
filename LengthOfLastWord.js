/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.replace(/(^\s*)|(\s*$)/g,'');
    s=s.split(" ");
    if(s.length===0){
        return 0;
    }
    if(s[s.length-1]===""){
        return 0;
    }
    var LastWord=s[s.length-1].toString();
    var lengthOfLastWord=LastWord.split("").length;
    return lengthOfLastWord;
};
