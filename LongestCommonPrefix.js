/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return "";
    }
    if(strs.length === 1){
        return strs[0];
    }
    var minLen = 0;
    var prefix = strs[0];
    for(var i = 1;i < strs.length;i++){
        minLen = prefix.length < strs[i].length ? prefix.length : strs[i].length;
    }
    if(minLen === 0){
        return "";
    }
    var j;
    for(i = 0;i<strs.length;i++){
        j=0;
        while(j < minLen){
            if (prefix[j] !== strs[i][j]){
                break; 
            }
            j++;
        }
        prefix = prefix.substr(0,j); 
    }
    return prefix;
};
