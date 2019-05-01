/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

	var p = head;

	var reverse = function(head) {

		if (head == null) return null;

		reverse(head);

		head.next = p.next;
		p.next = head;

	}
    
};

