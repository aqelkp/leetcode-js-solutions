/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
	var s = head;
	
	while (head !== null) {
		if (head.next && head.next.val == head.val) {
			head.next = head.next.next;
		} else {
			head = head.next;
		}
		
	}
	
	return s;
};

