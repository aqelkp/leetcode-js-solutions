/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.89%)
 * Total Accepted:    829.8K
 * Total Submissions: 2.7M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
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
var findNodeLength = function(list) {
	var length = 1;

	while (list.next !== null){
		list = list.next;
		length++;
	}

	return length;
}

var addTwoNumbers = function (l1, l2) {
	var first_length = findNodeLength(l1);
	var second_length = findNodeLength(l2);
	var new_list = {};
	var new_list_head = new_list;

	var bigger_list = first_length >= second_length ? l1 : l2;
	var smaller_list = first_length >= second_length ? l2 : l1;

	var backlog = null;
	
	for (var index = 0; index < Math.max(first_length, second_length); index++) {

		if (index > 0) {
			new_list.next = {};
			new_list = new_list.next;
		}

		if (index >=  Math.min(first_length, second_length)) {
			var num_add = bigger_list.val;

			num_add += backlog ? backlog : 0;
			backlog = null;

			if (num_add >= 10) {
				backlog = 1;
				num_add -= 10;
			}

			new_list.val = num_add;
			new_list.next = null;
			bigger_list = bigger_list.next;
		} else {
			// Handle > 10 cases
			var num_add = bigger_list.val + smaller_list.val;
			
			num_add += backlog ? backlog : 0;
			backlog = null;

			if (num_add >= 10) {
				backlog = 1;
				num_add -= 10;
			}

			new_list.val = num_add;
			new_list.next = null;
			bigger_list = bigger_list.next;
			smaller_list = smaller_list.next;
		}
	}

	if (backlog) {
		new_list.next = {
			val: backlog,
			next: null
		}
		new_list = new_list.next.next;
	}

	new_list = null;
	console.log(JSON.stringify(new_list_head))
	return new_list_head;
};
