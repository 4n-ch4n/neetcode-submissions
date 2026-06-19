class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramsMap = new Map<string, string[]>();

        for (const str of strs) {
            const key = str.split('').sort().join();

            if (anagramsMap.has(key)) {
                anagramsMap.get(key).push(str);
            } else {
                anagramsMap.set(key, [str]);
            }
        }

        return Array.from(anagramsMap.values());
    }
}
