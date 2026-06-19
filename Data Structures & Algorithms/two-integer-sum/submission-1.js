class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let viewed = {};

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if (nums[i] in viewed) {
                return [viewed[nums[i]], i];
            } else {
                viewed[diff] = i;
            }
        }
    }
}
