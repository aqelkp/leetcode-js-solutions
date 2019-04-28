/*
 * @lc app=leetcode id=1019 lang=javascript
 *
 * [1019] Next Greater Node In Linked List
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
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
	let stack = [];
	let output = [];
	
	var reverse = function(head) {
		if (head.next) {
			reverse(head.next);
		}

		let stack_pop = Number.MIN_SAFE_INTEGER; 
		
		while (stack.length > 0 && stack_pop <= head.val) {

			stack_pop = stack.pop();
		}

		if (stack.length === 0 && stack_pop <= head.val) {
			output.unshift(0);
			stack.push(head.val);
		} else {
			output.unshift(stack_pop);
			stack.push(stack_pop);
			stack.push(head.val);
		}

		// console.log(head.val)
		// console.log(stack)
		// console.log(output);
		// console.log("\n");
	}

	reverse(head);

	return output;
};

// var arr = [1,2,3,4,4,5];

// class ListNode {
// 	constructor(val){
// 		this.val = val;
// 		this.next = null;
// 	}
// }

// var list = new ListNode(arr[0]);
// var head = list;

// for (var i = 1; i < arr.length; i++) {
// 	list.next = new ListNode(arr[i]);
// 	list = list.next;
// }

// console.log(JSON.stringify(nextLargerNodes(head)));
