class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            const value = nums.reduce((prev, curr, index) => {
                if (index === i) return prev
                return prev * curr
            }, 1);
            result.push(value);
        }

        return result;
    }
}
