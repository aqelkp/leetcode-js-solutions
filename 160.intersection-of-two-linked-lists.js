/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
	
	var lenA = 0, lenB = 0;
	var p1 = headA, p2 = headB;

	while (headA !== null) {
		headA = headA.next;
		lenA++;
	}

	while (headB !== null) {
		headB = headB.next;
		lenB++;
	}

	headA = p1, headB = p2;

	if (lenA > lenB) {
		for (let i = 0; i < lenA - lenB; i++) {
			headA = headA.next;
		}
	} else if (lenB > lenA) {
		for (let i = 0; i < lenB - lenA; i++) {
			headB = headB.next;
		}
	}

	while (headA !== null && headB !== null) {
		if (headA === headB) return headA;
		headA = headA.next;
		headB = headB.next;
	}

	return null;
};

