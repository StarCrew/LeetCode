/**
 * Given two numbers represented as strings, return multiplication of the numbers as a string.
 * Note:
 * The numbers can be arbitrarily large and are non-negative.
 * Converting the input string to integer is NOT allowed.
 * You should NOT use internal library such as BigInteger.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
   if(num1 ==="0" || num2 ==="0") return "0";  
    var len1 = num1.length, len2 = num2.length;  
    var n1=[],n2=[],res=[];  
    for(var i=0; i<len1; ++i){
        n1[i] = num1[i] - '0';
    }
    for(i=0; i<len2; ++i){
        n2[i] = num2[i] - '0'; 
    } 
    for(i=0;i<len1+len2;i++){
        res[i]=0;
    }
    for(i=0; i<len1; ++i){
        for (var j=0; j<len2; ++j){
            res[i+j+1] += n1[i]*n2[j];
        }  
    }
    var ss = "";  
    for (var k=len1+len2-1; k>=0; --k){  
        if(k>0){
           res[k-1] += Math.floor(res[k]/10);  
        }  
        res[k] %= 10;  
        ss = res[k]+ss;  
    }  
    ss = ss[0]==='0'? ss.substr(1):ss;  
    return ss;  
};
