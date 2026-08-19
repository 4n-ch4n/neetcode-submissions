class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const diffMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if (diffMap.has(diff)) {
                return [diffMap.get(diff), i];
            } else {
                diffMap.set(nums[i], i);
            }
        }

        return [];
    }
}
