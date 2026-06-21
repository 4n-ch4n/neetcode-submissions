class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let res = 0;

        let left = 0;
        let right = heights.length - 1;
        while (left < right) {
            const water = (right - left) * Math.min(heights[left], heights[right]);
            res = Math.max(res, water);

            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return res;
    }
}
