/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
	
	var dummy = {
		next: head
	}

	head = dummy;

	for (let i = 0; i < m - 1; i++) {
		head = head.next;
	}

	var p1 = head;
	var p2 = head.next;

	var rev = {
		next: null
	};

	head = head.next;

	for (let i = m; i <= n; i++) {
		let temp = head;
		head = head.next;
		temp.next = rev.next;
		rev.next = temp;
	}

	let p3 = head;

	p1.next = rev.next;
	p2.next = p3;


	return dummy.next;

};

