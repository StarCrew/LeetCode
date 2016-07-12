/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null){
        return true;
    }
    return ifSymmetric(root.left, root.right);        

    function ifSymmetric(tree1, tree2){
        if(tree1 ===null && tree2 ===null){
            return true;
        }
        else if(tree1 === null || tree2 === null){
            return false;
        }
        if(tree1.val != tree2.val){
            return false;
        }
        else
            return (ifSymmetric(tree1.left, tree2.right) && ifSymmetric(tree1.right, tree2.left));
    }
};
