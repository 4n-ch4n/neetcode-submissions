class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (!s.length) return false;
        if (s.length === 1) return false;

        const stack: string[] = [];

        for (const char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
                continue;
            }

            const popped = stack.pop();
            if (char === ')' && popped !== '(') return false;
            if (char === '}' && popped !== '{') return false;
            if (char === ']' && popped !== '[') return false;
        }

        if (stack.length > 0) return false

        return true;
    }
}
