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

            if (diff in viewed) {
                return [viewed[diff], i];
            } 
            viewed[nums[i]] = i;
        }

        return [];
    }
}
