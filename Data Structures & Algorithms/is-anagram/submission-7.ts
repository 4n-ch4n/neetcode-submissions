class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const sMap = new Map<string, number>();
        const tMap = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            if (sMap.has(s[i])) {
                sMap.set(s[i], sMap.get(s[i]) + 1);
            } else {
                sMap.set(s[i], 1);
            }
            if (tMap.has(t[i])) {
                tMap.set(t[i], tMap.get(t[i]) + 1);
            } else {
                tMap.set(t[i], 1);
            }
        }

        for (const key of sMap.keys()) {
            if (sMap.get(key) !== tMap.get(key)) return false;
        }

        return true;
    }
}
