/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	head = {
		val: 0,
		next: head
	};
	let p = head;
	
	while (head != null && head.next != null) {

		if (head.next.val === val) {
			head.next = head.next.next;
		} else {
			head = head.next;
		}

	}

	return p.next;
};

