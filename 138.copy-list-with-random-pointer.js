/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
	
	if (head == null) return null;

	let p = head;

	while (head != null) {
		let copy = {
			val: head.val, 
			next: head.next
		}

		head.next = copy;
		head = head.next.next;
	}

	head = p;

	while (head != null) {
		head.next.random = head.random && head.random.next || null;
		head = head.next.next;
	}

	let clone = {
		next: null
	};
	let rc = clone;
	let original = {
		next: null
	};

	head = p;
	
	while (head != null && head.next != null) {
		let p1 = head;
		let p2 = head.next;

		original.next = p1;
		clone.next = p2;
		original = original.next;
		clone = clone.next;

		head = head.next.next;
	}

	original.next = null;

	return rc.next;
};

