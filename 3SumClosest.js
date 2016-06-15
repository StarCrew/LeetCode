/**
*Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
*Return the sum of the three integers. You may assume that each input would have exactly one solution.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var threeSumClosest=0;
    var closestDist=Infinity;
    if(nums.length===3){
        threeSumClosest=nums[0]+nums[1]+nums[2];
        return threeSumClosest;
    }
    function compare(a,b){
        return a-b;
    }
    nums=nums.sort(compare);
    for(var i=0;i<nums.length-2;i++){
        var p=i+1,q=nums.length-1;
        if(i!==0 && nums[i-1]==nums[i]){
            continue;
        }
        while(p<q){
            var sum=nums[i]+nums[p]+nums[q];
            var temp=Math.abs(sum - target);
            if(temp<closestDist){
                closestDist=temp;
                threeSumClosest=sum;
            }
            if(sum<target){
                p++;
            }
            else{
                q--;
            }
        }
    }
    return threeSumClosest;
};