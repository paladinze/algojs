/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(head) {
  if (!head) return null;
  let curr = head;
  let prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
