class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const outputArray: number[] = [];
        let pre = 1;
        let post = 1;

        for (let i = 0; i < nums.length; i++) {
            outputArray.push(pre);
            pre *= nums[i];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            outputArray[i] = outputArray[i] * post;
            post *= nums[i];
        }

        return outputArray;
    }
}
