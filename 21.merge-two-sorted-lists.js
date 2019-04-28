/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	var p = null;
	if ( l1 && ((l1 && !l2) || l1.val <= l2.val)) {
		p = l1;
		l1 = l1.next;
	} else if (l2) {
		p = l2;
		l2 = l2.next;
	}
	var head = p;

	while (l1 != null || l2 != null) {
		if (l1 && (l2 === null || l1.val <= l2.val)) {
			head.next = l1;
			l1 = l1.next;
		} else if (l2 && (l1 === null || l2.val < l1.val)){
			head.next = l2;
			l2 = l2.next;
		}
		head = head.next;
		head.next = null;
	}

	return p;
};

