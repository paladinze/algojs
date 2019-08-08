/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(preorder, inorder) {
  function helper(p1, p2, i1, i2) {
    if (p1 > p2 || i1 > i2) return null; // sanity check
    let rootVal = preorder[p1];
    let inIndex = inorder.indexOf(rootVal);
    let leftSize = inIndex - i1;

    let node = new TreeNode(rootVal);

    node.left = helper(p1 + 1, p1 + leftSize, i1, inIndex - 1);
    node.right = helper(p1 + leftSize + 1, p2, inIndex + 1, i2);

    return node;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
}
