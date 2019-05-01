/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function(head) {
	let dummy = {
		next: head
	}

	head = dummy;

	while (head.next != null && head.next.next != null) {
		let p1 = head.next; 
		let p2 = head.next.next;
		let p3 = head.next.next.next;


		head.next = p2;
		p2.next = p1;
		p1.next = p3;

		head = head.next.next;

	}

	return dummy.next;
    
};

