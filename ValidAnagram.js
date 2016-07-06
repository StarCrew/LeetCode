/**
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    var s1 = s.split("");
    var t1 = t.split("");
    s1.sort();
    t1.sort();
    var ss = s1.join("");
    var tt = t1.join("");
    if(ss !== tt){
      return false;
    }
    return true;
};
