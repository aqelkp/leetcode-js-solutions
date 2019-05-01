/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	let lesser = {
		next: null
	};
	let greater = {
		next: null
	};
	var p1 = lesser;
	var p2 = greater;

	while (head != null) {
		let ref = head;

		head = head.next;

		if (ref.val >= x) {
			greater.next = ref;
			greater = greater.next;
		} else {
			lesser.next = ref;
			lesser = lesser.next;
		}

		ref.next = null;

		
	}

	lesser.next = p2.next;
	
	return p1.next;
    
};

