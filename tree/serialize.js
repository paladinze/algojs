/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Serialize(root) {
  let arr = [];
  if (!root) return arr;

  function helper(root) {
    if (!root) {
      arr.push("$");
    } else {
      arr.push(root.val);
      helper(root.left);
      helper(root.right);
    }
  }
  helper(root);
  return arr;
}

function Deserialize(s) {
  let root = null;
  if (!s || !s.length) {
    return null;
  }

  let val = s.shift();
  if (typeof val == "number") {
    root = new TreeNode(val);
    root.left = Deserialize(s);
    root.right = Deserialize(s);
  }

  return root;
}
