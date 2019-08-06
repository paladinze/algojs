// maximum_depth(root, depth)
//  return if root is null
//  if root is a leaf node:
//    answer = max(answer, depth)   // update the answer if needed
//    maximum_depth(root.left, depth + 1) // call the function recursively for left child
//    maximum_depth(root.right, depth + 1)     // call the function recursively for right child

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  
  if (!root) return 0;
  let result = 1;

  function func(root, depth) {
    if (!root.left && !root.right) {
      result = Math.max(result, depth)
    }
    if(root.left) {
      func(root.left, depth+1)
    }
    if (root.right) {
      func(root.right, depth+1)
    }
    
  }
  
  func(root, 1)
  return result;
  
    
};