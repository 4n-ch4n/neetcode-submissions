class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let firstCharacters = {};
        for (let i = 0; i < s.length; i++) {
            if (s[i] in firstCharacters) {
                firstCharacters[s[i]] += 1;
            } else {
                firstCharacters[s[i]] = 1;
            }
        }

        let secondCharacters = {};
        for (let i = 0; i < t.length; i++) {
            if (t[i] in secondCharacters) {
                secondCharacters[t[i]] += 1;
            } else {
                secondCharacters[t[i]] = 1;
            }
        }

        for (let i in firstCharacters) {
            if (firstCharacters[i] !== secondCharacters[i])
                return false
        }

        for (let i in secondCharacters) {
            if (firstCharacters[i] !== secondCharacters[i])
                return false
        }

        return true;
    }
}
