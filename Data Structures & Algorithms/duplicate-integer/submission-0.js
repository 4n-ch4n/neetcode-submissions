class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let viewd = {};
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] in viewd) {
                return true;
            }
            else {
                viewd[nums[i]] = 1;
            }
        }
        return false;
    }
}
