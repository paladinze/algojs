var levelOrder = function(root) {
  let result = [];

  function preorder(root, level) {
    if (!root) return;
    if (result[level]) {
      result[level].push(root.val);
    } else {
      result[level] = [root.val];
    }
    preorder(root.left, level + 1);
    preorder(root.right, level + 1);
  }
  preorder(root, 0);

  return result;
};
