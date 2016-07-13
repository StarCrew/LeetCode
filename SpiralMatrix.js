/**
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var spiralOrder = [];
    if (matrix.length === 0){
        return spiralOrder;
    }  
    var beginX = 0, endX = matrix[0].length - 1;  
    var beginY = 0, endY = matrix.length - 1;
    while (true) {  
        // From left to right  
        for ( var i = beginX; i <= endX; ++i )  
            spiralOrder.push(matrix[beginY][i]);
        beginY ++;   
        if (beginY > endY ) break;  
        // From top down  
        for (i = beginY; i <= endY; ++i)  
            spiralOrder.push(matrix[i][endX]);
        endX--;
        if (beginX >endX) break;  
        // From right to left  
        for (i = endX; i >= beginX; --i)  
            spiralOrder.push(matrix[endY][i]);
        endY--;
        if (beginY > endY) break;  
        // From bottom up  
        for (i = endY; i >= beginY; --i)  
            spiralOrder.push(matrix[i][beginX]);
        beginX++;
        if (beginX > endX) break;  
    }  
    return spiralOrder;  
};
