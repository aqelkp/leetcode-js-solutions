/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
	let slow = head;
	let fast = head;

	while (fast !== null && fast.next != null && fast.next.next != null) {

		slow = slow.next;
		fast = fast.next.next;

		if (fast === slow) return true;
	}

	return false;

};

