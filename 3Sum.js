/**
*Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
*Find all unique triplets in the array which gives the sum of zero.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var threeSum=[];
    if(nums.length<3){
        return threeSum;
    }
    function compare(a,b){
        return a-b;
    }
    nums=nums.sort(compare);
    for(var i=0;i<nums.length-2;i++){
        if(i!==0 && nums[i-1]==nums[i]){
            continue;
        }
        var p=i+1,q=nums.length-1;
        var sum=0;
        while(p<q){
            sum=nums[i]+nums[p]+nums[q];
            if(sum===0){
                threeSum.push([nums[i],nums[p],nums[q]]);
                while(p<q && nums[p+1]===nums[p]){
                    p++;
                }
                while(p<q && nums[q-1]===nums[q]){
                    q++;
                }
                p++;
                q--;
            }
            else if(sum<0){
                p++;
            }
            else{
                q--;
            }
        }
    }
    return threeSum;
};