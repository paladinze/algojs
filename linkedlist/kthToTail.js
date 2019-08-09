function FindKthToTail(head, k) {
  if (!head || k === 0) {
    return null;
  }

  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }
  return arr[arr.length - k];
}
