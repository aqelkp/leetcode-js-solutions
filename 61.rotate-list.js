/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
	if (head == null) return null;

    var dummy = {
		next: head
	};

	head = dummy;
	var tail = head;
	var length = 0;

	while (tail.next != null) {
		length++;
		tail = tail.next;
	}

	k = k % length;

	for (let i = 0; i < length - k; i++) {
		head = head.next;
	}

	tail.next = dummy.next;
	dummy.next = head.next;
	head.next = null;


	return dummy.next;

};

