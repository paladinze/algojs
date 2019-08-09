/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isMirror(root) {
  if (!root) return true;

  function isMirror(leftRoot, rightRoot) {
    if (!leftRoot && !rightRoot) return true;
    if (!leftRoot || !rightRoot) return false;
    return (
      leftRoot.val === rightRoot.val &&
      isMirror(leftRoot.left, rightRoot.right) &&
      isMirror(leftRoot.right, rightRoot.left)
    );
  }

  return isMirror(root.left, root.right);
}
