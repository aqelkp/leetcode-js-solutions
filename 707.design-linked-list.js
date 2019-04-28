/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
	this.next = null;
	this.val = 0;
	this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
	let head = this.next;

	for (let i = 0; i < index; i++) {
		if (head === null) return -1;
		head = head.next;
	}

	return head != null ? head.val : -1;
    
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
	var node = {
		val: val,
		next: this.next
	};
	
	this.next = node;

	if (this.tail == null) this.tail = this.next;

	console.log(`Add at head: ${val}`)
	console.log(JSON.stringify(this))
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var node = {
		val: val,
		next: null
	};

	if (this.tail !== null) this.tail.next = node;
	this.tail = node;

	console.log(`Add at tail: ${val}`)
	console.log(JSON.stringify(this))
};

/**
 * Add a node of value val before the index-th node in the linked list. 
 * If index equals to the length of linked list, the node will be appended to the end of linked list. 
 * If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
	let head = this;
	let node = {
		val: val
	}

	for (let i = 0; i < index; i++) {
		if (head === null) return -1;

		head = head.next;
	}
	
	if (index == 0) {
		node.next = this.head;
		this.next = node;
		this.tail = node;
	} else if (head === null){
		node.next = null;
		this.tail = node;
	} else if (head.next !== null) {

		node.next = head.next;
		head.next = node;

	} 

	console.log(`Add at index: ${val} at index ${index}`)
	console.log(JSON.stringify(this, null, 4))

};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let head = this.next;
	
	console.log(`Delete a node at ${index}`);
	console.log(JSON.stringify(this, null, 4))

	for (let i = 0; i < index - 1 && index > 0; i++) {
		

		head = head.next;
		if (head.next == null) return;
	}

	if (index === 0 && this.next != null) {
		this.next = this.next.next;
	}

	if (head.next !== null && head.next.next !== null) {
		head.next = head.next.next;
	} else {
		head.next = null;
		this.tail = head;
	}

	console.log(JSON.stringify(this, null, 4))

};

var obj = new MyLinkedList()
// var param_1 = obj.get(0)
// obj.addAtIndex(1,2);
// obj.get(0)
// obj.get(1)
// obj.addAtIndex(0,1)
// obj.get(0)
// obj.get(0)

obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(1,2)
obj.deleteAtIndex(1)

console.log(JSON.stringify(obj, null, 4))

// Failed ["MyLinkedList","get","addAtIndex","get","get","addAtIndex","get","get"]\n
// [[],[0],[1,2],[0],[1],[0,1],[0],[1]]
