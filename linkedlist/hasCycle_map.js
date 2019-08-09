/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;
  let map = new WeakMap()
  let curr = head;
  let hasCycle = false;
  while (curr) {
    if (map.has(curr)) {
      return true;
    }
    map.set(curr)
    curr = curr.next;
  }
  return hasCycle;
    
};