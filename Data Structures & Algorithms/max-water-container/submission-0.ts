class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const results: number[] = [];

        let left = 0;
        let right = heights.length - 1;
        while (left < right) {
            const water = (right - left) * Math.min(heights[left], heights[right]);
            results.push(water);

            if (heights[left] < heights[right]) {
                left++;
            } else if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }

        return Math.max(...results);
    }
}
