/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var result = []; 
    var c;
    for(var i=0;i<s.length;i++){
        c=s[i];
        if (c === "(" || c === "{" || c === "[")  
        { 
            result.push(c);
        }
        else{
            if(result.length === 0){
                return false;
            }
            var pre = result[result.length-1];  
            switch(c)  
            {  
            case ")":  
                if (pre === "(")  
                  result.pop();  
                else   
                  return false;  
                break;  
                    
            case "}":  
                if (pre === "{")  
                  result.pop();  
                else   
                  return false;  
                break;  
                  
            case "]":  
                if (pre === "[")  
                  result.pop();  
                else   
                  return false;  
                break;  
            }  
        }  
    }  
    if (result.length === 0)  
       return true;  
    else return false;  
    
};
