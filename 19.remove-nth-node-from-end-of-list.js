/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	if (head == null) return null;
	
	head = {
		val: 0,
		next: head
	}

	var p = head;
	var fast = head;
	
	for (let i = 0; i < n; i++){
		fast = fast.next;
	}

	while (fast.next != null) {
		head = head.next;
		fast = fast.next;
	}

	if (head.next.next != null) {
		head.next = head.next.next;
	} else {
		head.next = null;
	}

	return p.next;
};

