/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var map = {};

	for (let i in nums) {
		let num = nums[i];	

		if (map[target - num] != null) {
			return [map[target - num], i];
		}

		map[num] = i;
	};

    
};

