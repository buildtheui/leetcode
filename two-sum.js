/**
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
