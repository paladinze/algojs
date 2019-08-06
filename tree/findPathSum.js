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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, target) {
  if (!root) return false;
  let sum = 0;
  let result = false;

  function func(root, sum) {
    if (!root.left && !root.right) {
      if (root.val + sum === target) {
        result = true;
        return;
      }
    }
    if (root.left) {
      func(root.left, sum + root.val);
    }
    if (root.right) {
      func(root.right, sum + root.val);
    }
  }
  func(root, sum);
  return result;
};
