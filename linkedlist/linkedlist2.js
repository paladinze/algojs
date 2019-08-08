/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null;
};

var Node = function(val, next) {
  this.val = val;
  this.next = next;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (!this.head || index < 0) return -1;
  if (index == 0) {
    return this.head.val;
  }
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    if (curr.next) {
      curr = curr.next;
    } else {
      return -1;
    }
  }

  return curr.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  if (!this.head) {
    this.head = new Node(val, null);
    return;
  }
  this.head = new Node(val, this.head);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  if (!this.head) {
    this.head = new Node(val, null);
  }
  let curr = this.head;
  while (curr.next != null) {
    curr = curr.next;
  }
  curr.next = new Node(val, null);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0) {
    return;
  }
  if (index == 0) {
    this.addAtHead(val);
    return;
  }

  let curr = this.head;
  let prev = null;
  for (let i = 0; i < index; i++) {
    if (curr == null) {
      return -1;
    }
    prev = curr;
    curr = curr.next;
  }
  if (curr == null) {
    this.addAtTail(val);
  } else {
    prev.next = new Node(val, prev.next);
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0) {
    return;
  }
  if (!this.head) {
    return;
  }
  if (index == 0) {
    this.head = this.head.next;
    return;
  }

  let curr = this.head;
  let prev = null;
  for (let i = 0; i < index; i++) {
    if (curr == null) {
      return;
    }
    prev = curr;
    curr = curr.next;
  }
  if (curr == null) {
    return;
  } else {
    prev.next = curr.next;
  }
};

MyLinkedList.prototype.logList = function() {
  let curr = this.head;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  console.log(arr);
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
var linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);
linkedList.logList();
console.log(linkedList.get(-1));
linkedList.deleteAtIndex(1);
console.log(linkedList.get(-3));
linkedList.logList();

linkedList.addAtHead(4);
linkedList.logList();

// linkedList.addAtTail(3); //链表变为1-> 3
// linkedList.logList();

// linkedList.addAtIndex(4, 2); //链表变为1-> 2-> 3
// linkedList.logList();

// linkedList.deleteAtIndex(-1); //现在链表是1-> 3
// linkedList.logList();

/*
["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
[[],[1],[3],[1,2],[-1],[1],[-3]]
*/
