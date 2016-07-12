/**
 * Given a binary tree, return the inorder traversal of its nodes' values.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var stack = [];
    var list= [];
    if(root === null) {
        return list;
    }
    while(stack.length !== 0 || root) {
        if(root) {
            stack.push(root);
            root = root.left;
        } 
        else {
           root = stack.pop(); 
           list[list.length]=root.val;
           root = root.right;
        }
    }
    return list;
};
