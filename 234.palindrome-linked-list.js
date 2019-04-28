/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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



var isPalindrome = function(head) {
	var tail = head;
	var result = true;

	var reverse = function(tail) { 
	
		if  (tail === null) return 0;

		reverse(tail.next);

		// console.log(`tail: ${tail.val}, head: ${head.val}`)
		

		if (head.val != tail.val){
			result = false;
		}

		head = head.next;
	};
	reverse(tail);
	
	return result;
};
