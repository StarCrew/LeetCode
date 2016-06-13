/**
* Given n non-negative integers a1, a2, ..., an, 
* where each represents a point at coordinate (i, ai). n vertical lines are drawn 
* such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, 
* which together with x-axis forms a container, such that the container contains the most water.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i=0,j=height.length-1;
    var maxArea=0;
    var area=0
    while(i<j){
        area=(j-i)*Math.min(height[i],height[j]);
        if(area>maxArea){
            maxArea=area;
        }
        if(height[i]<height[j]){
            i++;
        }
        else{
            j--;
        }
    }
    return maxArea;
};