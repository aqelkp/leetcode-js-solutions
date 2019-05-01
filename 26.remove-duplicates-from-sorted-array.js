/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
	
	var p1 = 0, p2 = 0;

	while (p2 < arr.length) {

		while ( arr[p1] === arr[p2 + 1] ) {
			p2++;
		}

		arr[++p1] = arr[p2];

	}

	return p1 + 1;

};

