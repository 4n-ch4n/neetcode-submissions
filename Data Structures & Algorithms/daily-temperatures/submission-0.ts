class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const output: number[] = Array.from({ length: temperatures.length }, () => 0);
        const stack: number[][] = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length !== 0 && temperatures[i] > stack.at(-1).at(0)) {
                const [stackTemperature, stackIndex] = stack.pop();
                const diff = i - stackIndex;
                output[stackIndex] = diff;
            }
            stack.push([temperatures[i], i]);
        }

        return output;
    }
}
