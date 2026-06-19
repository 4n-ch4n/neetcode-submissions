class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length <= 1) return true

        const cleanedString = s.trim().toLowerCase().replaceAll(/[^a-z0-9]/g, '');

        for (let i = 0; i < Math.round(cleanedString.length/2); i++) {
            let forward = cleanedString[i];
            let backward = cleanedString[cleanedString.length - 1 - i];
            if (forward !== backward) return false;
        }

        return true;
    }
}
