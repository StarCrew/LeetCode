/**
 * Given two arrays, write a function to compute their intersection.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    function compare(a,b){
        return a-b;
    }
    nums1 = nums1.sort(compare);
    nums2 = nums2.sort(compare);
    var res = [];
    var len1=nums1.length;
    var len2=nums2.length;
    var t1=0,t2=0;
    while(t1<len1 && t2<len2){
        if(nums1[t1]===nums2[t2]){
            res.push(nums1[t1]);
            t1++;
            t2++
        }
        else if(nums1[t1]<nums2[t2]){
            t1++;
        }
        else{
            t2++
        }
    }

    return res;
};
