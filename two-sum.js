/**
 * Runtime: 164 ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var j;
    for (var i = 0; i< nums.length; i++) {
        j = i;  
        for( ;j < nums.length - 1; j++) {
            if ((nums[i] + nums[j + 1]) === target) { 
                return [i, j + 1];
            }
        }
    }
};

/**
 * Runtime: 72 ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumFaster = function(nums, target) {
    var dict = {}, complement;
    
    for(var i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (dict[complement] !== undefined) {
           return [dict[complement], i];
        }
        dict[nums[i]] = i;
    }
};
