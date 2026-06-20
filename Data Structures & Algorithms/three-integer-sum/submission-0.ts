class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const results: number[][] = [];

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            if (nums[i] > 0) break;
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                let currentSum = nums[i] + nums[j] + nums[k]

                if (currentSum < 0) {
                    j++;
                } else if (currentSum > 0) {
                    k--;
                } else {
                    results.push([nums[i], nums[j], nums[k]]);
                    j++;
                    while (nums[j] === nums[j - 1] && j < k) {
                        j++;
                    }
                }
            }
        }

        return results;
    }
}
