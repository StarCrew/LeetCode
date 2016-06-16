/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var fourSum=[];
    if(nums.length<4){
        return fourSum;
    }
    function compare(a,b){
        return a-b;
    }
    nums=nums.sort(compare);
    for(var i=0;i<nums.length-3;i++){
        if(i!==0 && nums[i-1]==nums[i]){
            continue;
        }
        for(var j=i+1;j<nums.length-2;j++){
            if(j>i+1 &&nums[j-1]==nums[j]){
                continue;
            }
            var p=j+1,q=nums.length-1;
            var sum=0;
            while(p<q){
                sum=nums[i]+nums[j]+nums[p]+nums[q];
                if(sum===target){
                    fourSum.push([nums[i],nums[j],nums[p],nums[q]]);
                    while(p<q && nums[p+1]===nums[p]){
                        p++;
                    }
                    while(p<q && nums[q-1]===nums[q]){
                        q++;
                    }
                    p++;
                    q--;
                }
                else if(sum<target){
                    p++;
                }
                else{
                    q--;
                }
            }
        }
    }
    return fourSum;
};
