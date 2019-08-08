链接：https://www.nowcoder.com/questionTerminal/8a19cbe657394eeaac2f6ea9b0f6fcf6?f=discussion
来源：牛客网

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
 
function reConstructBinaryTree(pre, vin)
{
    if(vin.length === 0)
        return null;
     
    var root = 0, i, j;
    var left_pre = [], right_pre = [], left_in = [], right_in = [];
     
    var head = new TreeNode(pre[0]);
    for(i = 0; i < vin.length; i++){
        if(vin[i] === pre[0]){
            root = i;
            break;
        }
    }
    for(j = 0; j < root; j++){
        left_pre.push(pre[j+1]);
        left_in.push(vin[j]);
    }
    for(j = root + 1; j < vin.length; j++){
        right_pre.push(pre[j]);
        right_in.push(vin[j]);
    }
     
    head.left = reConstructBinaryTree(left_pre, left_in);
    head.right = reConstructBinaryTree(right_pre, right_in);
     
    return head;
     
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};