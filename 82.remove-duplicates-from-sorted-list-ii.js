/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var dummy = {
		next: head
	};

	head = dummy;

	while (head.next != null) {
		let val = head.next.val;

		let p = head.next;
		let dup = false;

		while (p.next != null && p.next.val === val) {
			dup = true;
			p = p.next;
		}

		if (dup) {
			head.next = p.next;
		} else {
			head = head.next;
		}

	}

	return dummy.next;
};

