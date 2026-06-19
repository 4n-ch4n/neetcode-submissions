class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);

        let max = 0;

        for (const num of numsSet.values()) {
            if (!numsSet.has(num - 1)) {
                let longestStreak = 1;
                let currentNum = num;

                while (numsSet.has(currentNum + 1)) {
                    longestStreak++;
                    currentNum++;
                }

                max = Math.max(max, longestStreak)
            }
        }

        return max;
    }
}
