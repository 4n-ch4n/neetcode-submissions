class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let right = numbers.length - 1;
        for (let i = 0; i < numbers.length;) {
            if (numbers.at(i) + numbers.at(right) > target) right--;
            if (numbers.at(i) + numbers.at(right) < target) i++;
            if (numbers.at(i) + numbers.at(right) === target) return[i + 1, right + 1];
        }
    }
}
