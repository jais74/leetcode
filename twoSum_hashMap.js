/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let matchMap = {};
    for(let i = 0; i < nums.length; i++){
     let compliment = target - nums[i];
        if(compliment in matchMap){
            return [i, matchMap[compliment]]
        }
        matchMap[nums[i]] = i;
    }
};
